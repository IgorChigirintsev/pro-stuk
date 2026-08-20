import 'dart:convert';
import 'dart:io' show Platform;

import 'package:flutter/foundation.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:sign_in_with_apple/sign_in_with_apple.dart';

import '../strings.dart';
import 'account.dart';
import 'account_api.dart';

/// Идентификатор веб-клиента OAuth. Задаётся при сборке, как и адрес API.
///
/// Именно веб-клиент, а не Android: приложение просит с ним токен, чтобы в
/// поле aud оказался он, и сервер смог убедиться, что вход наш.
const googleServerClientId = String.fromEnvironment('GOOGLE_SERVER_CLIENT_ID');

/// Вход, гараж и баланс проверок.
///
/// Сервер — единственный источник истины. Копия состояния держится локально
/// только затем, чтобы гараж открывался мгновенно и работал без сети; ничего
/// по этой копии не разрешается. Свежесть проверяется одним коротким запросом
/// по номеру версии — совпала, и сервер отвечает пустотой.
class AccountService extends ChangeNotifier {
  AccountService({AccountApi? api, FlutterSecureStorage? secure})
      : _api = api ?? AccountApi(),
        _secure = secure ?? const FlutterSecureStorage();

  final AccountApi _api;
  final FlutterSecureStorage _secure;

  static const _sessionKey = 'session';
  static const _cacheKey = 'account_cache';

  String? _session;
  AccountState? _state;
  bool _busy = false;

  AccountState? get state => _state;
  bool get signedIn => _session != null;
  bool get busy => _busy;
  String? get session => _session;

  /// Загрузка при старте: сначала из памяти телефона, потом сверка с сервером.
  /// Порядок важен — гараж должен появиться сразу, а не после сети.
  Future<void> init() async {
    _session = await _readSession();
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_cacheKey);
    if (raw != null) {
      try {
        _state = AccountState.fromJson(
            jsonDecode(raw) as Map<String, dynamic>);
      } catch (_) {
        // Испорченный кэш — не повод падать: сервер отдаст состояние заново.
      }
    }
    notifyListeners();
    if (_session != null) {
      await refresh();
    }
  }

  /// Хранилище ключей на iOS переживает удаление приложения, и туда попадает
  /// сессия от прошлой установки. Проверяем, что она ещё жива.
  Future<String?> _readSession() async {
    try {
      return await _secure.read(key: _sessionKey);
    } catch (_) {
      return null;
    }
  }

  /// Молчаливый вход: если человек уже разрешал доступ на этом устройстве,
  /// системного окна не будет.
  Future<bool> signInSilently() async {
    if (!Platform.isAndroid) return false;
    try {
      final google = GoogleSignIn.instance;
      await google.initialize(serverClientId: googleServerClientId);
      final account = await google.attemptLightweightAuthentication();
      final token = account?.authentication.idToken;
      if (token == null) return false;
      return _exchange('google', token);
    } catch (_) {
      return false;
    }
  }

  /// Вход через Google. Первый раз показывает системный выбор аккаунта.
  Future<bool> signInWithGoogle() async {
    final google = GoogleSignIn.instance;
    await google.initialize(serverClientId: googleServerClientId);
    final account = await google.authenticate();
    final token = account.authentication.idToken;
    if (token == null) return false;
    return _exchange('google', token);
  }

  /// Вход через Apple. На iPhone он обязателен по правилам App Store, если
  /// в приложении есть вход через стороннюю службу.
  Future<bool> signInWithApple() async {
    final cred = await SignInWithApple.getAppleIDCredential(
      scopes: const [], // Имя и почта нам не нужны — не спрашиваем.
    );
    final token = cred.identityToken;
    if (token == null) return false;
    return _exchange('apple', token);
  }

  Future<bool> _exchange(String provider, String token) async {
    _setBusy(true);
    try {
      final res = await _api.signIn(provider: provider, token: token);
      _session = res.session;
      await _secure.write(key: _sessionKey, value: res.session);
      await _apply(res.account);
      return true;
    } finally {
      _setBusy(false);
    }
  }

  /// Сверка с сервером. Пустой ответ означает, что копия свежая.
  Future<void> refresh() async {
    final s = _session;
    if (s == null) return;
    try {
      final fresh = await _api.state(s, knownVersion: _state?.version);
      if (fresh != null) await _apply(fresh);
    } on AccountException catch (e) {
      if (e.needsSignIn) await _forgetSession();
    } catch (_) {
      // Сети нет — показываем копию. Это её единственная задача.
    }
  }

  Future<void> setCar(String slotId, Car car) async =>
      _apply(await _api.setCar(_need(), slotId, car));

  Future<void> editCar(String slotId, Car car) async =>
      _apply(await _api.editCar(_need(), slotId, car));

  Future<void> removeCar(String slotId) async =>
      _apply(await _api.removeCar(_need(), slotId));

  Future<void> assign(String purchaseId, String slotId) async =>
      _apply(await _api.assign(_need(), purchaseId, slotId));

  Future<void> registerPurchase({
    required String productId,
    required String purchaseToken,
    String slotId = '',
  }) async =>
      _apply(await _api.purchase(
        _need(),
        platform: Platform.isIOS ? 'apple' : 'google',
        productId: productId,
        purchaseToken: purchaseToken,
        slotId: slotId,
      ));

  Future<void> signOut() async {
    final s = _session;
    if (s != null) {
      try {
        await _api.logout(s);
      } catch (_) {
        // Сессию всё равно забываем: на устройстве её быть не должно.
      }
    }
    await _forgetSession();
  }

  String _need() {
    final s = _session;
    if (s == null) throw AccountException(S.accSignInAgain, code: 'no_session');
    return s;
  }

  Future<void> _apply(AccountState fresh) async {
    _state = fresh;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_cacheKey, jsonEncode(fresh.toJson()));
    notifyListeners();
  }

  Future<void> _forgetSession() async {
    _session = null;
    _state = null;
    await _secure.delete(key: _sessionKey);
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_cacheKey);
    notifyListeners();
  }

  void _setBusy(bool v) {
    _busy = v;
    notifyListeners();
  }
}

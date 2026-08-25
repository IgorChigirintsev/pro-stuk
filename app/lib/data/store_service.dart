import 'dart:async';
import 'dart:io' show Platform;

import 'package:flutter/foundation.dart';
import 'package:in_app_purchase/in_app_purchase.dart';

import '../strings.dart';
import 'account_api.dart';
import 'account_service.dart';

/// Товары. Идентификаторы совпадают с заведёнными в Google Play и App Store
/// Connect и с таблицей начислений на сервере: сколько за что дают, решает
/// он, а не приложение.
class Products {
  static const checks = ['checks_5', 'checks_10', 'checks_20', 'checks_40'];
  static const garage = ['garage_1', 'garage_2', 'garage_4', 'garage_8'];
  static const all = {...checks, ...garage};

  /// В Google Play пакет на десять проверок заведён с опечаткой в
  /// идентификаторе. Переименовать товар нельзя, поэтому имя знают обе
  /// стороны — и приложение, и сервер.
  ///
  /// В App Store тот же товар заведён правильно, и подставлять опечатку туда
  /// нельзя: магазин не найдёт такого товара, и покупать на iPhone станет
  /// нечего. Поэтому подмена имени — свойство магазина, а не товара.
  static const aliases = {'checks_10': 'checks_10_2'};

  /// Имя, под которым товар заведён в магазине этой платформы.
  static String storeId(String id, {bool? android}) =>
      (android ?? Platform.isAndroid) ? (aliases[id] ?? id) : id;

  /// Что спрашивать у магазина.
  static Set<String> storeIds({bool? android}) =>
      {for (final id in all) storeId(id, android: android)};
}

/// Покупки: список товаров с ценами магазина и проведение оплаты.
///
/// Начисление здесь не происходит. Приложение только доносит чек до сервера,
/// а тот спрашивает магазин и начисляет по своей таблице. Иначе достаточно
/// было бы подделать ответ магазина в телефоне.
class StoreService extends ChangeNotifier {
  StoreService(this._accounts, {InAppPurchase? iap})
      : _iap = iap ?? InAppPurchase.instance;

  final AccountService _accounts;
  final InAppPurchase _iap;

  StreamSubscription<List<PurchaseDetails>>? _sub;

  bool available = false;
  List<ProductDetails> products = [];
  bool loading = false;

  /// Место, для которого сейчас покупают. Поток покупок приходит позже
  /// нажатия, и без этого проверки легли бы не на ту машину.
  String _slotId = '';

  /// Последняя ошибка проведения — экран покажет её человеку.
  String? error;

  Future<void> init() async {
    _sub = _iap.purchaseStream.listen(_onPurchases, onError: (_) {});
    available = await _iap.isAvailable();
    if (available) await load();
    notifyListeners();
  }

  Future<void> load() async {
    loading = true;
    notifyListeners();
    try {
      final resp = await _iap.queryProductDetails(Products.storeIds());
      products = resp.productDetails;
    } catch (_) {
      products = [];
    } finally {
      loading = false;
      notifyListeners();
    }
  }

  ProductDetails? product(String id) {
    final storeId = Products.storeId(id);
    for (final p in products) {
      if (p.id == storeId) return p;
    }
    return null;
  }

  /// Покупка. slotId нужен только пакетам проверок: место гаража приходит
  /// со своим комплектом и ни к какой машине не привязано.
  Future<void> buy(ProductDetails p, {String slotId = ''}) async {
    _slotId = slotId;
    error = null;
    final param = PurchaseParam(productDetails: p);
    // Расходуемая покупка: пакет можно купить снова, поэтому не buyNonConsumable.
    await _iap.buyConsumable(purchaseParam: param, autoConsume: false);
  }

  Future<void> restore() => _iap.restorePurchases();

  Future<void> _onPurchases(List<PurchaseDetails> list) async {
    for (final p in list) {
      switch (p.status) {
        case PurchaseStatus.pending:
          break;
        case PurchaseStatus.error:
        case PurchaseStatus.canceled:
          error = p.error?.message;
          if (p.pendingCompletePurchase) await _iap.completePurchase(p);
          notifyListeners();
        case PurchaseStatus.purchased:
        case PurchaseStatus.restored:
          await _grant(p);
      }
    }
  }

  Future<void> _grant(PurchaseDetails p) async {
    try {
      await _accounts.registerPurchase(
        productId: p.productID,
        purchaseToken: p.verificationData.serverVerificationData,
        slotId: _slotId,
      );
      // Завершать покупку можно только после начисления. Наоборот — значит
      // потерять её, если сервер в этот момент недоступен.
      if (p.pendingCompletePurchase) await _iap.completePurchase(p);
      error = null;
    } on AccountException catch (e) {
      // Покупку не завершаем: магазин принесёт её снова при следующем запуске,
      // и начисление доедет. Деньги при этом уже списаны, терять их нельзя.
      error = e.message;
    } catch (_) {
      error = S.anErrServer;
    }
    notifyListeners();
  }

  @override
  void dispose() {
    _sub?.cancel();
    super.dispose();
  }
}

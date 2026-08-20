import 'dart:io' show Platform;

import 'package:flutter/material.dart';

import '../data/account_service.dart';
import '../l10n/locale_scope.dart';
import '../state.dart';
import '../strings.dart';
import '../theme.dart';

/// Вход в аккаунт.
///
/// Способ входа один и зависит от платформы: на Android Google, на iPhone
/// Apple. Так требует App Store — приложение с входом через стороннюю службу
/// обязано предлагать вход через Apple, — и так проще человеку: одна кнопка
/// вместо выбора без разницы.
///
/// Следствие, о котором честно сказано в тексте: гараж привязан к аккаунту
/// платформы, и на другой платформе он будет свой.
class SignInScreen extends StatefulWidget {
  const SignInScreen({super.key});

  @override
  State<SignInScreen> createState() => _SignInScreenState();
}

class _SignInScreenState extends State<SignInScreen> {
  bool _busy = false;
  String? _error;

  /// Шторку выбора аккаунта поднимаем сама при первом появлении экрана —
  /// человеку остаётся одно касание вместо двух. Флаг статический: после
  /// осознанного выхода из аккаунта навязываться повторно нельзя.
  static bool _autoTried = false;

  @override
  void initState() {
    super.initState();
    // На iPhone так не делаем: системное окно Apple поднимает Face ID, и
    // делать это без нажатия — навязчиво. App Store такое тоже не любит.
    if (_autoTried || Platform.isIOS) return;
    _autoTried = true;
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) _signIn(AppScope.of(context).accounts, auto: true);
    });
  }

  Future<void> _signIn(AccountService accounts, {bool auto = false}) async {
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      final ok = Platform.isIOS
          ? await accounts.signInWithApple()
          : await accounts.signInWithGoogle();
      if (!ok) {
        if (mounted && !auto) setState(() => _error = S.authFailed);
        return;
      }
      // Гараж мог остаться от прежнего аккаунта или прийти с сервера.
      if (mounted) await AppScope.of(context).syncGarage();
    } catch (_) {
      // Закрытую шторку не считаем ошибкой, если её подняли сами: человек
      // ничего не нажимал, и красный текст ему непонятен. Он увидит обычный
      // экран с кнопкой и решит сам.
      if (mounted && !auto) setState(() => _error = S.authFailed);
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    // Экран лежит в стеке Navigator и сам по себе не
    // перестраивается при смене языка — см. LocaleScope.
    LocaleScope.watch(context);
    final accounts = AppScope.of(context).accounts;

    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text(S.appName,
                  textAlign: TextAlign.center,
                  style: Theme.of(context).textTheme.headlineSmall),
              const SizedBox(height: 8),
              Text(S.appTagline,
                  textAlign: TextAlign.center,
                  style: Theme.of(context)
                      .textTheme
                      .bodyMedium!
                      .copyWith(color: T.inkSoft)),
              const SizedBox(height: 40),
              Text(S.authTitle,
                  textAlign: TextAlign.center,
                  style: Theme.of(context).textTheme.titleLarge),
              const SizedBox(height: 12),
              Text(S.authSubtitle,
                  textAlign: TextAlign.center,
                  style: Theme.of(context)
                      .textTheme
                      .bodyMedium!
                      .copyWith(color: T.inkSoft)),
              const SizedBox(height: 32),
              if (_busy)
                const Center(child: CircularProgressIndicator())
              else
                FilledButton.icon(
                  onPressed: () => _signIn(accounts),
                  icon: const Icon(Icons.login),
                  label: Text(Platform.isIOS ? S.authApple : S.authGoogle),
                ),
              if (_error != null) ...[
                const SizedBox(height: 16),
                Text(_error!,
                    textAlign: TextAlign.center,
                    style: Theme.of(context)
                        .textTheme
                        .bodySmall!
                        .copyWith(color: T.stop)),
              ],
            ],
          ),
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';
import 'package:package_info_plus/package_info_plus.dart';
import 'package:url_launcher/url_launcher.dart';

import '../l10n/locale_scope.dart';
import '../site_links.dart';
import '../api.dart';
import '../l10n/device_locale.dart';
import '../l10n/locale_service.dart';
import '../state.dart';
import '../theme.dart';
import '../strings.dart';
import '../widgets.dart';

class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  String _version = '';
  String? _updateStatus;
  String? _apkUrl;
  bool _checking = false;

  @override
  void initState() {
    super.initState();
    PackageInfo.fromPlatform().then((info) {
      if (mounted) setState(() => _version = info.version);
    });
  }

  Future<void> _checkUpdate() async {
    setState(() {
      _checking = true;
      _updateStatus = null;
      _apkUrl = null;
    });
    try {
      // Не сравнивать с пустой версией, если PackageInfo ещё не разрешился.
      if (_version.isEmpty) {
        _version = (await PackageInfo.fromPlatform()).version;
      }
      final v = await ApiClient().getVersion();
      if (!mounted) return;
      setState(() {
        if (isNewerVersion(v.latestVersion, _version)) {
          _updateStatus = '${S.setUpdateAvailable}: ${v.latestVersion}';
          _apkUrl = v.apkUrl;
        } else {
          _updateStatus = S.setUpToDate;
        }
      });
    } catch (_) {
      if (mounted) setState(() => _updateStatus = S.setCheckFailed);
    } finally {
      if (mounted) setState(() => _checking = false);
    }
  }

  Future<void> _open(String url) async {
    await launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
  }

  @override
  Widget build(BuildContext context) {
    // Экран лежит в стеке Navigator и сам по себе не
    // перестраивается при смене языка — см. LocaleScope.
    LocaleScope.watch(context);
    return Scaffold(
      appBar: AppBar(title: Text(S.setTitle)),
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.all(20),
          children: [
            SectionTitle(S.langTitle),
            SurfaceCard(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  DropdownButton<String>(
                    value: LocaleService.current.value,
                    isExpanded: true,
                    underline: const SizedBox.shrink(),
                    items: [
                      for (final code in DeviceLocale.supported)
                        DropdownMenuItem(
                            value: code,
                            child: Text(LocaleService.names[code] ?? code)),
                    ],
                    onChanged: (v) => LocaleService.set(v),
                  ),
                  Text(S.langHint,
                      style: Theme.of(context).textTheme.bodySmall),
                ],
              ),
            ),
            SectionTitle(S.authTitle),
            SurfaceCard(
              child: Row(
                children: [
                  Expanded(
                    child: Text(S.authSubtitle,
                        style: Theme.of(context).textTheme.bodySmall),
                  ),
                  const SizedBox(width: 12),
                  TextButton(
                    onPressed: () => AppScope.of(context).accounts.signOut(),
                    child: Text(S.authSignOut),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 8),
            Align(
              alignment: AlignmentDirectional.centerStart,
              child: TextButton.icon(
                onPressed: () => _confirmDelete(context),
                icon: const Icon(Icons.delete_forever, color: T.stop),
                label: Text(S.accDelete, style: const TextStyle(color: T.stop)),
              ),
            ),
            const SizedBox(height: 20),
            SectionTitle(S.setVersion),
            SurfaceCard(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(_version.isEmpty ? '…' : _version,
                      style: Theme.of(context).textTheme.bodyLarge),
                  const SizedBox(height: 12),
                  OutlinedButton(
                    onPressed: _checking ? null : _checkUpdate,
                    child: Text(_checking ? '…' : S.setCheckUpdate),
                  ),
                  if (_updateStatus != null) ...[
                    const SizedBox(height: 12),
                    Text(_updateStatus!,
                        style: Theme.of(context).textTheme.bodySmall),
                  ],
                  if (_apkUrl != null) ...[
                    const SizedBox(height: 12),
                    ElevatedButton(
                      onPressed: () => _open(_apkUrl!),
                      child: Text(S.setDownload),
                    ),
                  ],
                ],
              ),
            ),
            const SizedBox(height: 24),
            OutlinedButton(
              onPressed: () => _open(SiteLinks.home),
              child: Text(S.setSite),
            ),
            const SizedBox(height: 12),
            OutlinedButton(
              onPressed: () => _open(SiteLinks.privacy),
              child: Text(S.setPolicy),
            ),
            const SizedBox(height: 24),
            Text(S.disclaimerShort,
                style: Theme.of(context).textTheme.bodySmall),
          ],
        ),
      ),
    );
  }
}

/// Удаление учётной записи. Спрашиваем подтверждение и прямо называем, что
/// пропадёт: неиспользованные проверки оплачены, и человек должен понимать,
/// что возврата не будет.
Future<void> _confirmDelete(BuildContext context) async {
  final app = AppScope.of(context);
  final messenger = ScaffoldMessenger.of(context);
  final ok = await showDialog<bool>(
    context: context,
    builder: (ctx) => AlertDialog(
      title: Text(S.accDelete),
      content: Text(S.accDeleteWarn),
      actions: [
        TextButton(
          onPressed: () => Navigator.pop(ctx, false),
          child: Text(S.bookCancel),
        ),
        TextButton(
          onPressed: () => Navigator.pop(ctx, true),
          child: Text(S.accDeleteYes, style: const TextStyle(color: T.stop)),
        ),
      ],
    ),
  );
  if (ok != true) return;
  try {
    await app.accounts.deleteAccount();
  } on ApiException catch (e) {
    messenger.showSnackBar(SnackBar(content: Text(e.message)));
  } catch (_) {
    messenger.showSnackBar(SnackBar(content: Text(S.anErrServer)));
  }
}

import 'package:flutter/material.dart';
import 'package:package_info_plus/package_info_plus.dart';
import 'package:url_launcher/url_launcher.dart';

import '../api.dart';
import '../state.dart';
import '../strings.dart';
import '../theme.dart';
import '../widgets.dart';
import 'onboarding.dart';

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
    final state = AppScope.of(context);
    return Scaffold(
      appBar: AppBar(title: const Text(S.setTitle)),
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.all(20),
          children: [
            const SectionTitle(S.setCar),
            Material(
              color: T.surface,
              borderRadius: BorderRadius.circular(T.rCard),
              child: InkWell(
                borderRadius: BorderRadius.circular(T.rCard),
                onTap: () => Navigator.of(context).push(MaterialPageRoute(
                    builder: (_) => const OnboardingCarScreen())),
                child: Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(T.rCard),
                    border: Border.all(color: T.border),
                  ),
                  child: Row(
                    children: [
                      Expanded(
                        child: Text(
                          state.car != null
                              ? '${state.car!.label} · ${state.car!.mileageKm} км'
                              : '—',
                          style: Theme.of(context).textTheme.bodyLarge,
                        ),
                      ),
                      const Icon(Icons.edit_outlined,
                          size: 20, color: T.inkSoft),
                    ],
                  ),
                ),
              ),
            ),
            const SectionTitle(S.setVersion),
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
                      child: const Text(S.setDownload),
                    ),
                  ],
                ],
              ),
            ),
            const SizedBox(height: 24),
            OutlinedButton(
              onPressed: () => _open(siteUrl),
              child: const Text(S.setSite),
            ),
            const SizedBox(height: 12),
            OutlinedButton(
              onPressed: () => _open('$siteUrl/politika/'),
              child: const Text(S.setPolicy),
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

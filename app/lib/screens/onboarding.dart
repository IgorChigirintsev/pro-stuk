import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../models.dart';
import '../state.dart';
import '../strings.dart';
import '../theme.dart';
import 'home.dart';

/// Первый запуск: данные машины. Тот же экран открывается из настроек.
class OnboardingCarScreen extends StatefulWidget {
  final bool firstRun;
  const OnboardingCarScreen({super.key, this.firstRun = false});

  @override
  State<OnboardingCarScreen> createState() => _OnboardingCarScreenState();
}

class _OnboardingCarScreenState extends State<OnboardingCarScreen> {
  final _makeCtrl = TextEditingController();
  final _modelCtrl = TextEditingController();
  final _mileageCtrl = TextEditingController();
  int _year = 2015;
  String? _error;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      final car = AppScope.of(context).car;
      if (car != null) {
        _makeCtrl.text = car.make;
        _modelCtrl.text = car.model;
        _mileageCtrl.text = car.mileageKm.toString();
        setState(() => _year = car.year);
      }
    });
  }

  @override
  void dispose() {
    _makeCtrl.dispose();
    _modelCtrl.dispose();
    _mileageCtrl.dispose();
    super.dispose();
  }

  Future<void> _save() async {
    final make = _makeCtrl.text.trim();
    final model = _modelCtrl.text.trim();
    final mileage = int.tryParse(_mileageCtrl.text.trim());
    if (make.isEmpty || model.isEmpty || mileage == null) {
      setState(() => _error = S.carFillAll);
      return;
    }
    await AppScope.of(context)
        .saveCar(Car(make: make, model: model, year: _year, mileageKm: mileage));
    if (!mounted) return;
    if (widget.firstRun) {
      Navigator.of(context).pushReplacement(
          MaterialPageRoute(builder: (_) => const HomeScreen()));
    } else {
      Navigator.of(context).pop();
    }
  }

  @override
  Widget build(BuildContext context) {
    final years = [for (var y = 2026; y >= 1990; y--) y];
    return Scaffold(
      appBar: widget.firstRun ? null : AppBar(title: const Text(S.setCar)),
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.all(20),
          children: [
            if (widget.firstRun) ...[
              const SizedBox(height: 24),
              Text(S.carTitle,
                  style: Theme.of(context).textTheme.headlineMedium),
              const SizedBox(height: 8),
              Text(S.carSubtitle,
                  style: Theme.of(context).textTheme.bodySmall),
              const SizedBox(height: 28),
            ],
            Text(S.carMake, style: Theme.of(context).textTheme.titleMedium),
            const SizedBox(height: 8),
            Autocomplete<String>(
              optionsBuilder: (v) {
                final q = v.text.trim().toLowerCase();
                if (q.isEmpty) return const Iterable<String>.empty();
                return S.makes
                    .where((m) => m.toLowerCase().startsWith(q));
              },
              onSelected: (v) => _makeCtrl.text = v,
              fieldViewBuilder: (context, ctrl, focus, onSubmit) {
                // Синхронизация с внешним контроллером (редактирование).
                if (ctrl.text.isEmpty && _makeCtrl.text.isNotEmpty) {
                  ctrl.text = _makeCtrl.text;
                }
                ctrl.addListener(() => _makeCtrl.text = ctrl.text);
                return TextField(
                  controller: ctrl,
                  focusNode: focus,
                  decoration: const InputDecoration(hintText: S.carMakeHint),
                  textCapitalization: TextCapitalization.words,
                );
              },
            ),
            const SizedBox(height: 16),
            Text(S.carModel, style: Theme.of(context).textTheme.titleMedium),
            const SizedBox(height: 8),
            TextField(
              controller: _modelCtrl,
              decoration: const InputDecoration(hintText: S.carModelHint),
              textCapitalization: TextCapitalization.words,
            ),
            const SizedBox(height: 16),
            Text(S.carYear, style: Theme.of(context).textTheme.titleMedium),
            const SizedBox(height: 8),
            Container(
              decoration: BoxDecoration(
                color: T.surface,
                borderRadius: BorderRadius.circular(T.rField),
                border: Border.all(color: T.border),
              ),
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: DropdownButtonHideUnderline(
                child: DropdownButton<int>(
                  value: _year,
                  isExpanded: true,
                  items: [
                    for (final y in years)
                      DropdownMenuItem(value: y, child: Text('$y')),
                  ],
                  onChanged: (y) => setState(() => _year = y ?? _year),
                ),
              ),
            ),
            const SizedBox(height: 16),
            Text(S.carMileage, style: Theme.of(context).textTheme.titleMedium),
            const SizedBox(height: 8),
            TextField(
              controller: _mileageCtrl,
              decoration: const InputDecoration(hintText: S.carMileageHint),
              keyboardType: TextInputType.number,
              inputFormatters: [FilteringTextInputFormatter.digitsOnly],
            ),
            if (_error != null) ...[
              const SizedBox(height: 12),
              Text(_error!, style: Theme.of(context).textTheme.bodySmall),
            ],
            const SizedBox(height: 28),
            ElevatedButton(onPressed: _save, child: const Text(S.carSave)),
            const SizedBox(height: 20),
          ],
        ),
      ),
    );
  }
}

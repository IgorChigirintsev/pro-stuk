import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../models.dart';
import '../data/cars.dart';
import '../state.dart';
import '../strings.dart';
import '../theme.dart';
import 'home.dart';

/// Первый запуск: данные машины. Тот же экран открывается из настроек.
class OnboardingCarScreen extends StatefulWidget {
  /// Добавляем новую машину: поля не заполняем данными активной.
  final bool addNew;
  final bool firstRun;
  const OnboardingCarScreen({super.key, this.firstRun = false, this.addNew = false});

  @override
  State<OnboardingCarScreen> createState() => _OnboardingCarScreenState();
}

class _OnboardingCarScreenState extends State<OnboardingCarScreen> {
  final _modelCtrl = TextEditingController();
  final _mileageCtrl = TextEditingController();
  TextEditingController? _makeFieldCtrl; // внутренний контроллер Autocomplete
  TextEditingController? _modelFieldCtrl;
  String _generation = '';
  String _initialMake = '';
  int _year = 2015;
  String? _error;
  bool _prefilled = false;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    // Предзаполнение при редактировании: до первого build, один раз.
    if (_prefilled) return;
    _prefilled = true;
    // Добавляем машину — форма должна быть чистой, а не с чужими данными.
    final car = widget.addNew ? null : AppScope.of(context).car;
    if (car != null) {
      _initialMake = car.make;
      _modelCtrl.text = car.model;
      _mileageCtrl.text = car.mileageKm.toString();
      _year = car.year;
      _generation = car.generation;
    }
  }

  @override
  void initState() {
    super.initState();
    // Справочник грузим один раз: до этого подсказки просто пустые.
    CarsCatalog.ensureLoaded().then((_) {
      if (mounted) setState(() {});
    });
  }

  @override
  void dispose() {
    _modelCtrl.dispose();
    _mileageCtrl.dispose();
    super.dispose();
  }

  Future<void> _save() async {
    final make = (_makeFieldCtrl?.text ?? _initialMake).trim();
    final model = (_modelFieldCtrl?.text ?? _modelCtrl.text).trim();
    final mileage = int.tryParse(_mileageCtrl.text.trim());
    if (make.isEmpty || model.isEmpty || mileage == null) {
      setState(() => _error = S.carFillAll);
      return;
    }
    await AppScope.of(context)
        .saveCar(Car(
          // Редактируем существующую — сохраняем её идентификатор,
          // иначе в гараже появился бы дубль вместо изменения.
          id: widget.addNew ? '' : (AppScope.of(context).car?.id ?? ''),
          make: make,
          model: model,
          year: _year,
          mileageKm: mileage,
          generation: _generation,
        ));
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
              initialValue: TextEditingValue(text: _initialMake),
              optionsBuilder: (v) {
                final q = v.text.trim();
                if (q.isEmpty) return const Iterable<String>.empty();
                return CarsCatalog.searchMakes(q);
              },
              fieldViewBuilder: (context, ctrl, focus, onSubmit) {
                _makeFieldCtrl = ctrl; // значение читается при сохранении
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
            Autocomplete<String>(
              initialValue: TextEditingValue(text: _modelCtrl.text),
              optionsBuilder: (v) {
                final make = (_makeFieldCtrl?.text ?? _initialMake).trim();
                if (make.isEmpty) return const Iterable<String>.empty();
                return CarsCatalog.modelsFor(make, v.text);
              },
              onSelected: (v) => setState(() {
                _modelCtrl.text = v;
                _generation = '';
              }),
              fieldViewBuilder: (context, ctrl, focus, onSubmit) {
                _modelFieldCtrl = ctrl;
                return TextField(
                  controller: ctrl,
                  focusNode: focus,
                  onChanged: (v) => _modelCtrl.text = v,
                  decoration: const InputDecoration(hintText: S.carModelHint),
                  textCapitalization: TextCapitalization.words,
                );
              },
            ),
            Builder(builder: (context) {
              final make = (_makeFieldCtrl?.text ?? _initialMake).trim();
              final model = (_modelFieldCtrl?.text ?? _modelCtrl.text).trim();
              final gens = CarsCatalog.generationsFor(make, model);
              if (gens.isEmpty) return const SizedBox.shrink();
              return Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const SizedBox(height: 16),
                  Text('Поколение',
                      style: Theme.of(context).textTheme.titleMedium),
                  const SizedBox(height: 8),
                  DropdownButtonFormField<String>(
                    initialValue: gens.any((g) => g.label == _generation)
                        ? _generation
                        : null,
                    isExpanded: true,
                    hint: const Text('Выберите поколение'),
                    items: [
                      for (final g in gens)
                        DropdownMenuItem(value: g.label, child: Text(g.label)),
                    ],
                    onChanged: (v) => setState(() => _generation = v ?? ''),
                  ),
                ],
              );
            }),
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
              onChanged: (_) => setState(() {}),
            ),
            Builder(builder: (context) {
              // Пробег ведётся в профиле; здесь даём подставить его одним касанием,
              // чтобы не набирать шестизначное число заново.
              final saved = AppScope.of(context).car?.mileageKm ?? 0;
              if (saved <= 0 || _mileageCtrl.text.trim() == saved.toString()) {
                return const SizedBox.shrink();
              }
              return Padding(
                padding: const EdgeInsets.only(top: 8),
                child: GestureDetector(
                  onTap: () => setState(
                      () => _mileageCtrl.text = saved.toString()),
                  child: Text(
                    'Текущий пробег из профиля: $saved км — подставить',
                    style: const TextStyle(fontSize: 13, color: T.accent),
                  ),
                ),
              );
            }),
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

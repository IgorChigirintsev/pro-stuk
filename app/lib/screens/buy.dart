import 'package:flutter/material.dart';
import 'package:in_app_purchase/in_app_purchase.dart';

import '../data/account.dart' show Slot;
import '../data/store_service.dart';
import '../l10n/locale_scope.dart';
import '../models.dart';
import '../state.dart';
import '../strings.dart';
import '../theme.dart';
import '../widgets.dart';

/// Покупка проверок и мест.
///
/// Экран всегда открывается изнутри конкретной машины, и она названа крупно
/// в самом верху. Проверки адресные: купленные для одной машины на другую не
/// перейдут, и человек должен видеть это до оплаты, а не узнавать после.
class BuyScreen extends StatefulWidget {
  const BuyScreen({super.key, required this.car});

  final Car car;

  @override
  State<BuyScreen> createState() => _BuyScreenState();
}

class _BuyScreenState extends State<BuyScreen> {
  int? _checksBefore;

  /// Проверки начисляет сервер, и приходят они не мгновенно после нажатия.
  /// Поэтому «готово» показываем по факту роста баланса, а не по нажатию.
  void _watchBalance(Slot? slot) {
    if (slot == null) return;
    final before = _checksBefore;
    _checksBefore = slot.checks;
    if (before != null && slot.checks > before) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (!mounted) return;
        ScaffoldMessenger.of(context)
            .showSnackBar(SnackBar(content: Text(S.buyDone)));
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    // Экран лежит в стеке Navigator и сам по себе не
    // перестраивается при смене языка — см. LocaleScope.
    LocaleScope.watch(context);
    final app = AppScope.of(context);
    final store = app.store;

    return ListenableBuilder(
      listenable: Listenable.merge([store, app.accounts]),
      builder: (context, _) {
        final slot = app.accounts.state?.slot(widget.car.slotId);
        _watchBalance(slot);
        return Scaffold(
          appBar: AppBar(title: Text(S.buyTitle)),
          body: ListView(
            padding: const EdgeInsets.all(16),
            children: [
              _ForCar(car: widget.car, slot: slot),
              const SizedBox(height: 20),
              if (store.loading)
                const Center(child: Padding(
                  padding: EdgeInsets.symmetric(vertical: 32),
                  child: CircularProgressIndicator(),
                ))
              else if (!store.available || store.products.isEmpty)
                SurfaceCard(
                  child: Text(S.buyNoProducts,
                      style: Theme.of(context).textTheme.bodyMedium),
                )
              else ...[
                SectionTitle(S.buyTitle),
                for (final id in Products.checks)
                  _ProductTile(
                    product: store.product(id),
                    onBuy: (p) => store.buy(p, slotId: widget.car.slotId),
                  ),
                const SizedBox(height: 20),
                SectionTitle(S.buySlots),
                for (final id in Products.garage)
                  _ProductTile(
                    product: store.product(id),
                    onBuy: (p) => store.buy(p),
                  ),
              ],
              if (store.error != null) ...[
                const SizedBox(height: 16),
                Text(store.error!,
                    style: Theme.of(context)
                        .textTheme
                        .bodySmall!
                        .copyWith(color: T.stop)),
              ],
              const SizedBox(height: 24),
              TextButton(
                onPressed: store.restore,
                child: Text(S.buyRestore),
              ),
            ],
          ),
        );
      },
    );
  }
}

/// Для какой машины покупаются проверки. Самый важный блок экрана.
class _ForCar extends StatelessWidget {
  const _ForCar({required this.car, this.slot});

  final Car car;
  final Slot? slot;

  @override
  Widget build(BuildContext context) {
    return SurfaceCard(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(S.buyForCar,
              style: Theme.of(context)
                  .textTheme
                  .bodySmall!
                  .copyWith(color: T.inkSoft)),
          const SizedBox(height: 6),
          Text(car.label,
              style: Theme.of(context)
                  .textTheme
                  .titleLarge!
                  .copyWith(fontWeight: FontWeight.w700)),
          if (slot != null) ...[
            const SizedBox(height: 8),
            Text(S.buyChecksLeft.replaceFirst('{n}', '${slot!.checks}'),
                style: Theme.of(context).textTheme.bodyMedium),
          ],
        ],
      ),
    );
  }
}

class _ProductTile extends StatelessWidget {
  const _ProductTile({required this.product, required this.onBuy});

  final ProductDetails? product;
  final void Function(ProductDetails) onBuy;

  @override
  Widget build(BuildContext context) {
    final p = product;
    // Товара нет в магазине — не показываем пустую строку: скорее всего он
    // ещё не доехал до этой страны.
    if (p == null) return const SizedBox.shrink();
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: SurfaceCard(
        child: Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(p.title, style: Theme.of(context).textTheme.bodyLarge),
                  if (p.description.isNotEmpty)
                    Text(p.description,
                        style: Theme.of(context)
                            .textTheme
                            .bodySmall!
                            .copyWith(color: T.inkSoft)),
                ],
              ),
            ),
            const SizedBox(width: 12),
            FilledButton(
              onPressed: () => onBuy(p),
              child: Text(p.price),
            ),
          ],
        ),
      ),
    );
  }
}

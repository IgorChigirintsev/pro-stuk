import 'dart:io';

import 'package:flutter_test/flutter_test.dart';
import 'package:stuk/api.dart';
import 'package:stuk/tree.dart';
import 'package:stuk/wav.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  test('дерево загружается из ассета и корректно устроено', () async {
    final tree = await DecisionTree.load();
    expect(tree.nodes.length, greaterThan(100));
    final root = tree.node(tree.rootId);
    expect(root.isLeaf, isFalse);
    expect(root.options.length, inInclusiveRange(2, 4));
    // Все next-ссылки существуют, листья заполнены.
    var leaves = 0;
    for (final n in tree.nodes.values) {
      if (n.isLeaf) {
        leaves++;
        expect(n.topCause, isNotEmpty);
        expect(['ok', 'warn', 'stop'], contains(n.urgency));
        expect(n.explanation, isNotEmpty);
        expect(n.advice, isNotEmpty);
      } else {
        for (final o in n.options) {
          expect(tree.nodes.containsKey(o.next), isTrue,
              reason: 'битая ссылка ${n.id} -> ${o.next}');
        }
      }
    }
    expect(leaves, greaterThanOrEqualTo(16));
    // Прогресс-бар: глубина от корня в допустимых пределах.
    expect(tree.maxDepthFrom(tree.rootId), inInclusiveRange(2, 8));
  });

  test('pcmToWav пишет корректный заголовок', () async {
    final dir = await Directory.systemTemp.createTemp('stuk_test');
    final pcm = File('${dir.path}/a.pcm');
    await pcm.writeAsBytes(List<int>.filled(32000, 0)); // 1 сек PCM16 16кГц
    final wav = await pcmToWav(pcm, '${dir.path}/a.wav');
    final bytes = await wav.readAsBytes();
    expect(bytes.length, 44 + 32000);
    expect(String.fromCharCodes(bytes.sublist(0, 4)), 'RIFF');
    expect(String.fromCharCodes(bytes.sublist(8, 12)), 'WAVE');
    expect(bytes[22], 1); // mono
    expect(bytes[24] | (bytes[25] << 8) | (bytes[26] << 16), 16000);
    expect(bytes[34], 16); // бит на сэмпл
    await dir.delete(recursive: true);
  });

  test('сравнение версий', () {
    expect(isNewerVersion('1.0.1', '1.0.0'), isTrue);
    expect(isNewerVersion('2.0.0', '1.9.9'), isTrue);
    expect(isNewerVersion('1.0.0', '1.0.0'), isFalse);
    expect(isNewerVersion('1.0.0', '1.2.0'), isFalse);
  });
}

import 'dart:io';
import 'dart:typed_data';

/// Оборачивает сырой PCM16 (16000 Гц, mono) в WAV-контейнер.
/// Пакет record с encoder pcm16bits пишет поток без заголовка —
/// сервер же принимает строго WAV.
Future<File> pcmToWav(File pcmFile, String wavPath,
    {int sampleRate = 16000}) async {
  final pcm = await pcmFile.readAsBytes();
  final header = ByteData(44);

  void writeAscii(int offset, String s) {
    for (var i = 0; i < s.length; i++) {
      header.setUint8(offset + i, s.codeUnitAt(i));
    }
  }

  const channels = 1;
  const bitsPerSample = 16;
  final byteRate = sampleRate * channels * bitsPerSample ~/ 8;

  writeAscii(0, 'RIFF');
  header.setUint32(4, 36 + pcm.length, Endian.little);
  writeAscii(8, 'WAVE');
  writeAscii(12, 'fmt ');
  header.setUint32(16, 16, Endian.little);
  header.setUint16(20, 1, Endian.little); // PCM
  header.setUint16(22, channels, Endian.little);
  header.setUint32(24, sampleRate, Endian.little);
  header.setUint32(28, byteRate, Endian.little);
  header.setUint16(32, channels * bitsPerSample ~/ 8, Endian.little);
  header.setUint16(34, bitsPerSample, Endian.little);
  writeAscii(36, 'data');
  header.setUint32(40, pcm.length, Endian.little);

  final out = File(wavPath);
  final sink = out.openWrite();
  sink.add(header.buffer.asUint8List());
  sink.add(pcm);
  await sink.close();
  return out;
}

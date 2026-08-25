import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

/// Дизайн-токены §4 спеки. Ни один цвет/радиус/размер не задаётся вне токенов.
abstract final class T {
  // Цвета
  static const bg = Color(0xFFFFFFFF);
  static const surface = Color(0xFFF5F7F9);
  static const ink = Color(0xFF16232E);
  static const inkSoft = Color(0xFF5C6B78);
  static const accent = Color(0xFF0E7C7B);
  static const accentSoft = Color(0xFFE2F1F0);
  static const ok = Color(0xFF1B9E4B);
  static const warn = Color(0xFFD97E00);
  static const stop = Color(0xFFD64545);
  static const border = Color(0xFFE7ECF0);

  // Форма
  static const rCard = 16.0;
  static const rButton = 14.0;
  static const rField = 12.0;
  static const tap = 56.0; // минимальная высота тап-целей

  // Типографика (Flutter-шкала: 14/16/18/22/28)
  static const fs14 = 14.0;
  static const fs16 = 16.0;
  static const fs18 = 18.0;
  static const fs22 = 22.0;
  static const fs28 = 28.0;

  static Color urgencyColor(String u) => switch (u) {
        'ok' => ok,
        'warn' => warn,
        'stop' => stop,
        _ => inkSoft,
      };

  /// Числа и проценты — tabular-nums 600.
  static TextStyle num_(double size, {Color color = ink}) =>
      GoogleFonts.manrope(
        fontSize: size,
        fontWeight: FontWeight.w600,
        color: color,
        fontFeatures: const [FontFeature.tabularFigures()],
      );
}

ThemeData buildTheme() {
  final text = GoogleFonts.manropeTextTheme().apply(
    bodyColor: T.ink,
    displayColor: T.ink,
  );
  return ThemeData(
    useMaterial3: true,
    scaffoldBackgroundColor: T.bg,
    colorScheme: ColorScheme.fromSeed(
      seedColor: T.accent,
      primary: T.accent,
      surface: T.bg,
    ),
    textTheme: text.copyWith(
      // display 700 — заголовки и вердикт
      headlineMedium: GoogleFonts.manrope(
          fontSize: T.fs28, fontWeight: FontWeight.w700, color: T.ink),
      titleLarge: GoogleFonts.manrope(
          fontSize: T.fs22, fontWeight: FontWeight.w700, color: T.ink),
      titleMedium: GoogleFonts.manrope(
          fontSize: T.fs18, fontWeight: FontWeight.w600, color: T.ink),
      bodyLarge: GoogleFonts.manrope(
          fontSize: T.fs16, fontWeight: FontWeight.w400, color: T.ink, height: 1.45),
      bodyMedium: GoogleFonts.manrope(
          fontSize: T.fs16, fontWeight: FontWeight.w400, color: T.ink, height: 1.45),
      bodySmall: GoogleFonts.manrope(
          fontSize: T.fs14, fontWeight: FontWeight.w400, color: T.inkSoft, height: 1.4),
      labelLarge: GoogleFonts.manrope(
          fontSize: T.fs16, fontWeight: FontWeight.w600),
    ),
    appBarTheme: AppBarTheme(
      backgroundColor: T.bg,
      foregroundColor: T.ink,
      elevation: 0,
      scrolledUnderElevation: 0,
      centerTitle: false,
      titleTextStyle: GoogleFonts.manrope(
          fontSize: T.fs18, fontWeight: FontWeight.w700, color: T.ink),
    ),
    // У FilledButton своей темы не было, и он оставался «таблеткой» рядом с
    // прямоугольными соседями. Форма и размер — как у остальных кнопок.
    filledButtonTheme: FilledButtonThemeData(
      style: FilledButton.styleFrom(
        backgroundColor: T.accent,
        foregroundColor: Colors.white,
        minimumSize: const Size(0, T.tap),
        shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(T.rButton)),
        textStyle:
            GoogleFonts.manrope(fontSize: T.fs16, fontWeight: FontWeight.w600),
      ),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: T.accent,
        foregroundColor: Colors.white,
        minimumSize: const Size.fromHeight(T.tap),
        elevation: 0,
        shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(T.rButton)),
        textStyle:
            GoogleFonts.manrope(fontSize: T.fs16, fontWeight: FontWeight.w600),
      ),
    ),
    outlinedButtonTheme: OutlinedButtonThemeData(
      style: OutlinedButton.styleFrom(
        foregroundColor: T.accent,
        minimumSize: const Size.fromHeight(T.tap),
        side: const BorderSide(color: T.border),
        shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(T.rButton)),
        textStyle:
            GoogleFonts.manrope(fontSize: T.fs16, fontWeight: FontWeight.w600),
      ),
    ),
    textButtonTheme: TextButtonThemeData(
      style: TextButton.styleFrom(
        foregroundColor: T.accent,
        minimumSize: const Size(64, T.tap), // тап-цели минимум 56dp (§4)
        textStyle:
            GoogleFonts.manrope(fontSize: T.fs16, fontWeight: FontWeight.w600),
      ),
    ),
    iconButtonTheme: IconButtonThemeData(
      style: IconButton.styleFrom(
        minimumSize: const Size(T.tap, T.tap),
      ),
    ),
    inputDecorationTheme: InputDecorationTheme(
      filled: true,
      fillColor: T.surface,
      contentPadding:
          const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(T.rField),
        borderSide: const BorderSide(color: T.border),
      ),
      enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(T.rField),
        borderSide: const BorderSide(color: T.border),
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(T.rField),
        borderSide: const BorderSide(color: T.accent, width: 1.5),
      ),
      hintStyle: GoogleFonts.manrope(fontSize: T.fs16, color: T.inkSoft),
    ),
    dividerTheme: const DividerThemeData(color: T.border, thickness: 1),
    progressIndicatorTheme:
        const ProgressIndicatorThemeData(color: T.accent, linearTrackColor: T.accentSoft),
  );
}

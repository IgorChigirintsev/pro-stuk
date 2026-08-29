import AVFoundation
import Flutter
import UIKit

@main
@objc class AppDelegate: FlutterAppDelegate, FlutterImplicitEngineDelegate {
  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
  ) -> Bool {
    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

  func didInitializeImplicitFlutterEngine(_ engineBridge: FlutterImplicitEngineBridge) {
    GeneratedPluginRegistrant.register(with: engineBridge.pluginRegistry)
    registerRawInputChannel(engineBridge.pluginRegistry)
  }

  /// Канал для системных вещей: сырой вход микрофона и настройки приложения.
  ///
  /// Сырой вход микрофона: iOS перестаёт обрабатывать сигнал.
  ///
  /// Зачем это нужно. Плагин записи ставит категорию playAndRecord, но режим
  /// сессии не задаёт — она остаётся default. В нём система сама «улучшает»
  /// звук: поднимает тихое автоусилением и давит то, что считает шумом.
  /// Ровный высокий свист ремня под этим определением и оказывается — на
  /// iPhone он пропадал целиком, тогда как на Android слышен.
  ///
  /// Режим measurement обработку выключает: Apple обещает минимум действий над
  /// входным сигналом. Именно это нам и надо — мы разбираем звук машины, а не
  /// разговор.
  ///
  /// Настройки для режима плагин не даёт, поэтому ставим сами, каналом.
  private func registerRawInputChannel(_ registrar: FlutterPluginRegistry) {
    guard let messenger = registrar.registrar(forPlugin: "ProStukSystem")?.messenger()
    else { return }

    let channel = FlutterMethodChannel(name: "chigirintsevandco.prostuk/system", binaryMessenger: messenger)
    channel.setMethodCallHandler { call, result in
      switch call.method {
      case "rawInput":
        do {
          try AVAudioSession.sharedInstance().setMode(.measurement)
          result(true)
        } catch {
          // Не смертельно: запись пойдёт с обработкой, как раньше.
          result(false)
        }

      case "openAppSettings":
        // Экран «доступ к микрофону запрещён» ведёт сюда. На Android это
        // работало с самого начала, на iPhone кнопка не делала ничего:
        // обработчика канала на этой стороне просто не было.
        guard let url = URL(string: UIApplication.openSettingsURLString) else {
          result(false)
          return
        }
        UIApplication.shared.open(url) { ok in result(ok) }

      default:
        result(FlutterMethodNotImplemented)
      }
    }
  }
}

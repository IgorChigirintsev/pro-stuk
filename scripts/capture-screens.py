#!/usr/bin/env python3
"""Снимки экранов приложения на нужном языке — для карточек магазинов.

Запуск:  python3 scripts/capture-screens.py ru de es
         python3 scripts/capture-screens.py all

Кладёт восемь снимков в store/cards/screens/<язык>/, откуда их берёт
генератор карточек (node store/gen-store-shots.mjs <язык>).

Требует сборку со съёмочным ключом:

    flutter build apk --release ... \\
      --dart-define=SCREENSHOT_AUDIO=https://pro-stuk.com/app/test-knock.wav

Без него экран записи включает микрофон, и разбора не получится: отчёт
приходит с сервера на языке запроса, поэтому на каждый язык нужен свой
разбор, а значит своя запись. Каждый разбор списывает проверку.

Ничего не ищется по заученным координатам, кроме значков в шапке: они стоят
на месте на всех языках. Всё остальное находится по цвету и по краям
карточек — подписи переносятся по-разному, и кнопки съезжают на десятки
пикселей: на немецком в одно место, на японском в другое.
"""
import subprocess, sys, io, os, time
from pathlib import Path
from PIL import Image
import numpy as np

PKG = 'chigirintsevandco.prostuk'
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'store' / 'cards' / 'screens'

# Порядок в выпадающем списке языков — как в приложении.
LANG_ROWS = ['en', 'ru', 'zh', 'ja', 'es', 'de', 'fr', 'pt',
             'ko', 'it', 'tr', 'ar', 'pl', 'nl']
GEAR, WRENCH, CAR, BACK = (1004, 225), (711, 225), (565, 225), (73, 225)
DROPDOWN = (539, 630)

# Шаг строки в выпадающем списке языков и цвет подсветки выбранного пункта.
ROW_STEP = 125.8
HIGHLIGHT = (224, 224, 224)

# Какой язык стоит в приложении сейчас. Список Material выравнивается по
# выбранному пункту, поэтому строки не стоят на месте: пока не знаешь, что
# выбрано, не знаешь и куда жать. Помним между запусками.
LAST = OUT / '.last-lang'

ACCENT = (14, 124, 123)     # заливка главных кнопок
CARD = (245, 247, 249)      # фон карточек в отчёте
W, H = 1080, 2424
APPBAR = 300                # низ шапки: выше неё карточки не поднимаем


def adb(*args, binary=False):
    cmd = ['adb', '-t', os.environ.get('ADB_TRANSPORT', '1'), *args]
    r = subprocess.run(cmd, capture_output=True)
    if r.returncode != 0:
        raise RuntimeError(f'adb {" ".join(args)}: {r.stderr.decode(errors="replace")[:200]}')
    return r.stdout if binary else r.stdout.decode(errors='replace')


def foreground():
    for line in adb('shell', 'dumpsys', 'activity', 'activities').splitlines():
        if 'topResumedActivity' in line:
            for part in line.split():
                if '/' in part and '.' in part:
                    return part.split('/')[0]
    return '?'


def shot():
    """Снимок — только после проверки, что на экране наше приложение."""
    fg = foreground()
    if fg != PKG:
        raise RuntimeError(f'на экране {fg}, а не приложение — остановился')
    return Image.open(io.BytesIO(adb('exec-out', 'screencap', '-p', binary=True)))


def px(img):
    return np.asarray(img.convert('RGB')).astype(int)


def save(img, path):
    path.parent.mkdir(parents=True, exist_ok=True)
    img.convert('RGB').save(path)
    print(f'   {path.relative_to(ROOT)}')


def tap(x, y, pause=1.3):
    adb('shell', 'input', 'tap', str(int(x)), str(int(y)))
    time.sleep(pause)


def swipe(x1, y1, x2, y2, ms=900, pause=1.2):
    adb('shell', 'input', 'swipe', *map(str, (x1, y1, x2, y2, ms)))
    time.sleep(pause)


def launch():
    adb('shell', 'am', 'force-stop', PKG)
    adb('shell', 'am', 'start', '-n', f'{PKG}/.MainActivity')
    for _ in range(40):
        time.sleep(0.5)
        if foreground() == PKG:
            time.sleep(3.0)   # заставка и восстановление гаража
            return
    raise RuntimeError('приложение не вышло на передний план')


def accent_bands(a, min_width=600):
    """Полосы строк, где идёт много пикселей фирменного цвета: это кнопки."""
    close = (np.abs(a - np.array(ACCENT)).sum(axis=2) < 40)
    rows = np.where(close.sum(axis=1) > min_width)[0]
    bands, cur = [], []
    for y in rows:
        if cur and y - cur[-1] > 4:
            bands.append(cur); cur = []
        cur.append(y)
    if cur:
        bands.append(cur)
    out = []
    for b in bands:
        row = close[b[len(b) // 2]]
        xs = np.where(row)[0]
        out.append(((xs[0] + xs[-1]) // 2, (b[0] + b[-1]) // 2))
    return out


def accent_circle(a):
    """Круглая кнопка записи: самое высокое пятно фирменного цвета."""
    close = (np.abs(a - np.array(ACCENT)).sum(axis=2) < 40)
    rows = np.where(close.sum(axis=1) > 120)[0]
    if len(rows) == 0:
        raise RuntimeError('не нашёл кнопку записи')
    band = [rows[0]]
    for y in rows[1:]:
        if y - band[-1] <= 4:
            band.append(y)
        else:
            break
    row = close[band[len(band) // 2]]
    xs = np.where(row)[0]
    return (xs[0] + xs[-1]) // 2, (band[0] + band[-1]) // 2


def card_edges(a):
    """Верхние и нижние края светлых карточек отчёта.

    Карточка отличается от белого листа на десять единиц яркости — глазу
    почти не видно, а по числам различается уверенно.
    """
    strip = a[:, 80:1000]
    is_card = (np.abs(strip - np.array(CARD)).sum(axis=2) < 12).mean(axis=1) > 0.9
    tops, bottoms = [], []
    for y in range(1, H):
        if is_card[y] and not is_card[y - 1]:
            tops.append(y)
        if not is_card[y] and is_card[y - 1]:
            bottoms.append(y)
    return tops, bottoms


def orange_rows(a):
    """Строки с оранжевым: плашка срочности и подсвеченная деталь на схеме."""
    o = ((a[:, :, 0] > 150) & (a[:, :, 1] > 55) & (a[:, :, 1] < 145) & (a[:, :, 2] < 60))
    return o.sum(axis=1)


def wait_report(timeout=150):
    """Ждём, пока разбор закончится: на экране появляется плашка срочности."""
    t0 = time.time()
    while time.time() - t0 < timeout:
        time.sleep(3)
        a = px(shot())
        if orange_rows(a)[400:1600].max() > 400:
            time.sleep(1.5)
            return
    print('   предупреждение: плашки срочности не дождался, снимаю как есть')


def scroll_to_top():
    for _ in range(4):
        swipe(540, 500, 540, 2200, 300, pause=0.5)
    time.sleep(1.0)


def frame_card(target_top, pick):
    """Подкручивает список так, чтобы нужная карточка встала под шапку.

    pick(tops, bottoms, a) выбирает верх нужной карточки на текущем снимке.
    Двух проходов хватает: список инерционный, но не настолько.
    """
    for _ in range(3):
        a = px(shot())
        tops, bottoms = card_edges(a)
        y = pick(tops, bottoms, a)
        if y is None:
            swipe(540, 1900, 540, 700, 800)
            continue
        delta = y - target_top
        if abs(delta) < 25:
            return
        mid = 1400
        swipe(540, mid + delta // 2, 540, mid - delta // 2, 900)
    return


def pick_diagram(tops, bottoms, a):
    """Верх карточки со схемой: та карточка, внутри которой есть оранжевое."""
    o = orange_rows(a)
    for t, b in zip(tops, bottoms + [H]):
        if b - t < 400:          # схема — самая высокая карточка
            continue
        if o[t:b].max() > 60 and t > APPBAR - 200:
            return t
    return None


def pick_first_card(tops, bottoms, a):
    """Верх первой светлой карточки: под ней раскрытый разбор причины."""
    for t in tops:
        if t > APPBAR - 250:
            return t
    return None


def selected_row_center():
    """Середина подсвеченной строки — той, что выбрана сейчас.

    От неё отсчитываются остальные: список выравнивается по выбранному
    пункту и упирается в края экрана, так что его положение гуляет.
    """
    a = px(shot())
    strip = a[:, 60:1020]
    hi = (np.abs(strip - np.array(HIGHLIGHT)).sum(axis=2) < 12).mean(axis=1) > 0.9
    rows = np.where(hi)[0]
    # Разрывы сшиваем щедро: буквы самого пункта делают свои строки не
    # сплошь серыми, и полоса рассыпается на куски по полсотни пикселей.
    bands, cur = [], []
    for y in rows:
        if cur and y - cur[-1] > 45:
            bands.append(cur); cur = []
        cur.append(y)
    if cur:
        bands.append(cur)
    for b in bands:
        if 90 <= b[-1] - b[0] <= 220:
            return (b[0] + b[-1]) // 2
    raise RuntimeError('не нашёл подсвеченную строку в списке языков')


def read_last():
    try:
        v = LAST.read_text().strip()
        return v if v in LANG_ROWS else None
    except FileNotFoundError:
        return None


def set_language(code):
    cur = read_last()
    if cur is None:
        raise RuntimeError(
            'неизвестно, какой язык стоит в приложении. Запишите его в '
            f'{LAST.relative_to(ROOT)} — например: echo pt > {LAST.relative_to(ROOT)}')
    if cur == code:
        return
    tap(*GEAR)
    tap(*DROPDOWN)
    anchor = selected_row_center()
    y = anchor + (LANG_ROWS.index(code) - LANG_ROWS.index(cur)) * ROW_STEP
    if not 120 < y < H - 120:
        raise RuntimeError(f'строка {code} вышла за экран: y={y:.0f}')
    tap(200, y, pause=1.8)

    # Проверяем, что попали: снова открываем список и смотрим, где подсветка.
    tap(*DROPDOWN)
    got = selected_row_center()
    expect = anchor + (LANG_ROWS.index(code) - LANG_ROWS.index(cur)) * ROW_STEP
    adb('shell', 'input', 'keyevent', 'KEYCODE_BACK')
    time.sleep(1.0)
    if abs(got - expect) > 300:
        raise RuntimeError(f'язык не переключился на {code}: подсветка на {got}, ждали около {expect:.0f}')
    LAST.write_text(code)
    tap(*BACK)


def capture(code):
    out = OUT / code
    print(f'\n{code}:')
    launch()
    if code not in LANG_ROWS:
        raise RuntimeError(f'нет такого языка в списке: {code}')
    set_language(code)

    # Главную снимаем не сейчас, а после разбора: в истории на ней должна
    # стоять свежая проверка, иначе на карточке магазина главный экран пустой
    # и непонятно, ради чего всё.
    bands = accent_bands(px(shot()))
    if not bands:
        raise RuntimeError('не нашёл кнопки на главном экране')
    bx, by = bands[0]

    # Запись: со съёмочным ключом микрофон не включается, файл уже готов.
    tap(bx, by + 190, pause=1.8)
    save(shot(), out / '3-record.png')
    mx, my = accent_circle(px(shot()))
    tap(mx, my, pause=2.5)

    send = accent_bands(px(shot()))
    if not send:
        raise RuntimeError('не нашёл кнопку отправки')
    tap(*send[-1], pause=3.0)
    wait_report()

    scroll_to_top()
    save(shot(), out / '1-report.png')

    frame_card(APPBAR, pick_diagram)
    save(shot(), out / '2-diagram.png')

    scroll_to_top()
    a = px(shot())
    tops, bottoms = card_edges(a)
    first = pick_first_card(tops, bottoms, a)
    if first is not None:
        idx = tops.index(first)
        tap(540, bottoms[idx] - 45, pause=1.5)     # раскрыть причину
    frame_card(470, pick_first_card)
    save(shot(), out / '4-detail.png')

    tap(*BACK, pause=1.8)                          # закрыть отчёт
    save(shot(), out / '5-home.png')               # теперь с отчётом в истории
    tap(*WRENCH, pause=1.6); save(shot(), out / '6-book.png'); tap(*BACK)
    tap(*CAR, pause=1.6);    save(shot(), out / '7-garage.png'); tap(*BACK)
    tap(bx, by, pause=1.8);  save(shot(), out / '8-quiz.png');   tap(*BACK)


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__); sys.exit(1)
    codes = LANG_ROWS if args[0] == 'all' else args
    done, failed = [], []
    for c in codes:
        try:
            capture(c); done.append(c)
        except Exception as e:
            print(f'   {c}: {e}')
            failed.append(c)
    print(f'\nснято: {" ".join(done) or "—"}')
    if failed:
        print(f'не вышло: {" ".join(failed)}')
    print('дальше: node store/gen-store-shots.mjs ' + ' '.join(done))


if __name__ == '__main__':
    main()

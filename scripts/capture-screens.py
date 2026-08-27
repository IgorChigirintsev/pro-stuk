#!/usr/bin/env python3
"""Снимки экранов приложения на нужном языке — для карточек магазинов.

Запуск:  python3 scripts/capture-screens.py ru [de es ...]
         python3 scripts/capture-screens.py all

Кладёт снимки в store/cards/screens/<язык>/, откуда их берёт генератор
карточек. Снимает пять экранов, которые переводятся самим приложением:
главный, анкета, запись, сервисная книжка, гараж.

Три экрана отчёта не снимает и снять не может: текст отчёта приходит с
сервера на языке запроса и хранится как есть, поэтому смена языка его не
переводит. Для них нужен новый разбор на нужном языке.

Две вещи, ради которых это скрипт, а не набор команд:

1. Перед каждым действием проверяется, что на переднем плане именно наше
   приложение. Иначе снимок уедет из чужого — однажды так и вышло.

2. Кнопки ищутся по цвету, а не по заученным координатам. Подпись под
   карточкой машины переносится по-разному на разных языках, и кнопка
   «Диагностировать» съезжает на десятки пикселей — на немецком в одно
   место, на японском в другое.
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
ROW_Y = [505, 631, 757, 883, 1009, 1135, 1261, 1387,
         1512, 1638, 1764, 1889, 2015, 2141]

GEAR, WRENCH, CAR, BACK = (1004, 225), (711, 225), (565, 225), (73, 225)
DROPDOWN = (539, 630)
ACCENT = (14, 124, 123)   # #0E7C7B — заливка главной кнопки


def adb(*args, binary=False):
    cmd = ['adb', '-t', os.environ.get('ADB_TRANSPORT', '1'), *args]
    r = subprocess.run(cmd, capture_output=True)
    if r.returncode != 0:
        raise RuntimeError(f'adb {" ".join(args)}: {r.stderr.decode(errors="replace")[:200]}')
    return r.stdout if binary else r.stdout.decode(errors='replace')


def foreground():
    out = adb('shell', 'dumpsys', 'activity', 'activities')
    for line in out.splitlines():
        if 'topResumedActivity' in line:
            for part in line.split():
                if '/' in part and '.' in part:
                    return part.split('/')[0]
    return '?'


def ours():
    """Наше ли приложение на экране. Всё снимается только после этой проверки."""
    return foreground() == PKG


def wait(seconds=1.2):
    time.sleep(seconds)


def shot():
    if not ours():
        raise RuntimeError(f'на экране не наше приложение, а {foreground()} — остановился')
    return Image.open(io.BytesIO(adb('exec-out', 'screencap', '-p', binary=True)))


def save(img, path):
    path.parent.mkdir(parents=True, exist_ok=True)
    img.convert('RGB').save(path)
    print(f'   {path.relative_to(ROOT)}')


def tap(x, y, pause=1.2):
    adb('shell', 'input', 'tap', str(x), str(y))
    wait(pause)


def launch():
    adb('shell', 'am', 'force-stop', PKG)
    adb('shell', 'am', 'start', '-n', f'{PKG}/.MainActivity')
    for _ in range(20):
        wait(0.5)
        if ours():
            wait(2.0)   # заставка
            return
    raise RuntimeError('приложение не вышло на передний план')


def find_accent_button(img):
    """Центр верхней широкой кнопки фирменного цвета — «Диагностировать».

    Ищем строки, где подряд идёт много пикселей нужного цвета: у кнопки это
    почти вся ширина, у мелких значков — десятки пикселей.
    """
    a = np.asarray(img.convert('RGB')).astype(int)
    close = (np.abs(a - np.array(ACCENT)).sum(axis=2) < 40)
    wide = np.where(close.sum(axis=1) > 700)[0]
    if len(wide) == 0:
        raise RuntimeError('не нашёл главную кнопку по цвету')
    # Берём первый сплошной блок строк.
    first = wide[0]
    block = [first]
    for y in wide[1:]:
        if y - block[-1] <= 3:
            block.append(y)
        else:
            break
    row = close[block[len(block) // 2]]
    xs = np.where(row)[0]
    return int((xs[0] + xs[-1]) / 2), int((block[0] + block[-1]) / 2)


def set_language(code):
    if code not in LANG_ROWS:
        raise RuntimeError(f'нет такого языка в списке: {code}')
    tap(*GEAR)
    tap(*DROPDOWN)
    tap(200, ROW_Y[LANG_ROWS.index(code)], pause=1.6)
    tap(*BACK)


def capture(code):
    out = OUT / code
    print(f'\n{code}:')
    launch()
    set_language(code)

    home = shot()
    save(home, out / '5-home.png')

    bx, by = find_accent_button(home)
    tap(bx, by, pause=1.8)              # анкета
    save(shot(), out / '8-quiz.png')
    tap(*BACK)

    tap(bx, by + 190, pause=1.8)        # запись
    save(shot(), out / '3-record.png')
    tap(*BACK)

    tap(*WRENCH, pause=1.6)             # сервисная книжка
    save(shot(), out / '6-book.png')
    tap(*BACK)

    tap(*CAR, pause=1.6)                # гараж
    save(shot(), out / '7-garage.png')
    tap(*BACK)


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        sys.exit(1)
    codes = LANG_ROWS if args[0] == 'all' else args
    if not ours():
        print(f'на экране {foreground()}, а не приложение — запускаю его сам')
    for c in codes:
        capture(c)
    print('\nготово. Дальше: node store/gen-store-shots.mjs ' + ' '.join(codes))


if __name__ == '__main__':
    main()

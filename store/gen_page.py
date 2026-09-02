# -*- coding: utf-8 -*-
import sys, html; sys.path.insert(0, '.')
import play_iap as m

TITLES = {
 'checks_5':'5 проверок звука','checks_10':'10 проверок звука',
 'checks_20':'20 проверок звука','checks_40':'40 проверок звука',
 'garage_1':'1 место в гараже','garage_2':'2 места в гараже',
 'garage_4':'4 места в гараже','garage_8':'8 мест в гараже'}
SUB = {'checks_5':'5 проверок на выбранную машину','checks_10':'10 проверок на выбранную машину',
 'checks_20':'20 проверок на выбранную машину','checks_40':'40 проверок на выбранную машину',
 'garage_1':'+1 место, на нём 5 проверок','garage_2':'+2 места, на каждом 5 проверок',
 'garage_4':'+4 места, на каждом 5 проверок','garage_8':'+8 мест, на каждом 5 проверок'}

rows = list(m.rows())
by = {}
for pid, code, lab, nm, ds in rows:
    by.setdefault(pid, []).append((code, lab, nm, ds))
e = html.escape

def cell(text, kind, rtl):
    d = ' dir="rtl"' if rtl else ''
    return (f'<button class="v {kind}" type="button" data-len="{len(text)}">'
            f'<span class="s"{d}>{e(text)}</span>'
            f'<span class="n">{len(text)}</span></button>')

out = []
for pid, items in by.items():
    play_id = 'checks_10_2' if pid == 'checks_10' else pid
    out.append(f'''<section class="prod" id="{pid}">
<div class="ph">
  <code class="pid">{play_id}</code>
  <div class="pt"><b>{e(TITLES[pid])}</b><span>{e(SUB[pid])}</span></div>
</div>
<div class="grid">
  <div class="hd">Язык</div><div class="hd">Название <i>≤55</i></div><div class="hd">Описание <i>≤200</i></div>''')
    for code, lab, nm, ds in items:
        rtl = code == 'ar'
        out.append(f'''  <div class="loc" data-loc="{code}"><code>{code}</code><span>{e(lab)}</span></div>
  <div class="loc-c" data-loc="{code}">{cell(nm,'nm',rtl)}</div>
  <div class="loc-c" data-loc="{code}">{cell(ds,'ds',rtl)}</div>''')
    out.append('</div></section>')

chips = ['<button class="chip on" type="button" data-f="all">Все</button>']
for code, lab in m.LOC:
    chips.append(f'<button class="chip" type="button" data-f="{code}">{code}</button>')

HTML = f'''<title>Товары Pro-Stuk для Play</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap">
<style>
:root {{
  --bg:#F4F7F5; --surface:#FFFFFF; --raise:#EDF2EF;
  --ink:#141E1B; --mid:#4C5B56; --dim:#7C8B85;
  --line:#DCE4E0; --line2:#C6D2CD;
  --acc:#0C6555; --acc-ink:#FFFFFF; --acc-soft:#DCEBE6;
  --warn:#8A5A12;
  --ui:Archivo,system-ui,sans-serif;
  --mono:"JetBrains Mono",ui-monospace,Menlo,monospace;
  --txt:system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans","Noto Sans Arabic","Noto Sans SC","Noto Sans JP","Noto Sans KR",sans-serif;
}}
@media (prefers-color-scheme:dark) {{
  :root:not([data-theme="light"]) {{
    --bg:#0E1513; --surface:#161F1C; --raise:#1D2825;
    --ink:#E7EDEA; --mid:#A3B1AC; --dim:#7A8783;
    --line:#25322E; --line2:#33433E;
    --acc:#57CFB3; --acc-ink:#08201B; --acc-soft:#1B322C;
    --warn:#D9A55A;
  }}
}}
:root[data-theme="dark"] {{
  --bg:#0E1513; --surface:#161F1C; --raise:#1D2825;
  --ink:#E7EDEA; --mid:#A3B1AC; --dim:#7A8783;
  --line:#25322E; --line2:#33433E;
  --acc:#57CFB3; --acc-ink:#08201B; --acc-soft:#1B322C;
  --warn:#D9A55A;
}}
* {{ box-sizing:border-box; }}
body {{ background:var(--bg); color:var(--ink); font-family:var(--ui);
  margin:0; padding:0 20px 72px; -webkit-font-smoothing:antialiased; }}
.wrap {{ max-width:1180px; margin:0 auto; }}

header {{ padding:40px 0 20px; }}
h1 {{ font-size:27px; font-weight:700; letter-spacing:-.02em; margin:0 0 8px;
  text-wrap:balance; }}
.lede {{ color:var(--mid); font-size:14.5px; line-height:1.6; max-width:64ch; margin:0; }}
.lede b {{ color:var(--ink); font-weight:600; }}
.facts {{ display:flex; flex-wrap:wrap; gap:8px 22px; margin:18px 0 0;
  font-size:12.5px; color:var(--dim); }}
.facts span {{ display:flex; gap:7px; align-items:baseline; }}
.facts b {{ color:var(--ink); font-weight:600; font-variant-numeric:tabular-nums; }}

.bar {{ position:sticky; top:0; z-index:5; background:var(--bg);
  padding:14px 0 12px; border-bottom:1px solid var(--line);
  display:flex; gap:10px; align-items:center; flex-wrap:wrap; }}
.bar .lbl {{ font-size:11.5px; text-transform:uppercase; letter-spacing:.09em;
  color:var(--dim); font-weight:600; margin-right:2px; }}
.chip {{ font-family:var(--mono); font-size:12px; padding:5px 9px;
  border:1px solid var(--line2); border-radius:5px; background:var(--surface);
  color:var(--mid); cursor:pointer; }}
.chip:hover {{ border-color:var(--acc); color:var(--ink); }}
.chip.on {{ background:var(--acc); border-color:var(--acc); color:var(--acc-ink); font-weight:500; }}
.chip:focus-visible, .v:focus-visible {{ outline:2px solid var(--acc); outline-offset:2px; }}

.prod {{ margin-top:38px; }}
.ph {{ display:flex; align-items:baseline; gap:14px; flex-wrap:wrap;
  padding-bottom:10px; border-bottom:2px solid var(--ink); }}
.pid {{ font-family:var(--mono); font-size:14px; font-weight:500;
  color:var(--acc); }}
.pt {{ display:flex; align-items:baseline; gap:10px; flex-wrap:wrap; }}
.pt b {{ font-size:15px; font-weight:600; }}
.pt span {{ font-size:12.5px; color:var(--dim); }}

.grid {{ display:grid; grid-template-columns:150px minmax(180px,1fr) minmax(300px,2.1fr);
  gap:0; }}
.hd {{ font-size:11px; text-transform:uppercase; letter-spacing:.09em;
  color:var(--dim); font-weight:600; padding:11px 12px 9px; }}
.hd i {{ font-style:normal; font-family:var(--mono); text-transform:none;
  letter-spacing:0; color:var(--line2); margin-left:5px; }}
.loc {{ display:flex; flex-direction:column; gap:2px; justify-content:center;
  padding:9px 12px; border-top:1px solid var(--line); }}
.loc code {{ font-family:var(--mono); font-size:12.5px; color:var(--ink); font-weight:500; }}
.loc span {{ font-size:11px; color:var(--dim); }}
.loc-c {{ border-top:1px solid var(--line); display:flex; padding:5px 4px; }}

.v {{ font:inherit; font-family:var(--txt); font-size:13.5px; line-height:1.5;
  text-align:left; width:100%; background:transparent; border:1px solid transparent;
  border-radius:6px; padding:7px 34px 7px 9px; color:var(--ink);
  cursor:pointer; position:relative; }}
.v:hover {{ background:var(--raise); border-color:var(--line2); }}
.v .s {{ display:block; }}
.v .n {{ position:absolute; top:7px; right:8px; font-family:var(--mono);
  font-size:10px; color:var(--dim); font-variant-numeric:tabular-nums; }}
.v:hover .n {{ color:var(--acc); }}
.v.done {{ background:var(--acc-soft); border-color:var(--acc); }}
.v.done::after {{ content:"скопировано"; position:absolute; top:7px; right:8px;
  font-family:var(--ui); font-size:10px; font-weight:600; color:var(--acc);
  letter-spacing:.03em; }}
.v.done .n {{ opacity:0; }}
@media (prefers-reduced-motion:no-preference) {{ .v {{ transition:background .12s, border-color .12s; }} }}

.note {{ margin-top:34px; padding:16px 18px; background:var(--surface);
  border-left:3px solid var(--warn); border-radius:0 7px 7px 0;
  font-size:13px; line-height:1.65; color:var(--mid); }}
.note b {{ color:var(--ink); font-weight:600; }}
.note code {{ font-family:var(--mono); font-size:12px; color:var(--acc); }}
.sr {{ position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0 0 0 0); }}
.hide {{ display:none !important; }}
@media (max-width:760px) {{
  .grid {{ grid-template-columns:1fr; }}
  .hd {{ display:none; }}
  .loc {{ border-top:2px solid var(--ink); flex-direction:row; align-items:baseline; gap:8px; }}
  .loc-c {{ border-top:none; }}
}}
</style>

<div class="wrap">
<header>
  <h1>Товары Pro-Stuk для Play</h1>
  <p class="lede">Названия и описания восьми покупок на четырнадцати языках.
  Нажмите на строку — она скопируется целиком, вставляйте в поле консоли.
  Число справа показывает длину: <b>название до 55 знаков, описание до 200</b>.</p>
  <div class="facts">
    <span>Товаров <b>8</b></span>
    <span>Языков <b>14</b></span>
    <span>Строк <b>224</b></span>
    <span>Самое длинное название <b>35</b></span>
    <span>Самое длинное описание <b>164</b></span>
  </div>
</header>

<div class="bar">
  <span class="lbl">Язык</span>
  {' '.join(chips)}
</div>

{chr(10).join(out)}

<div class="note">
  <b>Где вводить.</b> Монетизация → Товары → Контент для однократных покупок →
  товар → Управление переводами. Список языков берётся из карточки приложения:
  если языка нет там, в товарах он не появится.<br>
  <b>Десятипакет</b> заведён в Play под идентификатором <code>checks_10_2</code> —
  переименовать товар нельзя, поэтому сервер знает оба имени.
</div>
</div>

<div class="sr" role="status" aria-live="polite" id="say"></div>
<script>
(function () {{
  var say = document.getElementById('say'), timer = null;

  function copy(text, el) {{
    function ok() {{
      document.querySelectorAll('.v.done').forEach(function (n) {{ n.classList.remove('done'); }});
      el.classList.add('done');
      say.textContent = 'Скопировано, ' + text.length + ' знаков';
      clearTimeout(timer);
      timer = setTimeout(function () {{ el.classList.remove('done'); }}, 1600);
    }}
    if (navigator.clipboard && navigator.clipboard.writeText) {{
      navigator.clipboard.writeText(text).then(ok, function () {{ fallback(text, ok); }});
    }} else {{ fallback(text, ok); }}
  }}

  function fallback(text, ok) {{
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    var done = false;
    try {{ done = document.execCommand('copy'); }} catch (e) {{ done = false; }}
    document.body.removeChild(ta);
    if (done) {{ ok(); }} else {{ say.textContent = 'Скопировать не вышло — выделите текст вручную'; }}
  }}

  document.addEventListener('click', function (ev) {{
    var v = ev.target.closest('.v');
    if (v) {{ copy(v.querySelector('.s').textContent, v); return; }}
    var c = ev.target.closest('.chip');
    if (!c) return;
    document.querySelectorAll('.chip').forEach(function (n) {{ n.classList.toggle('on', n === c); }});
    var f = c.dataset.f;
    document.querySelectorAll('[data-loc]').forEach(function (n) {{
      n.classList.toggle('hide', f !== 'all' && n.dataset.loc !== f);
    }});
  }});
}})();
</script>
'''
open('/home/igor/work/knock/store/play-products.html','w',encoding='utf-8').write(HTML)
print('строк в файле:', HTML.count(chr(10)), '| товаров:', len(by), '| ячеек:', len(rows)*2)

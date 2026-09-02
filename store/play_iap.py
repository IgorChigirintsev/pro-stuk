# -*- coding: utf-8 -*-
"""Локализации товаров для Google Play. Имя <=55, описание <=200.

Описание отвечает на три вопроса покупателя: что он получит, для какой
машины и есть ли срок. Жаргона вроде «не сгорают» нет — сказано прямо,
что срока действия нет. Привязка к выбранной машине названа явно:
проверки ложатся на место гаража, а не на аккаунт.
"""
LOC = [
 ('en-US','English (United States)'), ('ru-RU','Russian'),
 ('de-DE','German (Germany)'), ('es-ES','Spanish (Spain)'),
 ('fr-FR','French (France)'), ('it-IT','Italian'),
 ('pt-BR','Portuguese (Brazil)'), ('pl-PL','Polish'),
 ('tr-TR','Turkish'), ('nl-NL','Dutch (Netherlands)'),
 ('zh-CN','Chinese (Simplified)'), ('ja-JP','Japanese'),
 ('ko-KR','Korean'), ('ar','Arabic'),
]
L = {}
S = lambda k, one, many: one if k == 1 else many

L['en-US'] = dict(
  cn=lambda n: f"{n} sound checks",
  cd=lambda n: f"{n} more checks for the car you choose. They have no expiry date, and one check is used per report.",
  gn=lambda k,n: f"{k} garage {S(k,'slot','slots')} and {n} sound checks",
  gd=lambda k,n: (f"Room for {S(k,'one more car',f'{k} more cars')} in your garage, with {n} checks included. "
                  f"{S(k,'The slot stays','The slots stay')} on your account and the checks have no expiry date."))

_RU_G = {1:'Ещё одна машина в гараже', 2:'Ещё две машины в гараже',
         4:'Ещё четыре машины в гараже', 8:'Ещё восемь машин в гараже'}
L['ru-RU'] = dict(
  cn=lambda n: f"{n} проверок звука",
  cd=lambda n: f"Ещё {n} проверок для выбранной машины. Срока действия у них нет, на один отчёт уходит одна.",
  gn=lambda k,n: (f"Место в гараже и {n} проверок" if k==1 else
                  f"{k} мест{'а' if k<5 else ''} в гараже и {n} проверок"),
  gd=lambda k,n: (f"{_RU_G[k]} и {n} проверок на {S(k,'неё','них')}. "
                  f"Мест{S(k,'о остаётся','а остаются')} за аккаунтом, срока действия у проверок нет."))

_DE_C = {1:'ein weiteres Auto', 2:'zwei weitere Autos', 4:'vier weitere Autos', 8:'acht weitere Autos'}
L['de-DE'] = dict(
  cn=lambda n: f"{n} Tonprüfungen",
  cd=lambda n: f"{n} weitere Prüfungen für das gewählte Auto. Sie haben kein Ablaufdatum, pro Bericht wird eine verbraucht.",
  gn=lambda k,n: f"{k} {S(k,'Garagenplatz','Garagenplätze')} und {n} Tonprüfungen",
  gd=lambda k,n: (f"Platz für {_DE_C[k]} in der Garage, dazu {n} Prüfungen. "
                  f"{S(k,'Der Platz bleibt','Die Plätze bleiben')} dem Konto erhalten, "
                  f"die Prüfungen haben kein Ablaufdatum."))

_ES_C = {1:'un coche más', 2:'dos coches más', 4:'cuatro coches más', 8:'ocho coches más'}
L['es-ES'] = dict(
  cn=lambda n: f"{n} análisis de sonido",
  cd=lambda n: f"{n} análisis más para el coche que elijas. No caducan y se gasta uno por informe.",
  gn=lambda k,n: f"{k} {S(k,'plaza','plazas')} de garaje y {n} análisis",
  gd=lambda k,n: (f"Sitio para {_ES_C[k]} en tu garaje, con {n} análisis incluidos. "
                  f"{S(k,'La plaza queda','Las plazas quedan')} en tu cuenta y los análisis no caducan."))

_FR_C = {1:'une voiture de plus', 2:'deux voitures de plus', 4:'quatre voitures de plus', 8:'huit voitures de plus'}
L['fr-FR'] = dict(
  cn=lambda n: f"{n} analyses sonores",
  cd=lambda n: f"{n} analyses de plus pour la voiture de votre choix. Elles n'ont pas de date limite et une est utilisée par rapport.",
  gn=lambda k,n: f"{k} {S(k,'place','places')} de garage et {n} analyses",
  gd=lambda k,n: (f"De la place pour {_FR_C[k]} dans votre garage, avec {n} analyses incluses. "
                  f"{S(k,'La place reste','Les places restent')} sur votre compte "
                  f"et les analyses n'ont pas de date limite."))

_IT_C = {1:"un'auto in più", 2:'due auto in più', 4:'quattro auto in più', 8:'otto auto in più'}
L['it-IT'] = dict(
  cn=lambda n: f"{n} analisi del suono",
  cd=lambda n: f"{n} analisi in più per l'auto che scegli. Non hanno scadenza e se ne usa una per ogni report.",
  gn=lambda k,n: f"{k} {S(k,'posto','posti')} in garage e {n} analisi",
  gd=lambda k,n: (f"Spazio per {_IT_C[k]} nel tuo garage, con {n} analisi incluse. "
                  f"{S(k,'Il posto resta','I posti restano')} sul tuo account "
                  f"e le analisi non hanno scadenza."))

_PT_C = {1:'mais um carro', 2:'mais dois carros', 4:'mais quatro carros', 8:'mais oito carros'}
L['pt-BR'] = dict(
  cn=lambda n: f"{n} análises de som",
  cd=lambda n: f"{n} análises a mais para o carro que você escolher. Não têm prazo de validade e uma é usada por relatório.",
  gn=lambda k,n: f"{k} {S(k,'vaga','vagas')} na garagem e {n} análises",
  gd=lambda k,n: (f"Espaço para {_PT_C[k]} na sua garagem, com {n} análises incluídas. "
                  f"{S(k,'A vaga fica','As vagas ficam')} na sua conta "
                  f"e as análises não têm prazo de validade."))

_PL_C = {1:'jedno kolejne auto', 2:'dwa kolejne auta', 4:'cztery kolejne auta', 8:'osiem kolejnych aut'}
L['pl-PL'] = dict(
  cn=lambda n: f"{n} analiz dźwięku",
  cd=lambda n: f"Jeszcze {n} analiz dla wybranego auta. Nie mają terminu ważności, a na jeden raport zużywa się jedną.",
  gn=lambda k,n: f"{k} {'miejsce' if k==1 else 'miejsca' if k<5 else 'miejsc'} w garażu i {n} analiz",
  gd=lambda k,n: (f"Miejsce na {_PL_C[k]} w garażu i {n} analiz dźwięku. "
                  f"{S(k,'Miejsce zostaje','Miejsca zostają')} na koncie, "
                  f"a analizy nie mają terminu ważności."))

L['tr-TR'] = dict(
  cn=lambda n: f"{n} ses analizi",
  cd=lambda n: f"Seçtiğiniz araç için {n} analiz daha. Son kullanma tarihi yoktur, her rapor için bir tanesi kullanılır.",
  gn=lambda k,n: f"{k} garaj yeri ve {n} ses analizi",
  gd=lambda k,n: (f"Garajınızda {k} araç daha için yer ve {n} ses analizi. "
                  f"{S(k,'Yer hesabınızda kalır','Yerler hesabınızda kalır')}, "
                  f"analizlerin son kullanma tarihi yoktur."))

_NL_C = {1:'nog een auto', 2:'twee auto’s extra', 4:'vier auto’s extra', 8:'acht auto’s extra'}
L['nl-NL'] = dict(
  cn=lambda n: f"{n} geluidschecks",
  cd=lambda n: f"{n} checks extra voor de auto die je kiest. Ze verlopen niet en er gaat er één per rapport af.",
  gn=lambda k,n: f"{k} {S(k,'garageplek','garageplekken')} en {n} geluidschecks",
  gd=lambda k,n: (f"Plek voor {_NL_C[k]} in je garage, inclusief {n} checks. "
                  f"{S(k,'De plek blijft','De plekken blijven')} aan je account gekoppeld "
                  f"en de checks verlopen niet."))

L['zh-CN'] = dict(
  cn=lambda n: f"{n} 次声音检测",
  cd=lambda n: f"为所选车辆增加 {n} 次检测。检测没有有效期限制，每份报告消耗一次。",
  gn=lambda k,n: f"{k} 个车位和 {n} 次声音检测",
  gd=lambda k,n: f"车库中可再停放 {k} 台车，并附带 {n} 次检测。车位长期保留在账号中，检测没有有效期限制。")

L['ja-JP'] = dict(
  cn=lambda n: f"音の診断{n}回",
  cd=lambda n: f"選んだ車に診断{n}回を追加します。有効期限はなく、レポート1件につき1回消費します。",
  gn=lambda k,n: f"ガレージ{k}台分と音の診断{n}回",
  gd=lambda k,n: f"ガレージにもう{k}台分の枠が増え、診断{n}回が付きます。枠はアカウントに残り、診断に有効期限はありません。")

L['ko-KR'] = dict(
  cn=lambda n: f"소리 검사 {n}회",
  cd=lambda n: f"선택한 차량에 검사 {n}회를 추가합니다. 유효기간이 없으며 보고서 1건당 1회 사용됩니다.",
  gn=lambda k,n: f"차고 {k}칸과 소리 검사 {n}회",
  gd=lambda k,n: f"차고에 차 {k}대를 더 넣을 수 있고 검사 {n}회가 함께 제공됩니다. 칸은 계정에 유지되고 검사에는 유효기간이 없습니다.")

# Арабский: 3-10 — множественное (فحوص), 11+ — единственное в النصب (فحصًا).
_AR_N  = lambda n: f"{n} فحوص صوتية" if n <= 10 else f"{n} فحصًا صوتيًا"
_AR_E  = lambda n: f"{n} فحوص إضافية" if n <= 10 else f"{n} فحصًا إضافيًا"
_AR_G  = lambda n: f"{n} فحوص صوتية" if n <= 10 else f"{n} فحصًا صوتيًا"
_AR_SLOT = {1:'مكان في المرآب', 2:'مكانان في المرآب', 4:'4 أماكن في المرآب', 8:'8 أماكن في المرآب'}
_AR_CARS = {1:'لسيارة إضافية واحدة', 2:'لسيارتين إضافيتين', 4:'لأربع سيارات إضافية', 8:'لثماني سيارات إضافية'}
L['ar'] = dict(
  cn=_AR_N,
  cd=lambda n: f"{_AR_E(n)} للسيارة التي تختارها. الفحوص لا تنتهي صلاحيتها، ويُستهلك فحص واحد لكل تقرير.",
  gn=lambda k,n: f"{_AR_SLOT[k]} و{_AR_G(n)}",
  gd=lambda k,n: (f"مكان {_AR_CARS[k]} في مرآبك، مع {_AR_G(n)}. "
                  f"{S(k,'المكان يبقى','الأماكن تبقى')} في حسابك، والفحوص لا تنتهي صلاحيتها."))

PRODUCTS = [(f'checks_{n}', 'c', n) for n in (5,10,20,40)] + \
           [(f'garage_{k}', 'g', k) for k in (1,2,4,8)]

def rows():
    """(product_id, locale, label, name, description)"""
    for pid, kind, v in PRODUCTS:
        for code, label in LOC:
            f = L[code]
            nm, ds = (f['cn'](v), f['cd'](v)) if kind == 'c' else (f['gn'](v, v*5), f['gd'](v, v*5))
            yield pid, code, label, nm, ds

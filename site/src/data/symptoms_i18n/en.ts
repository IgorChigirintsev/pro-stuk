import type { SymptomTr } from '../types';

/** Разборы симптомов по-английски. Структура — из русских файлов рядом:
 *  порядок причин и уровни опасности берутся оттуда и здесь не дублируются. */
export const pages: Record<string, SymptomTr> = {
  'stuk-v-dvigatele': {
    h1: 'Knocking in the engine',
    metaTitle: 'Engine knocking: causes, how serious it is, what to do | Stuk',
    description:
      'Why an engine knocks: from harmless valve ticking to worn crankshaft bearings. How to tell a dangerous knock apart, whether you can keep driving and what to check yourself.',
    intro: [
      'A knock in the engine covers the widest range of seriousness of any symptom: the same word hides both the harmless chatter of injectors and worn crankshaft bearings, where every further kilometre brings a rebuild closer. The good news is that different knocks sound different and appear under different conditions — those signs narrow the field quickly.',
      'The questions any engine specialist starts with: where it knocks (from the top of the engine or from deep inside), when (cold, warm, under load) and whether the knock changes with engine speed. A light, rapid ticking from the top is usually the valve train. A dull knock from below that speeds up when you blip the throttle and gets louder under load is the worrying one.',
    ],
    causes: [
      { name: 'Wide valve clearances or hydraulic lifters', likelihood: 'Very common — the classic cause of ticking from the top' },
      { name: 'Normal injector chatter (direct-injection petrol engines and diesels)', likelihood: 'Common — and not a fault' },
      { name: 'Ancillaries: pulleys, brackets, the air-conditioning clutch', likelihood: 'Common when the knock ignores the throttle' },
      { name: 'Detonation under acceleration (pinking)', likelihood: 'Common after filling up with low-octane fuel' },
      { name: 'Crankshaft and big-end bearings', likelihood: 'Rarer, but this is the dangerous one' },
    ],
    canRide: [
      'It depends on the character of the knock. A steady tick from the top is fine to drive with: the valve train wears over months, not over one trip — but book an adjustment within the next couple of weeks. Injector chatter on a direct-injection engine needs nothing at all: that is the fuel system doing its job.',
      'A dull knock from deep in the engine that speeds up with revs and grows louder under load is a reason to stop. That is how worn bearings sound — the plain bearings the crankshaft turns in. Carrying on can end with a spun bearing or a seized engine; do not drive it to the garage under its own power if you can help it, call a tow truck.',
    ],
    checks: [
      'Check the oil level on the dipstick: a low level is a frequent companion and amplifier of engine knocks, and a bearing knock with low oil pressure gets worse fast.',
      'Listen for where the sound comes from: stand at the open bonnet — valve ticking is heard from above, a bearing knock is dull and comes from deep and low down.',
      'Blip the throttle gently in neutral: a knock that speeds up with the revs and sounds louder under load is more serious than one living its own life.',
      'Think back to your last fill-up: a metallic ringing under acceleration after questionable petrol looks like detonation and often goes away after one tank of decent fuel.',
      'Check whether the oil pressure light is on: the red oil can together with a knock means switch the engine off immediately.',
    ],
    appHelp:
      'The Stuk app walks you through the same questions an engine specialist asks, records the sound and measures its spectrum and rhythm: how often the knocks come and how that relates to engine speed — for a valve knock and a crankshaft knock that ratio differs. The report gives likely causes with percentages, an urgency traffic light and a list of phrases for the conversation at the garage.',
    faq: [
      {
        q: 'Why does the engine knock only when cold?',
        a: 'Until the engine warms up, the clearances between parts are larger and thick oil has not reached every component yet. Ticking lifters or a dull piston knock in the first minutes after a cold start that disappears completely as the engine warms is usually something to keep an eye on, not an emergency.',
      },
      {
        q: 'What does the most dangerous engine knock sound like?',
        a: 'Dull, low, coming from deep inside the engine; it speeds up with revs and grows under load — accelerating or going uphill. That is how big-end and main bearings knock. With that sound, do not drive it yourself; get the car to a mechanic as soon as you can.',
      },
      {
        q: 'Can a knock be normal?',
        a: 'Yes. Direct-injection engines (TSI, GDI) and diesels always chatter through their injectors — the sound is the same cold or hot and is louder outside than in the cabin. That is normal operation, not a fault.',
      },
    ],
  },

  'skrip-tormozov': {
    h1: 'Squealing brakes',
    metaTitle: 'Squealing brakes: dangerous or not, causes and what to do | Stuk',
    description:
      'Why brakes squeal: an overnight film of rust, the pad wear indicator or a problem with the discs. How to tell a harmless squeal from a warning.',
    intro: [
      'A squeal when braking is the rare case where the most common cause is also the most harmless. Overnight, after rain or a car wash, brake discs pick up a thin film of rust; the first few stops scrape it off — with a squeal. If the sound is gone a couple of minutes into the drive, nothing needs doing: that is normal life for any car with disc brakes.',
      'A squeal or squeak at every stop is another matter. Most pads carry a metal wear indicator: a tab designed to touch the disc and squeal once the friction material has worn down to its limit. That is a warning by design — get the pads checked before the squeal turns into metal grinding on metal, because that already means ruined discs and a longer stopping distance.',
    ],
    causes: [
      { name: 'A film of rust after standing, rain or a wash', likelihood: 'Most often — if the squeal goes away in the first few stops' },
      { name: 'Wear indicator: the pads are nearly finished', likelihood: 'Common — if it squeals at every stop' },
      { name: 'Hardened or cheap pads, dust between pad and disc', likelihood: 'Common; unpleasant, but not dangerous' },
      { name: 'Pads worn down to the metal (grinding)', likelihood: 'If the warning was ignored' },
    ],
    canRide: [
      'With a morning squeal that vanishes after the first few stops — drive without restrictions: a few gentle presses of the pedal clean the discs and the matter is closed until the next rain.',
      'With a constant squeal you can also drive — the brakes still work at full strength — but book an inspection this week rather than someday: if it is the wear indicator, the next stage is grinding, pads worn to the backing plate and a bill for pads and discs both. Metal grinding on metal is a stop sign: go straight to a garage, braking early and gently.',
    ],
    checks: [
      'Look for the pattern: a squeal only in the first stops after standing or in damp weather is rust; a squeal at every stop is a reason for an inspection.',
      'Look through the wheel spokes: on many cars the outer pad is visible. Friction material thinner than 3–4 mm means replacement.',
      'Listen to whether it is one side or both: a squeal from one side more often points to the wear indicator or a sticking caliper on that side.',
      'Check for a squeak while driving without braking that changes when you touch the pedal lightly — that is the wear indicator brushing the disc before you even press.',
      'Watch the pedal and the line the car takes: pulling to one side while braking, pulsing or a long pedal are more serious than a squeal, and mean a garage without delay.',
    ],
    appHelp:
      'The Stuk app separates the harmless case from the worrying one with the same questions — when it squeals and whether the sound goes away — and the recording helps tell a high wear-indicator squeal from grinding. The report gives likely causes with percentages and a traffic light: safe to drive, shop this week, or pull over.',
    faq: [
      {
        q: 'Why do brakes squeal in the morning and in the rain?',
        a: 'Cast-iron brake discs pick up a thin layer of rust within a few hours in damp air. The first stops scrape it off — hence the squeal and light scraping, which soon disappear. This is normal and needs no repair.',
      },
      {
        q: 'What is a brake pad wear indicator?',
        a: 'A metal tab on the pad that starts to touch the disc and squeal loudly once the friction material has worn to its limit. It is a warning by design: if you hear a constant squeal, book a pad replacement before the grinding starts.',
      },
      {
        q: 'How is a squeal different from grinding?',
        a: 'Squealing and squeaking are high-pitched sounds while the brakes still work fully. Grinding is a coarse metal-on-metal noise: the friction material is gone and the steel backing plate is rubbing the disc. Do not drive with grinding — go carefully to a garage.',
      },
    ],
  },

  'gul-pri-dvizhenii': {
    h1: 'Humming while driving',
    metaTitle: 'Humming while driving: wheel bearing, tyres or gearbox | Stuk',
    description:
      'A steady hum at speed: wheel bearing, tyres, gearbox or final drive. Simple checks without a garage — the neutral test and gentle turns — narrow the cause down.',
    intro: [
      'A steady hum that appears with speed and grows along with it usually comes from one of two places: a wheel bearing — the bearing the wheel turns on — or the tyres. You can tell them apart without a garage. A bearing hums the same on any tarmac, sounds like a distant aircraft taking off and often changes in gentle bends. Tyres react to the surface: quieter on fresh tarmac, louder on coarse; winter, off-road and unevenly worn tyres are the loudest of all.',
      'Less often the source is the drivetrain: the gearbox, the final drive or the propshaft on rear- and four-wheel-drive cars. The neutral test sorts the versions out: get up to the speed where you hear the hum, select neutral and coast. If the hum stays, it is tied to the wheels turning — bearings, tyres, road surface. If it disappears along with the engine speed, look at the engine and what it drives.',
    ],
    causes: [
      { name: 'Wheel bearing', likelihood: 'Most often — a steady hum, grows with speed, surface makes no difference' },
      { name: 'Tyre noise', likelihood: 'Common — depends on the surface; winter and worn tyres are louder' },
      { name: 'Gearbox or final drive', likelihood: 'Rarer — the whine changes with the gear or when you press the throttle' },
      { name: 'Propshaft (rear- and four-wheel drive)', likelihood: 'A hum with vibration through the floor in a narrow speed range' },
      { name: 'Wind noise: door seals, a roof rack', likelihood: 'Only above 70–90 km/h' },
    ],
    canRide: [
      'You can drive with a humming bearing, but this is not a sound to live with for months: a worn wheel bearing gradually develops play — free movement of the wheel — and in a neglected case it can seize. The sensible plan is a check within the week, with long fast trips postponed until then. If the hum suddenly got louder or vibration joined it, do not put the check off.',
      'Tyre noise and wind noise are a comfort question, not a safety one: drive with them without restrictions. A whine from the gearbox or final drive does not mean stopping on the hard shoulder either, but it should not be dragged out: caught early, an oil change is often enough, while a late repair with shafts and gears costs several times more.',
    ],
    checks: [
      'The neutral test: get up to the humming speed, select neutral and coast. The hum stays — wheels and bearings; it goes away with the engine speed — engine and drivetrain.',
      'Gentle curves on a safe straight road: if the hum fades in a smooth arc one way and grows the other way, it looks like a wheel bearing, and the side tells you which one.',
      'Compare surfaces: drive a stretch of fresh tarmac and a stretch of coarse tarmac. A clear difference in loudness points to the tyres.',
      'Look at the tread and check the pressures: sawtooth wear — steps on the edges of the tread blocks — makes tyres loud and hints at wrong alignment or tired dampers.',
      'On a manual, check whether the whine changes in different gears at the same speed; on rear-wheel drive, whether the hum comes with a shudder through the floor in a narrow speed range.',
    ],
    appHelp:
      'The Stuk app walks you through the same questions — does the hum stay in neutral, does it change in bends and with the surface — and helps you record the sound to compare its character with typical cases. The report gives likely causes with percentages and a conclusion: drive on calmly, plan a garage visit, or check without delay.',
    faq: [
      {
        q: 'How do I tell a bearing hum from tyre noise?',
        a: 'By how it reacts to the road and to bends. Tyre noise changes with the surface: quieter on new tarmac, louder on coarse. A bearing hums the same everywhere but often responds to gentle bends, when the load moves onto the outer wheel. Looking at the tread helps too: unevenly worn tyres hum by themselves.',
      },
      {
        q: 'Is it dangerous to drive with a humming wheel bearing?',
        a: 'Early on, no, but do not drag it out: play develops in the bearing over time, the wheel starts to wobble and in the worst case the bearing seizes. The check is simple: on a lift a mechanic spins the wheels and finds the noisy hub in a few minutes. A sensible window for the visit is within a week.',
      },
      {
        q: 'Why does the hum change in bends?',
        a: 'In a bend the weight of the car moves onto the outer wheels. If the right-hand bearing is humming, a left turn increases the load on it and the hum grows, while a right turn eases it. This pattern helps identify the side before the garage: remember it and tell the mechanic.',
      },
    ],
  },

  'stuk-v-podveske': {
    h1: 'Knocking in the suspension',
    metaTitle: 'Suspension knocking: what knocks, causes and can you drive | Stuk',
    description:
      'What knocks in the suspension: anti-roll bar links, bushes, the steering rack or a broken spring. How to tell the knocks apart by their character and when to go to a garage.',
    intro: [
      'A car’s suspension is several dozen joints, rubber bushes and mounts, and as the car ages play — free movement — in one of them is almost inevitable. A loose part answers every bump with a knock: the suspension compresses and extends while the worn part rattles in its mounting. The good news is that the cheap parts usually give up first — the anti-roll bar links, small rods with joints that wear out before anything else in the suspension.',
      'The character of the sound says a lot about the source before the car ever goes on a lift. Frequent dull knocking on small ripples and expansion joints is the signature of anti-roll bar links. Single thumps over potholes and speed bumps point to the bushes — the rubber joints through which the arms attach to the body — or to tired dampers. A knock that comes straight into the steering wheel and is felt in your palms is play in the steering rack. And a creak like an old bed is not a knock at all but dry rubber in the bushes: the most harmless of the lot.',
    ],
    causes: [
      { name: 'Anti-roll bar links', likelihood: 'Most often — frequent dull knocking on small bumps' },
      { name: 'Control arm bushes or dampers', likelihood: 'Common — single dull thumps over potholes' },
      { name: 'Play in the steering rack', likelihood: 'Rarer — the knock comes into the wheel and is felt in your palms' },
      { name: 'Anti-roll bar bushes, dry bushes (a creak, not a knock)', likelihood: 'Common — especially in frost and damp' },
      { name: 'A broken suspension spring', likelihood: 'Rare — suddenly after hitting a pothole, one corner sits lower' },
    ],
    canRide: [
      'You can drive with most suspension knocks: anti-roll bar links, bushes and mounts do not fail all at once. Still, do not put the check off for months — a worn part passes the impacts on and wears out its neighbours, and more serious things can knock in a similar way to the ear. A sensible window is a check within a week or two, taking big potholes slowly until then.',
      'Two situations deserve more attention. A knock that comes into the steering wheel is the steering — a safety system: have it checked within days, and if the wheel has gone vague around the straight-ahead or the car wanders in its lane, without delay. A clatter that appeared suddenly after hitting a pothole, together with one corner of the body sitting lower, is the classic picture of a broken spring: drive gently to the garage, as the broken coil can shift and damage the tyre.',
    ],
    checks: [
      'Rock the parked car by the wing above each wheel: creaking bushes and mounts often reproduce right there on the spot.',
      'Look for the pattern: knocking on small ripples points to the anti-roll bar links; single potholes point to bushes and dampers.',
      'Work out whether the sound is at the front or the rear and whether it reaches the steering wheel: a knock felt in your palms that quietens when you hold the wheel under slight tension is a sign of play in the steering rack.',
      'Push each corner of the car down and let go: the body should settle back without rocking. If it keeps bouncing, the damper is tired.',
      'Look behind the wheel from below without dismantling anything: a broken coil is often visible to the eye, and you can also see whether one corner of the car sits lower.',
    ],
    appHelp:
      'The Stuk app follows the same forks a mechanic takes at a first inspection: what the sound is like, on which bumps, front or rear, whether it reaches the steering wheel. Recording the sound keeps the details from being lost before the visit, and the report gives likely causes with percentages and a plain traffic light: drive on, show it this week, or check urgently.',
    faq: [
      {
        q: 'Is it dangerous to drive with a knock in the suspension?',
        a: 'Most of the time a knock does not mean an immediate failure: anti-roll bar links and bushes wear out gradually. But play grows over time and finishes off the parts next to it, so a sensible window for a check is a week or two. The exceptions are a knock in the steering wheel and the clatter of a broken spring: those mean a garage within days.',
      },
      {
        q: 'Why does it knock on small bumps while the car takes big potholes quietly?',
        a: 'That is the classic signature of anti-roll bar links: their small joints hammer away exactly on ripples, cobbles and expansion joints, where the suspension works often and through a small travel. On a big pothole that kind of play is not always audible. At the rear, the rear anti-roll bar links and the beam bushes knock in the same way.',
      },
      {
        q: 'Could it be something other than the suspension?',
        a: 'Yes, and it often is. A dull knock at the rear comes from an unsecured jack or spare wheel in the boot, tapping from the front and above from play in the bonnet latch, a rattle from below from the exhaust mountings. A single thud on the first move after a long stand is the brake pads sticking to the discs, and that is harmless.',
      },
    ],
  },

  'gul-podshipnika-stupitsy': {
    h1: 'Wheel bearing hum',
    metaTitle: 'Wheel bearing hum: how to recognise it | Stuk',
    description:
      'What a worn wheel bearing sounds like, how to tell it apart from tyre noise, which wheel is humming and how long you can drive with it.',
    intro: [
      'The wheel bearing is the part the wheel turns on. As it wears, a steady hum appears that grows with speed: many people compare it to an aircraft taking off or the hum of a transformer. It starts barely noticeably at 60–80 km/h, in time it can be heard at any speed and begins to come through as vibration.',
      'The hard part is telling a bearing from tyre noise: they hum in similar ways. There are two reliable everyday tests. The first is the surface: tyre noise changes with the type of tarmac, a bearing hum is the same everywhere. The second is gentle lane changes at speed: if the hum changes in a shallow bend, a bearing is almost certainly to blame — the one on the loaded side.',
    ],
    causes: [
      { name: 'Worn wheel bearing', likelihood: 'Most often, when the hum is steady and ignores the surface' },
      { name: 'Tyre noise (winter, off-road, uneven wear)', likelihood: 'Very common — the bearing’s main lookalike' },
      { name: 'Final drive or crown wheel and pinion (rear- and four-wheel drive)', likelihood: 'Rarer; the tone of that hum changes with the throttle' },
      { name: 'Propshaft centre bearing', likelihood: 'Rare, and only on cars with a propshaft' },
    ],
    canRide: [
      'Early on you can, with reservations. A worn bearing does not break up all at once: it usually takes thousands of kilometres from the first hum to a critical state. But the process only goes one way, and the ending is unpleasant: play in the wheel, a ruined hub seat and, at worst, a hub seizing while you drive.',
      'So the rule is simple: once you notice the hum, show the car to a garage within a week or two and postpone long fast trips until then. If the hum suddenly grew, vibration appeared, the wheel has play or the car pulls to one side — go for a check straight away, and not by motorway.',
    ],
    checks: [
      'Surface test: drive the same stretch on different tarmac. The hum did not change — more likely the bearing; it went quieter on smooth tarmac — more likely the tyres.',
      'Cornering test: on an empty road at 60–80 km/h change lanes gently. The hum faded on a right turn and grew on a left turn — the right side is being loaded, so the right bearing is likely; and the other way round.',
      'Neutral check: get up to speed and coast in neutral. The hum stayed — the source turns with the wheels, not with the engine.',
      'Look at the tread: sawtooth wear and patches of uneven wear make tyres loud and hint at the alignment.',
      'After a drive, carefully bring your hand close to the hubs (without touching the brake disc — it is hot): a noticeably hotter hub on one side is an extra sign.',
    ],
    appHelp:
      'The Stuk app asks the same control questions — about the surface, bends and coasting in neutral — records the hum and assesses its character: the steady broadband noise of tyres and a bearing hum look different in the spectrum. The report gives the probability of each cause, the urgency and a hint about which side to name to the mechanic.',
    faq: [
      {
        q: 'Why does the hum change in bends?',
        a: 'In a bend the weight of the car moves onto the outer wheels. If the hum grows on a left turn, the right side is under load — so it is probably the right bearing humming. On a right turn it is the other way round. Remember this sign and mention it at the garage: it halves the search.',
      },
      {
        q: 'How long can you drive with a humming bearing?',
        a: 'There is no single figure: it usually takes thousands of kilometres from the first symptoms to dangerous play, but the rate of wear is unpredictable. A sensible compromise is to book a check within a week or two and not to plan long fast trips before it.',
      },
      {
        q: 'Can a bearing be mistaken for tyres?',
        a: 'Easily — it is the most common mistake. Two signs tell them apart: tyre noise depends on the surface and does not change in bends, while a bearing hum is the same on any tarmac and reacts to weight transfer in shallow bends.',
      },
    ],
  },

  'stuk-na-nerovnostyah': {
    h1: 'Knocking over bumps',
    metaTitle: 'Knocking over bumps: causes and what to check yourself | Stuk',
    description:
      'Knocking over bumps and potholes: frequent on small ripples, single thumps in holes or a knock in the steering wheel. Which parts are to blame, what to check yourself and whether you can drive.',
    intro: [
      'A knock that appears only over bumps — expansion joints, cobbles, speed bumps — almost always comes from the running gear. Going over a bump the suspension compresses and extends, and if play — free movement — has appeared in one of the joints, the part hits its mounting on every stroke. For cars older than five to seven years this is an ordinary story, and it is usually cheap wear parts to blame rather than major assemblies.',
      'The pattern of the knock narrows the list of suspects. Frequent dull tapping on small ripples at the front is the classic anti-roll bar link; the same pattern at the rear means the rear links or the beam bushes — the rubber bushes through which the beam attaches to the body. Single thumps over potholes point to control arm bushes or tired dampers. A separate case is a knock in time with the wheel turning that appeared after a recent tyre change: it may be loose wheel bolts, and that is the version to check first.',
    ],
    causes: [
      { name: 'Anti-roll bar links', likelihood: 'Most often — frequent knocking at the front over small bumps' },
      { name: 'Rear suspension: rear links, beam bushes', likelihood: 'Common — if the knock is at the rear' },
      { name: 'Control arm bushes or dampers', likelihood: 'Common — single thumps over potholes' },
      { name: 'Play in the steering rack', likelihood: 'Rarer — the knock comes straight into the steering wheel' },
      { name: 'Loose wheel bolts', likelihood: 'Rare — but the first thing to check after a tyre change' },
    ],
    canRide: [
      'With a typical anti-roll bar link or bush knock you can drive: these parts do not fail suddenly, and a week or two before the check changes nothing as long as you take big potholes slowly. The suspension check itself is quick: a mechanic rocks the joints on a lift and finds the play in a few minutes. Dragging it out for months is still a bad idea: a worn joint passes impacts to its neighbours and speeds up their wear.',
      'A rhythmic knock in time with the wheel turning in the first days after a tyre change looks different: that is a reason to stop at the first opportunity and check the bolts on every wheel with the wheel brace. A wheel on loose bolts wears out the holes in the rim and in the worst case can come off while driving. A knock that comes into the steering wheel should not wait either: the steering is a safety system and gets checked within days.',
    ],
    checks: [
      'If the wheels were recently taken off or swapped, check the bolts on every wheel with the wheel brace first, before any other theory.',
      'Note the pattern of the knock: frequent tapping on small ripples and single thumps over potholes are different parts, and that detail narrows the mechanic’s search straight away.',
      'Work out whether the knock is at the front or the rear: drive slowly with the windows down along a wall or fence — the reflected sound is much easier to hear.',
      'Hold the steering wheel under slight tension on a rough road: if the knock felt in your palms quietens, it looks like play in the steering rack, and that is worth mentioning at the garage.',
      'Rule out the simple things: take loose items out of the boot, check that the spare and the jack are secured, press on the closed bonnet — a loose bonnet latch taps much like the suspension.',
    ],
    appHelp:
      'The Stuk app asks the same questions as this page, only step by step: what kind of knock, where you hear it, how it behaves on different bumps. From your answers and the recording it builds a report with likely causes and an urgency traffic light — with it, deciding between a garage tomorrow and a garage whenever is easier.',
    faq: [
      {
        q: 'Why is the knock heard only over bumps and not on a smooth road?',
        a: 'Play in a suspension joint shows up only when the suspension is working: over a bump the part shifts in its mounting and hits. On smooth tarmac the suspension travel is small and the worn joint stays quiet. That is why knocking over bumps is nearly always about the running gear, not the engine.',
      },
      {
        q: 'I had the tyres changed recently and now it knocks. Coincidence?',
        a: 'Probably not. A rhythmic knock or clatter in time with the wheel turning in the first days after the wheels came off is the classic sign of loose bolts. The check takes five minutes: go round every wheel with the wheel brace. After any tyre change it is worth re-torquing the bolts again after 50–100 kilometres.',
      },
      {
        q: 'The anti-roll bar links are knocking. Is that urgent?',
        a: 'The links themselves are not dangerous — they are small rods that wear out first in the suspension, and the car stays controllable with them knocking. But more serious parts can knock in a similar way, so a check within a week or two is needed: on a lift the source is found in minutes.',
      },
    ],
  },

  'tikanie-dvigatelya': {
    h1: 'Ticking engine',
    metaTitle: 'Engine ticking: normal or wear, and why | Stuk',
    description:
      'Where engine ticking comes from: valve clearances, hydraulic lifters, normal injector chatter or the exhaust manifold. How to tell normal operation from engine wear.',
    intro: [
      'A steady, rapid tick is the most ordinary of engine sounds, and it is far from always a fault. Direct-injection petrol engines (TSI, GDI and the like) and diesels always chatter through their injectors and high-pressure fuel pump — that is how they are built. Normal chatter has recognisable marks: it is the same cold and hot, it is louder outside than in the cabin, and it does not change over the years.',
      'What should put you on guard is ticking that grows louder over time and is heard better on a warm engine than it used to be. That is how wide valve clearances show up: the gaps between the parts of the valve train grow with wear, and the valves start working with an impact. Two separate cases: ticking only in the first minutes after a cold start (usually the hydraulic lifters — the parts that use oil pressure to take up the extra clearance) and chatter with the smell of exhaust that is louder outside, which is the signature of a blown exhaust manifold gasket.',
    ],
    causes: [
      { name: 'Normal injector chatter (direct injection, diesel)', likelihood: 'Very common — if the sound is always the same' },
      { name: 'Wide valve clearances', likelihood: 'Common — if the ticking has grown louder over time' },
      { name: 'Hydraulic lifters when cold', likelihood: 'Common — if it only ticks in the first minutes after a start' },
      { name: 'Exhaust manifold gasket or a crack', likelihood: 'If the chatter is louder outside and you smell exhaust' },
      { name: 'Timing chain or its tensioner', likelihood: 'Rarer — a rustle or chirr from the front of the engine' },
    ],
    canRide: [
      'You can drive with ticking almost always: none of its typical causes calls for stopping on the hard shoulder. Normal injector chatter and morning lifter ticking need no repair at all — that is the engine working as designed.',
      'But ticking that grows will not go away on its own. Valves with wide clearances work with an impact and wear faster, so an adjustment or a lifter check is worth planning for the next couple of weeks — you can drive calmly meanwhile. With the exhaust manifold the logic is similar: a week or two of slack, but the gap grows over time and exhaust fumes can be drawn into the cabin through the heater, which is already harmful.',
    ],
    checks: [
      'Compare the engine cold and warm: ticking only in the first minutes after a start is the lifter picture; a sound that is heard better once warm argues for valve clearances.',
      'Judge the trend from memory: ticking that has not changed for years is more likely normal; if it was noticeably quieter six months ago, that is wear, and it will grow.',
      'Listen from outside and from the cabin: normal injector chatter is clearly louder outside; valve ticking is easy to hear from the driver’s seat too.',
      'Check the oil level on the dipstick: with a low level, ticking from the lifters and the valve train grows, and topping up to the mark is sometimes audible straight away.',
      'Sniff at the open bonnet: the smell of exhaust together with rapid chatter points to the exhaust manifold, and that means a garage within a week or two.',
    ],
    appHelp:
      'The Stuk app pins down the main things — whether the ticking has grown louder over time and how it behaves cold and hot — and the recording lets you compare it with typical examples. The report gives likely causes with percentages and a traffic-light conclusion: normal, book a visit this week, or get it checked without delay.',
    faq: [
      {
        q: 'Why do diesels and direct-injection engines always tick?',
        a: 'They deliver fuel at very high pressure, and every injector makes a short click when it fires, with the high-pressure pump adding its own chatter. That is normal operation: the sound is the same in any weather, louder outside than in the cabin, and needs no repair.',
      },
      {
        q: 'What is a valve clearance adjustment?',
        a: 'A small thermal clearance is left between the parts of the valve train; wear makes it grow and the valves start to tick. A mechanic brings the clearances back to spec with shims or screws. On engines with hydraulic lifters, instead of an adjustment the lifters themselves and the oil pressure are checked.',
      },
      {
        q: 'Can ticking go away after an oil change?',
        a: 'Yes, if old oil, the wrong viscosity or a low level is to blame: hydraulic lifters are very sensitive to the state of the oil. But an oil change will not fix worn valve clearances — if the ticking is still there afterwards and keeps growing, an adjustment is needed.',
      },
    ],
  },

  'svist-remnya': {
    h1: 'Belt squeal',
    metaTitle: 'Squealing belt: causes, is it safe to drive and what to do | Stuk',
    description:
      'The auxiliary belt is squealing: wear, weak tension, idler pulleys or the air-conditioning clutch. How to narrow the cause down by circumstance and when the squeal means a garage.',
    intro: [
      'A piercing squeal under the bonnet almost always comes from the auxiliary belt — the belt that runs from the crankshaft to the alternator, the water pump and, on many cars, the air-conditioning compressor and the power steering pump. It squeals in one case only: when it slips on the pulleys instead of gripping them.',
      'The reasons for slipping fall into two groups. The first is the belt itself: the rubber has aged and hardened, the tension has dropped, or oil or coolant has got onto the working surface. The second is the units it drives: a binding idler, a stiff air-conditioning clutch or a water pump with a worn bearing load the belt more than it can transmit. When exactly the squeal appears narrows the field noticeably.',
    ],
    causes: [
      { name: 'A worn or slack belt', likelihood: 'Most often' },
      { name: 'Slipping when cold or in damp weather', likelihood: 'Common — if the squeal goes once warm' },
      { name: 'Tensioner or idler pulley', likelihood: 'Fairly common — a hum or rustle is heard along with the squeal' },
      { name: 'Air-conditioning compressor clutch', likelihood: 'If the squeal coincides with the air conditioning switching on' },
      { name: 'Water pump or the alternator freewheel pulley', likelihood: 'Rarer' },
    ],
    canRide: [
      'If the squeal is short and lives only for the first seconds after a cold start, drive on calmly: that is a reason to have the belt looked at when convenient, not to change your plans for the day.',
      'With a constant squeal, or a squeal under load, you can still drive for now, but book a garage within the week: a slipping belt overheats and wears at a snowballing rate, and if it breaks, the alternator stops and on many cars the water pump with it. Two signals mean pulling over and switching off at once: the battery warning light coming on and a rising temperature gauge — both mean the belt is no longer driving its units.',
    ],
    checks: [
      'Note exactly when it squeals: the first seconds after a start, the moment the air conditioning comes on, when you turn the wheel, or all the time — that is the main clue to the cause.',
      'Switch the air conditioning on with the engine running: a squeal exactly at the moment it engages points to a slipping compressor clutch.',
      'With the engine off, look the belt over: cracks across it, frayed edges and shiny polished grooves are signs of wear.',
      'Check for traces of oil or coolant on the belt and around the pulleys: an oiled belt squeals even when new, and traces of coolant point to the water pump.',
      'Listen for a steady hum or rustle alongside the squeal that changes with engine speed — that is the bearing in one of the pulleys.',
    ],
    appHelp:
      'The Stuk app pins down the character of the sound and the circumstances — squeal or hum, cold or under load, tied to the air conditioning or not — and the recording helps tell a belt squeal from the rustle of a pulley. The report gives likely causes with percentages and a traffic light: safe to drive, shop this week, or pull over.',
    faq: [
      {
        q: 'What happens if the belt breaks on the road?',
        a: 'Charging stops immediately: the alternator halts and the car runs on what is left in the battery — usually tens of minutes. On engines where the belt also drives the water pump, the temperature starts climbing fast and driving on becomes impossible. That is why a squealing belt is better replaced by appointment than after it snaps.',
      },
      {
        q: 'Why does the squeal appear when the air conditioning comes on?',
        a: 'The air-conditioning compressor is the heaviest load on the belt. When it engages, its clutch adds load abruptly, and a worn or slack belt breaks into a slip. If it is exactly the moment of engagement that squeals, the clutch itself is worth checking: its wear makes the same sound.',
      },
      {
        q: 'Can I spray something on the belt to stop the squeal?',
        a: 'Better not. Sprays and home remedies like WD-40 buy a day or two of quiet, but rubber soaked in them slips and ages faster, while the cause — wear or weak tension — stays exactly where it was. Replacing the belt together with the pulley is more reliable, and it is one of the cheaper jobs at a garage.',
      },
    ],
  },

  'gremit-pod-mashinoy': {
    h1: 'Rattling under the car',
    metaTitle: 'Rattling under the car: what is rattling and is it dangerous | Stuk',
    description:
      'Rattling and clattering under the car: exhaust mountings, a heat shield, the underbody guard or the catalytic converter. How to find the source and when it is serious.',
    intro: [
      'A rattle or clatter from under the car sounds alarming, but the source is usually neither the engine nor the suspension — it is bolt-on metal: exhaust rubber mounts, loose bolts on the underbody guard or a heat shield, the thin sheet that protects the floor from the heat of the exhaust pipe. All of it rattles loudly and resonates through the body, which makes it seem worse than it is: sounds like these do not affect how the car drives or runs.',
      'There are decoys, too: what rattles “under the car” is often the boot — the jack, the wheel brace, a badly secured spare — or interior trim, whose sound is hard to place. Only one scenario is genuinely worrying: a ringing rattle closer to the engine together with a loss of power or a changed exhaust smell. That is a broken-up catalytic converter — the ceramic filter for exhaust gases whose fragments rattle inside their own casing — and that theory should not be left to sit.',
    ],
    causes: [
      { name: 'Exhaust mountings or the underbody guard', likelihood: 'Most often — a metallic rattle over bumps' },
      { name: 'Exhaust heat shield', likelihood: 'Common — a ringing rattle at certain engine speeds' },
      { name: 'Jack, spare wheel or luggage in the boot', likelihood: 'Common — a dull clatter behind you, “something rolling about”' },
      { name: 'Interior trim: panels and creaks', likelihood: 'Common — the sound is closer than it seems' },
      { name: 'A broken-up catalytic converter', likelihood: 'Rarer — if power dropped along with the rattle' },
    ],
    canRide: [
      'In most cases yes, and without particular limits: a rattling shield, loose exhaust mounts or guard bolts are a comfort question, not a safety one. The fix usually takes minutes: tighten it or secure it with a clamp. The one thing worth making sure of is that the exhaust is not sagging: a pipe about to drag on the tarmac cannot be ignored, and its mounting gets restored straight away.',
      'If the rattle comes with a loss of power, a changed exhaust smell or the check-engine light, go for a diagnosis within days: fragments of ceramic from a broken-up catalytic converter can be drawn into the engine, and that is an expensive repair. Until the check, avoid high revs.',
    ],
    checks: [
      'Take everything out of the boot, check that the spare and the jack are secured, press the parcel shelf down — and drive the same stretch of road again. The sound is gone, the question is closed.',
      'With the car standing still, raise the revs smoothly: a heat shield rattle usually appears at certain engine speeds and is audible on the spot, with no bumps involved.',
      'Ask a passenger to press suspicious interior panels with a hand while driving: if the sound stops, it is interior creaks, not the underside.',
      'Pay attention to the power and the exhaust smell: if the car accelerates worse or the smell has changed, that is the converter theory, and it means a mechanic within days.',
      'Look under the car without crawling under it: a sagging exhaust, a dangling edge of the underbody guard or a bent shield is often visible right from the wheel.',
    ],
    appHelp:
      'The Stuk app helps tie the rattle to its source: where the sound comes from, whether it follows engine speed or bumps, what is happening to the power. From your answers and the recording it shows likely causes with percentages and an urgency traffic light — handy for telling harmless sheet metal from a converter before you reach the garage.',
    faq: [
      {
        q: 'Is it dangerous to drive if something rattles under the car?',
        a: 'Usually not: loose exhaust mounts, the underbody guard and the heat shield do not affect how the car runs. The exceptions are a sagging exhaust about to touch the road, and a rattle together with a loss of power: in the second case a broken-up catalytic converter is possible, and the check should not be delayed.',
      },
      {
        q: 'What is a heat shield and can I simply take it off?',
        a: 'It is a thin metal sheet between the hot parts of the exhaust and the floor: it protects the body, the wiring and everything above the pipe from the heat. Taking it off is a bad idea — tightening it or securing it with a clamp is the right answer, and at a garage that is a job of a few minutes.',
      },
      {
        q: 'How can I tell that it is the catalytic converter rattling?',
        a: 'A ringing rattle or rustle from under the floor closer to the engine that grows when you blip the throttle, plus a loss of power or a changed exhaust smell. At a garage the theory is confirmed by tapping the converter casing lightly on a cold car: crumbled ceramic rustles inside like pebbles.',
      },
    ],
  },

  'skrezhet-pri-tormozhenii': {
    h1: 'Grinding when braking',
    metaTitle: 'Grinding when braking: pads worn to metal, what to do | Stuk',
    description:
      'Grinding when braking usually means pads worn down to the metal — you do not drive with that. Less often a pebble behind the disc shield is to blame. How to tell them apart and what to do.',
    intro: [
      'Grinding when braking deserves to be taken more seriously than any squeal. Most often it is pads worn down to the metal: the friction material that rubs against the disc is gone, and the steel backing plate is scraping the disc. The stopping distance grows, the disc is ruined with every stop, and the mechanism can seize.',
      'There are less dramatic versions. A bent disc shield, or a pebble caught between the shield and the disc, makes a very similar grinding noise but does no harm to the brakes. And a short scraping in the first stops after a night outside or after rain is only a film of rust, which the pads clean off in a couple of minutes. The trouble is that these scenarios are easy to confuse by ear, so constant grinding calls for an inspection, not guesswork.',
    ],
    causes: [
      { name: 'Pads worn down to the metal', likelihood: 'Most often — if it grinds at every stop' },
      { name: 'A pebble or a bent shield touching the disc', likelihood: 'Common; the sound is similar but harmless to the brakes' },
      { name: 'A sticking caliper', likelihood: 'If the wheel gets hot and the car pulls to one side' },
      { name: 'A film of rust after standing or rain', likelihood: 'If the sound goes away in the first few stops' },
    ],
    canRide: [
      'With metal grinding on metal, ordinary trips have to stop: all that is acceptable is a careful drive to a garage, keeping your distance and braking early and gently. Putting the replacement off costs money too: every kilometre of grinding adds the price of brake discs to the bill, because the steel backing plate literally machines them away.',
      'If the grinding appeared after standing and went away in the first few stops, drive without limits — that is rust. If the sound is more of a scrape, is heard without pressing the pedal, and the wheel is not hot after a drive, a shield or a pebble is likely: you can get where you are going calmly, but have the car looked at in the next day or two — only an inspection reliably separates the harmless case from worn-out pads.',
    ],
    checks: [
      'Look for the pattern: a sound only when you press the brake points to the pads; constant scraping while driving points to the shield, a pebble or a sticking caliper.',
      'Look through the wheel spokes: on many cars the outer pad is visible without dismantling. Friction material thinner than 3–4 mm, or shiny metal instead of it, means replacement immediately.',
      'After a short drive bring your hand near the wheels without touching the brake disc: if one wheel is noticeably hotter than the rest, that looks like a sticking caliper — the part that presses the pads onto the disc.',
      'Watch how the car behaves: pulling to one side while braking or a burning smell from a wheel are signs you must not drive with — only carefully to a garage.',
      'Look at the brake disc through the wheel: deep grooves and a bluish tint to the metal say the grinding has been going on for a while and the discs have already suffered.',
    ],
    appHelp:
      'The Stuk app walks you through the same questions — is the grinding constant, does the wheel get hot, does the sound go away after the first stops — and the recording helps tell grinding from the squeal of a wear indicator. The report gives likely causes and a traffic light: safe to drive, show it this week, or drive only as far as the garage.',
    faq: [
      {
        q: 'How is grinding different from brake squeal?',
        a: 'A squeal is a high-pitched sound while the brakes still work fully: most often it is the wear indicator warning you in advance. Grinding is a coarse, low metal-on-metal noise: the friction material is gone and the steel backing plate is rubbing the disc. A squeal means booking a garage this week; grinding means stopping ordinary trips.',
      },
      {
        q: 'Is replacing only the pads enough if it was already grinding?',
        a: 'It depends on the state of the discs: even a short time on metal leaves grooves. Shallow ones can sometimes be skimmed, deep ones mean new discs. New pads on a grooved disc brake worse and wear out fast, so the decision is made after an inspection.',
      },
      {
        q: 'The grinding comes and goes — is that dangerous too?',
        a: 'Intermittent grinding is often a pebble between the shield and the disc, and it may fall out by itself. Do not count on it: the same wandering sound appears in the early stage of pads wearing through to the metal. An inspection in the next day or two settles the matter.',
      },
    ],
  },

  'stuk-pri-razgone': {
    h1: 'Knocking when accelerating',
    metaTitle: 'Knocking on and off the throttle: causes and what to do | Stuk',
    description:
      'Why it knocks when you press or lift off the throttle: engine mounts, a CV joint, play in the drivetrain or the gearbox. How to tell harmless play from a knock inside the engine.',
    intro: [
      'A knock that appears exactly when you press the throttle or lift off usually comes not from the engine itself but from the chain that carries the drive to the wheels. With age, play — free movement — builds up in its parts: the rubber engine mounts sag and let the engine jerk when the load changes, the inner CV joint wears (the joint on the shaft from the gearbox to the wheel), the propshaft universal joints and the subframe mountings work loose. Every time the drive changes direction, the slack is taken up with an impact — hence a single knock or clunk.',
      'The automatic gearbox is a story of its own: a jolt with a clunk when moving the selector between D and R, or during shifts, usually means old fluid or wear. And an entirely different case is a dull knock from deep inside the engine that speeds up with revs and grows louder under load: that is how the bearings on the crankshaft knock. It is rare, but it is the most serious version, and it must not be missed.',
    ],
    causes: [
      { name: 'Engine mounts or the inner CV joint', likelihood: 'Most often — a single knock on and off the throttle' },
      { name: 'Play in the drivetrain: propshaft joints, subframe mountings', likelihood: 'Common on rear- and four-wheel drive — a clunk under the floor when moving off' },
      { name: 'Automatic gearbox: old fluid or wear', likelihood: 'If the jolt and clunk coincide with shifts' },
      { name: 'Bearing knock from deep in the engine', likelihood: 'Rare — speeds up with revs, louder under load' },
    ],
    canRide: [
      'With most of the causes in the table you can drive: play in mounts, joints or the drivetrain will not immobilise the car suddenly while the knock stays single and quiet. Still, do not put the check off for months: a worn universal joint or a tired CV joint eventually breaks up, and that happens while you are driving. A sensible window for the garage is a week or two; until then, move off and use the throttle more gently.',
      'The exception is a knock from deep inside the engine that speeds up when you blip the throttle and grows under load. With that, ordinary trips have to stop: worn bearings can end in a seized engine. Check the oil level first; after that, a tow truck — or, if the garage is very close, slowly and off the throttle.',
    ],
    checks: [
      'Pin down the moment it appears: a knock exactly on and off the throttle rather than over bumps is about the drive being transmitted, not about the suspension. That detail narrows the mechanic’s search straight away.',
      'Check the engine oil level on the dipstick. With any knock that sounds like the engine this comes first: with a low level, the bearings suffer before anything else.',
      'If it clunks during shifts, check the level and condition of the automatic gearbox fluid: dark fluid that smells burnt is a frequent cause of jolts, and sometimes changing it settles the matter.',
      'Listen to where the sound comes from — under the bonnet, from under the middle of the floor or from the side of a wheel — and whether it repeats when you change gear. These observations are worth writing down for the garage.',
      'Do the gentle test: if a soft press and release of the throttle produces no knock while a sharp one brings it back, that is classic play, and gentle driving is enough until the repair.',
    ],
    appHelp:
      'The Stuk app asks the same follow-up questions — when exactly it knocks, whether the sound changes with revs and gears — and the recording helps tell the clunk of play from a deep engine knock. The report gives likely causes with percentages and a plain conclusion: drive on, plan a garage visit, or stop.',
    faq: [
      {
        q: 'Why does it knock exactly when I press and release the throttle?',
        a: 'When the load changes, the drive reverses direction and all the clearances in the engine mounts, joints and drivetrain are taken up with an impact. While the car cruises evenly the parts are pressed together and the play does not show itself — which is why the knock is heard only when you work the throttle.',
      },
      {
        q: 'How do I know it is the engine itself and that it is serious?',
        a: 'The warning sign is a dull knock from deep in the engine that speeds up with the revs and grows louder under load, uphill for example. That is how crankshaft bearings knock. In that case stop driving, check the oil level and get the car to a garage on a tow truck.',
      },
      {
        q: 'Can an automatic gearbox cause knocking under acceleration?',
        a: 'Yes. A jolt or clunk at the moment of a shift, or when moving the selector between D and R, is a typical sign of old fluid or a worn gearbox. Start by checking the level and condition of the gearbox fluid; until the repair, move the selector only at a complete stop with the brake pressed.',
      },
    ],
  },

  'zvon-pri-razgone': {
    h1: 'Pinging when accelerating',
    metaTitle: 'Pinging under acceleration: detonation or not, what to do | Stuk',
    description:
      'A metallic ping under acceleration is usually detonation caused by fuel. How to test it by changing filling stations, and when the culprit is not the engine but a heat shield or the converter.',
    intro: [
      'A metallic ping under acceleration — the sound drivers call pinking — is usually detonation. Part of the fuel in the cylinders does not burn smoothly but explodes, and the shock wave rings against the walls of the engine. It is heard best under load: uphill, overtaking, accelerating from low revs in a high gear. The most common cause is mundane — petrol with a lower octane rating than the manufacturer recommends, or simply a bad tankful.',
      'The ringing does not have to come from the engine. A loose heat shield — the thin sheet above the exhaust — rattles at certain engine speeds, while crumbled catalytic converter ceramic rustles and tinkles under the floor. The difference is in what it follows: detonation depends on load and disappears when you drive gently, while a shield rings at its own revs even on a stationary car when you blip the throttle.',
    ],
    causes: [
      { name: 'Detonation: fuel with too low an octane rating', likelihood: 'Most often — ringing under load, especially uphill' },
      { name: 'Carbon deposits in the combustion chambers or the knock sensor', likelihood: 'If changing filling stations did not help' },
      { name: 'Exhaust heat shield', likelihood: 'Common — a rattle at certain revs, unrelated to load' },
      { name: 'A broken-up catalytic converter', likelihood: 'Rarer — ringing and rustling under the floor, power fading' },
    ],
    canRide: [
      'With occasional bouts of ringing you can get where you are going, but do not load the engine meanwhile: accelerate gently, take hills in a lower gear, do not pull from low revs in a high gear. The first thing to do is fill up with fuel of at least the recommended octane rating, preferably at a different chain: the ringing often leaves with one tankful.',
      'Constant detonation means hammering the pistons on every acceleration, and over time it destroys the engine: pistons, rings and the head gasket all suffer. If the ringing has not gone after a change of fuel, do not drag out the diagnosis. A rattling shield, by contrast, is a purely acoustic nuisance: drive with it without limits and have the sheet secured at your next garage visit.',
    ],
    checks: [
      'Fill a full tank with fuel of at least the recommended octane rating, at a different station. If the ringing disappears within a tank or two, the fuel was the cause.',
      'Check how it relates to load: ringing that appears uphill, when overtaking and under hard throttle but fades under gentle acceleration is the signature of detonation.',
      'Blip the throttle in neutral on a stationary car: if the ringing or rattle appears at certain revs even without load, a heat shield is more likely.',
      'Check the handbook or the fuel filler flap for the recommended petrol: for many engines 92-octane is no longer suitable even if formally permitted.',
      'Pay attention to the power and to sounds under the floor: rustling and tinkling from below together with weaker acceleration is a reason to check the converter without delay.',
    ],
    appHelp:
      'The Stuk app works through the same questions — when it rings, whether the sound follows load or revs — and the recording lets you tell the ringing chatter of detonation from the rattle of a tin shield. The report gives likely causes with percentages and a conclusion: drive on, plan a garage visit, or better stop.',
    faq: [
      {
        q: 'What does “pinking” mean?',
        a: 'It is the old name for the ringing of detonation; it was once blamed on the gudgeon pins. In fact they are not what rings — the chatter comes from the shock wave of explosive combustion bouncing off the cylinder walls. The name stuck, but the cause is always the same: detonation, not worn piston parts.',
      },
      {
        q: 'Can I drive with detonation?',
        a: 'Briefly and gently: smooth acceleration, a lower gear uphill, no full load and no trailer. Every bout of ringing hammers the pistons, and constant detonation ends in an expensive engine repair. If a change of fuel has not removed the ringing within a tank or two, a diagnosis is needed.',
      },
      {
        q: 'Will a higher octane fuel help?',
        a: 'The main rule is never to fill below what the manufacturer recommends. The octane rating shows how well fuel resists self-ignition, so moving from 92 to 95 on an engine prone to detonation often removes the ringing. If even that does not help, the cause — carbon deposits or the knock sensor — is looked for at a garage.',
      },
    ],
  },

  'gul-pri-povorote': {
    h1: 'Humming when turning',
    metaTitle: 'Humming when turning: wheel bearing or power steering | Stuk',
    description:
      'Where humming in a turn comes from: a worn wheel bearing, a whining power steering pump or tyre noise. How to work out the side and whether it is dangerous.',
    intro: [
      'Humming in a turn is a symptom where two scenarios must be separated at once: a hum at speed that grows in one direction and fades in the other, and a whine that appears when you turn the wheel while stationary or parking. They sound similar, but the sources are completely different: in the first case it is the wheel, in the second the power steering.',
      'A hum at speed that depends on the direction of the turn is the classic signature of a wheel bearing — the bearing the wheel turns on. In a bend the weight of the car moves onto the outer wheels, and a loaded worn bearing hums louder. A whine when turning the wheel at low speed usually comes from the power steering pump, as a rule because the fluid level has dropped. And on cars with electric power steering, a light buzz as you turn the wheel is normal rather than a fault.',
    ],
    causes: [
      { name: 'Wheel bearing', likelihood: 'Most often — if the hum is at speed and changes in bends' },
      { name: 'Power steering pump or low fluid level', likelihood: 'Common — if it whines when turning the wheel while stationary' },
      { name: 'Tyre noise', likelihood: 'Common; the hum follows the road surface, not the turn' },
      { name: 'Normal buzz of electric power steering', likelihood: 'Normal for cars without a steering fluid reservoir' },
      { name: 'A worn CV joint', likelihood: 'Rarer; usually adds clicking on full lock' },
    ],
    canRide: [
      'You can drive with a humming wheel bearing, but it is a short-term loan: do not put the check off beyond a week, and postpone long fast trips until after it. A bearing breaking up gives the wheel play and in a neglected case can seize. If the hum suddenly grew or vibration joined it — straight to a garage.',
      'With a whining power steering pump, the first thing to check is the fluid level in the reservoir: topping up often closes the question. You can drive, but do not hold the wheel on full lock for more than a couple of seconds — in that position the pump works at maximum pressure. If the whine remains after topping up, or the fluid drops again, there is a leak — a garage within the week.',
    ],
    checks: [
      'Note which direction of turn makes the hum louder. Louder turning left means the right side is loaded, so the right bearing is more likely, and the other way round. That detail noticeably narrows the search at the garage.',
      'Check the sound while stationary: if the whine appears when you turn the wheel in a car park, the wheels have nothing to do with it — the source is the power steering.',
      'Look under the bonnet for a steering fluid reservoir. There is one — check the level and top up to the mark if needed; there is none — the steering is electric, and a quiet steady buzz is normal for it.',
      'Judge how it depends on the road: a hum that is quieter on fresh tarmac and louder on coarse surfaces usually comes from the tyres, not the bearing.',
      'Look at the tread: sawtooth wear (steps on the edges) or patchy wear makes tyres hum and hints at wrong alignment or tired dampers.',
    ],
    appHelp:
      'The Stuk app asks the same questions a mechanic asks when taking the car in: where the hum is heard, whether it changes in bends, whether it is tied to turning the wheel while stationary. The recording helps compare the hum with typical examples, and the report gives likely causes and a plain recommendation: drive on calmly, book a visit this week, or check without delay.',
    faq: [
      {
        q: 'Why does the hum grow in only one direction of turn?',
        a: 'In a bend the weight of the car moves onto the outer wheels. If, say, the right-hand wheel bearing is worn, it hums louder under load — that is, when turning left. This property tells you which side to check first before you even reach the garage.',
      },
      {
        q: 'Can I top up the power steering with any fluid?',
        a: 'No. The type of fluid is given in the car’s handbook and often right on the reservoir cap. A one-off top-up with the correct fluid is safe, but if the level keeps dropping there is a leak somewhere — it has to be found and fixed at a garage, and topping up will not settle it.',
      },
      {
        q: 'There is no steering fluid reservoir under the bonnet, but it hums when turning. What is that?',
        a: 'Most likely the power steering is electric: its motor buzzes quietly as you turn the wheel, and that is normal operation. Other signs should put you on guard: the steering has become heavy or goes heavy in jerks, there is a crunch, or the steering warning light is on. Those mean a garage within days.',
      },
    ],
  },

  'shchelchki-pri-povorote-rulya': {
    h1: 'Clicking when steering',
    metaTitle: 'Clicking when you turn the wheel: CV joint or top mount | Stuk',
    description:
      'Why it clicks when you turn the wheel: the outer CV joint, the strut top mount bearing or the steering column joint. How to tell them apart by sound and what to check without dismantling.',
    intro: [
      'Clicking when you turn the wheel is sorted out by one simple question: is the car moving at that moment or standing still? Crackling and clicking while driving on lock is the signature of the outer CV joint, the joint through which rotation reaches a wheel that also steers. The more lock and the sharper the start, the clearer the crackle. It usually begins with a torn boot — the rubber cover that keeps dirt out of the joint.',
      'If the clicking is heard while turning the wheel on a stationary car, the CV joint is usually innocent. A crunch from above, from inside the wheel arch, comes from the strut top mount bearing — the part on which the top of the strut turns together with the wheel. Clicks in the steering wheel itself, down by the driver’s feet, are the steering column joint, the small universal joint between the wheel and the rack. None of these means abandoning the car where it stands, but none should be dragged out for months either.',
    ],
    causes: [
      { name: 'Outer CV joint', likelihood: 'Most often — if it crackles while driving on lock' },
      { name: 'Strut top mount bearing', likelihood: 'Common — if it crunches while stationary, from above the arch' },
      { name: 'Steering column joint', likelihood: 'If the clicks are heard and felt in the steering wheel itself' },
      { name: 'Track rod ends or the rack', likelihood: 'Rarer; usually a knock rather than clicks' },
      { name: 'Inner CV joint, anti-roll bar links', likelihood: 'Rarer; checked in the same inspection' },
    ],
    canRide: [
      'You can drive with a crackling CV joint, but do not drag the replacement out beyond a week or two: at worst a worn joint seizes, and that is no longer a sound but an immobilised car. Until the repair, a gentle routine helps — do not pull away hard with the wheel on full lock.',
      'The top mount bearing and the steering column joint cause more discomfort than immediate danger, but the steering is a safety system, so get it checked within days: on a lift it takes a few minutes. Reasons to hurry: the wheel has gone vague around the straight-ahead, the car wanders in its lane, or the clicking has suddenly become far more frequent.',
    ],
    checks: [
      'Separate the scenarios in an empty car park: does the crackle appear while driving in a circle on lock, or are the clicks heard when turning the wheel with the car standing still?',
      'Look at the CV joint boots — the rubber concertina covers on the inner side of each front wheel. A tear with grease flung around it is an all but confirmed diagnosis.',
      'Ask someone to turn the wheel with the engine off while you put a palm on the strut top under the bonnet: the clicks of a worn mount can be felt by hand.',
      'Rock the steering wheel left and right with the engine off and listen down by your feet: a distinct click in the column gives away the column joint.',
      'Remember which wheel the crackle comes from while driving and which direction of turn makes it louder — these details noticeably narrow the search at the garage.',
    ],
    appHelp:
      'In the Stuk app these forks are gathered into a short tree of questions: is the car moving or standing, where the sound comes from, what state the boots are in. You can record the crackle on your phone and compare it with examples. The report gives likely causes with an estimate and a recommendation on timing: no panic, but no clicks forgotten for a month either.',
    faq: [
      {
        q: 'What is a CV joint and why does it click?',
        a: 'A CV joint is a constant-velocity joint, the part that passes rotation to a wheel that also steers. When dirt gets in through a torn boot, the balls and tracks of the joint wear, and under load on lock it starts to crackle clearly.',
      },
      {
        q: 'How long can you drive with a clicking CV joint?',
        a: 'There is no exact life: for some it lasts months, for others it finishes itself off in a couple of weeks. A sensible guide is not to delay the replacement beyond a week or two, and until the repair not to pull away hard on lock: that keeps the load on the joint at a minimum.',
      },
      {
        q: 'Why does it crunch when turning the wheel on a stationary car?',
        a: 'With the car standing still the wheel is not rotating and the CV joint is not working. A crunch on the spot usually comes from the strut top mount bearing — the sound comes from above, from inside the arch — or from the steering column joint if it clicks in the wheel itself. Both are checked at a garage in a few minutes.',
      },
    ],
  },

  'stuk-v-dvigatele-na-holodnuyu': {
    h1: 'Engine knock when cold',
    metaTitle: 'Engine knocking when cold: causes and what to do | Stuk',
    description:
      'Why an engine knocks when cold and goes quiet once warm: hydraulic lifters, the pistons, the timing chain. When it is normal and when it is time for a garage.',
    intro: [
      'A knock heard only in the first minutes after a cold start that fades as the engine warms is one of the most common complaints on cars with mileage. The good news: the most widespread cause here is also the most harmless. Rapid ticking from the top of the engine usually comes from the hydraulic lifters — small parts that use oil pressure to take up the extra clearance in the valve train. While the engine is cold the oil is thick and does not reach them at once, so they chatter for a minute or two. Once warm, they go quiet.',
      'The character of the sound says a lot. A dull knock from deep in the engine more often means piston wear: a cold piston has slightly more freedom in its cylinder and taps until the heat expands it. A rustle or clatter from the front is the signature of a stretched timing chain — the chain inside the engine that makes the valves open on time — or of its weakened tensioner. And chatter that is louder outside than in the cabin, with a smell of exhaust under the bonnet, is a sign of a blown exhaust manifold gasket: gases escape through the gap until the metal expands and closes it.',
    ],
    causes: [
      { name: 'Hydraulic lifters: thick cold oil', likelihood: 'Most often — if it ticks from above and quietens within a couple of minutes' },
      { name: 'Piston wear', likelihood: 'Common at high mileage — a dull knock from deep inside' },
      { name: 'Timing chain or its tensioner', likelihood: 'Common — if there is a rustle or clatter from the front' },
      { name: 'Exhaust manifold gasket or a crack', likelihood: 'If the chatter is louder outside and you smell exhaust' },
      { name: 'A slipping auxiliary belt', likelihood: 'If it is a squeal or whistle rather than a knock' },
    ],
    canRide: [
      'With lifter ticking that goes away completely once warm you can drive without restrictions — that is ordinary life for an engine with mileage. The same goes for a belt squeal in the first seconds after a start: unpleasant, but not dangerous. In both cases it is enough to check the level and age of the oil and to show the car to a mechanic at the next scheduled visit.',
      'A dull piston knock is a matter for observation: you can drive, but keep an eye on oil consumption and tell the mechanic about the sound at your next visit. A timing chain rustle must not be dragged out: get it checked within a week or two, because a chain that jumps means an expensive engine repair — and until then, no hard starts when cold. And a general rule: if the knock has stopped going away with warmth, or is heard under load, the diagnosis can no longer wait.',
    ],
    checks: [
      'Time how long the sound lasts: a minute or two and then silence is typical of hydraulic lifters; the longer the knock lives, the more an inspection is needed.',
      'Check the oil level on the dipstick with the engine cold and recall when it was changed: a low level and old oil amplify every cold knock.',
      'Identify the character of the sound: rapid ticking from above, a dull knock from deep inside or a rustle from the front of the engine are three different stories with different urgency.',
      'Open the bonnet with the cold engine running and sniff: a smell of exhaust together with chatter points to the exhaust manifold.',
      'Switch a warm engine off for ten minutes and start it again: a genuine cold knock does not come back after such a short stop.',
    ],
    appHelp:
      'The Stuk app follows the same forks — is it ticking, a dull knock or a rustle, and how quickly the sound goes — and a recording from your phone captures the character of a sound that is hard to put into words. The report gives likely causes with percentages and a plain conclusion: drive on calmly, book a visit this week, or do not delay the garage.',
    faq: [
      {
        q: 'The knock goes away once warm — can I ignore it?',
        a: 'Usually yes: lifter ticking when cold is an ordinary thing and needs no repair. But it is worth watching: if the sound now lasts longer than a couple of minutes, stays on a warm engine or appears under load, that is already a reason for a check.',
      },
      {
        q: 'Do anti-knock additives help?',
        a: 'Do not pour them in: they do not remove wear, they mask the symptom, so the problem gets noticed later. What really helps is different — fresh oil of the right viscosity, a correct level and, if the knock stays, an adjustment or repair by a mechanic.',
      },
      {
        q: 'Why is the cold knock louder in winter?',
        a: 'In frost the oil is thicker and takes longer to reach the top of the engine, so the lifters and the valve train chatter more noticeably, and the clearances of cold parts are slightly larger. If everything goes quiet once warm, this is the same picture as in summer, only stretched out in time.',
      },
    ],
  },

  'svist-pri-zapuske': {
    h1: 'Squeal on startup',
    metaTitle: 'Squealing when the engine starts: causes and what to do | Stuk',
    description:
      'Why the engine squeals on startup: a slipping auxiliary belt, idler pulleys or the water pump. When the squeal is harmless and when it is time to book a garage.',
    intro: [
      'A squeal or whistle in the first seconds after the engine catches almost always comes from the auxiliary belt — the rubber belt that drives the alternator, the water pump and the air-conditioning compressor. When cold or in damp weather the belt slips on the pulleys and squeals, and a few seconds later it warms up, dries out and goes quiet.',
      'That scenario is not dangerous right now, but it should not be treated as normal either: a fresh, properly tensioned belt does not squeal even in frost. A regular morning squeal is a sign that the belt has aged, the tension has dropped or one of the pulleys it runs over is beginning to wear. A separate story is the sound of the start itself: grinding or whirring while the starter turns the engine. That is not the belt but the starter or the flywheel ring gear, and those should not be dragged out.',
    ],
    causes: [
      { name: 'Auxiliary belt slipping when cold', likelihood: 'Most often — if the squeal goes within the first seconds' },
      { name: 'A worn belt or slack tension', likelihood: 'Common — if the squeal stays on a warm engine too' },
      { name: 'Tensioner or idler pulley bearing', likelihood: 'Fairly common — a rustle or hum joins the squeal' },
      { name: 'Water pump — if there are coolant traces near the belt', likelihood: 'Rarer' },
      { name: 'Grinding while the starter turns: the starter drive or the flywheel ring gear', likelihood: 'A separate case — the sound comes before the engine fires' },
    ],
    canRide: [
      'With a squeal that lives a few seconds after a cold start and then disappears completely you can drive: there is no direct threat. But it is worth having the belt looked at when convenient — the inspection takes a couple of minutes, and replacing the belt with its pulley is one of the cheaper jobs.',
      'If the squeal has stopped going away with warmth, appears when the air conditioning comes on, or with every start it lasts longer and louder, book a garage within the week: a worn belt can snap, and without it the alternator stops, as does the water pump on many engines. If the battery light comes on or the temperature needle starts climbing — pull over and switch off.',
    ],
    checks: [
      'Time the squeal: a few seconds after the start is slipping when cold; a sound that stays once warm is wear in the belt or the pulleys.',
      'Look for a link with the weather: squealing only after rain, a wash or in frost points to slipping rather than to a specific part failing.',
      'Switch on the air conditioning or the heated screen with the engine running: if the squeal appears or grows, the belt is slipping under load.',
      'With the engine off, look the belt over with a torch: cracks across it, frayed edges and shiny polished sides are signs of wear.',
      'Check for drips or whitish coolant traces near the pulleys: they point to the water pump, and then the garage visit is better not postponed.',
    ],
    appHelp:
      'The Stuk app asks the same questions a mechanic asks when taking the car in: when the squeal appears, whether it goes once warm, what you hear while the starter is turning. The recording helps tell a belt squeal from starter grinding, and the report gives likely causes with percentages and a plain conclusion: safe to drive, shop this week, or pull over.',
    faq: [
      {
        q: 'Why does the engine squeal only when cold and in damp weather?',
        a: 'Cold, wet belt rubber grips the pulleys less well, so in the first seconds after a start it slips and squeals. As things warm up the grip returns and the sound goes. A new belt with a healthy tensioner copes with these conditions too, so a regular morning squeal is a reason for an inspection.',
      },
      {
        q: 'The squeal now appears on a warm engine too. Is that serious?',
        a: 'It is a sign that wear has reached the stage where the belt slips in ordinary conditions. You can still drive, but book a garage within the week: a snapped belt leaves you without an alternator and on many cars without a water pump, and the trip ends on a tow truck.',
      },
      {
        q: 'How is a squeal after starting different from grinding while starting?',
        a: 'Squealing and whistling appear after the engine has already fired, and the belt is usually to blame. Metallic grinding is heard earlier — in the seconds while the starter is turning the engine — and points to poor engagement between the starter pinion and the flywheel ring gear. Different parts, different repair.',
      },
    ],
  },

  'vibratsiya-na-holostyh': {
    h1: 'Vibration at idle',
    metaTitle: 'Vibration at idle: why the car shakes and what to do | Stuk',
    description:
      'Why a car shakes at idle: engine mounts, misfires, an air leak or a dirty throttle body. What to check and whether you can drive.',
    intro: [
      'Every car trembles a little at idle, a diesel especially. This is about something else — a shake you feel in the steering wheel, the seat and the rear-view mirror, one that was not there before. Its most common cause is the engine mounts: the rubber blocks that hold the engine in the body and damp its movement. Over the years the rubber hardens and cracks, and the vibration the mounts used to absorb goes into the body.',
      'The second group of causes is the engine itself running unevenly. Misfires (when one cylinder keeps failing to fire — usually because of the spark plugs or coils), unmetered air leaking through a cracked hose or an intake gasket, a dirty throttle body or injectors all make the idle unsteady. Telling these apart from the mounts is not hard: with them the needle on the rev counter trembles or wanders and the check-engine light often comes on, while with worn mounts the engine runs smoothly — it is the body that shakes.',
    ],
    causes: [
      { name: 'Engine mounts', likelihood: 'Most often — especially on cars older than 8–10 years' },
      { name: 'Misfires: spark plugs, coils', likelihood: 'Common — if the revs tremble and the check light is on' },
      { name: 'An air leak through a hose or intake gasket', likelihood: 'Common — if the revs wander, sometimes with a hiss' },
      { name: 'A dirty throttle body or injectors', likelihood: 'Common past a hundred thousand kilometres' },
    ],
    canRide: [
      'In most cases you can drive: vibration at idle is not the symptom that leaves a car on the hard shoulder. With worn mounts you have a week or two to calmly book a garage; dragging it out for months is unwise — broken mounts add knocks when moving off and shifting and speed up wear on the parts around them.',
      'A separate story is an engine that is clearly misfiring: shaking in jerks, the check light flashing or lit, power down. You can drive with that too, but gently and not far: unburnt fuel from misfires finishes burning in the exhaust and overheats the catalytic converter, and replacing it is expensive. In that case the diagnosis is needed within days, not whenever.',
    ],
    checks: [
      'The mount test: engage a gear (D on an automatic) and hold the brake. Vibration from worn mounts usually grows noticeably in this position.',
      'Watch the rev counter: the needle steady while the car shakes argues for the mounts; a needle that trembles or wanders means the engine is running unevenly.',
      'Switch the air conditioning on and see whether the shake changes: under the extra load weak mounts and an uneven idle show up more clearly, and that detail is useful to the mechanic.',
      'Without removing anything, look over the thin rubber hoses under the bonnet: cracks and hoses that have slipped off are a frequent place for air leaks.',
      'Recall when the spark plugs were changed: mileage well past the interval makes them the first suspect for misfires. If the check light is on, start with a computer diagnosis: the fault codes narrow the search.',
    ],
    appHelp:
      'The Stuk app asks the same questions — does the shake grow with a gear engaged, do the revs hold steady, is the check light on — and turns the answers into likely causes with percentages. The report gives a plain conclusion: drive on calmly, book a visit this week, or show the car to a mechanic within days.',
    faq: [
      {
        q: 'Why does it shake only at idle while the car drives smoothly?',
        a: 'At idle the revs are at their lowest and the engine rocks on its mounts at a frequency the body passes readily into the cabin. As the revs rise the movements become smaller and are felt less. That is why worn mounts give themselves away at the traffic lights rather than on the motorway.',
      },
      {
        q: 'What is a misfire?',
        a: 'It is when the mixture in one of the cylinders fails to ignite from time to time — most often because of worn spark plugs or a faulty ignition coil. At that moment the engine loses part of its power and shudders, while the unburnt fuel finishes burning in the exhaust and overheats the catalytic converter.',
      },
      {
        q: 'Will cleaning the throttle body help?',
        a: 'It will if that is the cause: deposits get in the way of metering air accurately at idle, and the revs become uneven. But cleaning is not a universal cure: with worn mounts or misfires the vibration will still be there afterwards.',
      },
    ],
  },

  'hlopki-v-glushitele': {
    h1: 'Backfiring from the exhaust',
    metaTitle: 'Backfiring from the exhaust: causes and what to do | Stuk',
    description:
      'Why the exhaust bangs: misfires, a blown exhaust, the fuel mixture or LPG settings. What backfiring does to the catalytic converter and when to go to a garage.',
    intro: [
      'Bangs or pops from the exhaust mean that part of the fuel is burning not in the cylinders but already in the exhaust system. Misfires are usually to blame: a worn spark plug or a faulty coil fails to light the mixture, the unburnt petrol goes into the hot exhaust and flares up there with a characteristic bang.',
      'The second group of causes is the exhaust system itself: a blown silencer, pipe or gasket adds a roar to the banging that grows when you press the throttle. The mixture can also be wrong because of sensors or injectors, and on cars with LPG, banging on gas is a typical sign of settings gone astray. All these scenarios share one denominator: unburnt fuel finishes burning in the catalytic converter — the exhaust part that burns off harmful gases — overheats it and gradually destroys it, and replacing a converter is expensive.',
    ],
    causes: [
      { name: 'Misfires: spark plugs or coils', likelihood: 'Most often' },
      { name: 'A blown silencer, pipe or exhaust gasket', likelihood: 'Common — the bangs come with a roar' },
      { name: 'Wrong mixture: sensors or injectors', likelihood: 'Fairly common' },
      { name: 'LPG settings gone astray', likelihood: 'If the banging happens only on gas' },
      { name: 'A roar under acceleration without power: the clutch is slipping', likelihood: 'A separate case that sounds similar' },
    ],
    canRide: [
      'A single bang when lifting off is no reason to stop: you can get home or to a garage. With regular banging you can also drive, but plan the diagnosis for the next few days rather than weeks: every bang is a dose of unburnt fuel finishing its burn in the converter, and the bill for a delayed repair grows from cheap spark plugs to the price of a converter.',
      'A special case is a flashing check-engine light: that is the system warning about active misfires, dangerous to the converter right now. With a flashing light, drive only gently and not far, without load, and go to a garage without delay. If you can smell exhaust in the cabin, drive with a window ajar until the repair and do not warm the car up in a closed garage: carbon monoxide is dangerous.',
    ],
    checks: [
      'Note when it bangs: under load while accelerating, when lifting off, or at idle — that detail narrows the mechanic’s search straight away.',
      'Look at the check-engine light: steadily lit means a diagnosis within days; flashing means misfires are happening right now and the visit cannot be postponed.',
      'Assess how the engine runs: rough running, shaking at idle and lost power together with banging point to plugs, coils or the mixture.',
      'Listen to the exhaust: a roar that grows when you press the throttle while power stays normal is a sign of a hole in the silencer or pipe, not of ignition trouble.',
      'On a car with LPG, compare running on gas and on petrol: banging only on gas is a question for whoever set the gas system up.',
    ],
    appHelp:
      'The Stuk app pins down the circumstances — bangs or roar, on gas or on petrol, with or without a loss of power — and helps separate ignition trouble, a hole in the exhaust and a slipping clutch, which sound alike. The report gives likely causes with percentages and a plain recommendation on how urgently a garage is needed.',
    faq: [
      {
        q: 'Why does the exhaust bang if the problem is in the engine?',
        a: 'When a plug or coil fails to light the mixture in a cylinder, the unburnt petrol is pushed out into the exhaust system. There it meets red-hot parts and finishes burning with a flash — and that is the bang you hear from the exhaust. The source, though, is under the bonnet, not in the silencer.',
      },
      {
        q: 'Why is backfiring dangerous for the catalytic converter?',
        a: 'A converter is designed to burn off the remains of exhaust gases, not doses of raw fuel. Petrol finishing its burn inside raises the temperature above what it was designed for, and the ceramic honeycomb melts or crumbles. The result is lost power, a rattle from under the floor and a converter replacement, one of the most expensive exhaust jobs.',
      },
      {
        q: 'My LPG car bangs while running on gas. Is that dangerous?',
        a: 'Yes — for gas equipment backfiring is more dangerous than for a petrol engine: a flashback in the intake can damage its plastic parts and sensors. The usual cause is settings gone astray or worn spark plugs. It makes sense to switch to petrol and book a visit to an LPG specialist.',
      },
    ],
  },
};

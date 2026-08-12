import { HUBS, type Hub } from './hubs';

/**
 * Английские хабы: те же шесть разделов, что и в русской версии, с
 * собственными слагами и текстами. Классификация статей по разделам общая —
 * она живёт в hubs.ts и работает по русскому слагу статьи.
 *
 * Цены и казахстанская привязка из вводных текстов убраны: английская версия
 * рассчитана на читателя из любой страны, и ориентиры «в тенге» ему бесполезны.
 */
export interface HubEn {
  /** Слаг английской страницы: /en/parts/<slug>/ */
  slug: string;
  h1: string;
  short: string;
  metaTitle: string;
  description: string;
  intro: string[];
}

export const HUBS_EN: Record<string, HubEn> = {
  dvigatel: {
    slug: 'engine-noises',
    h1: 'Engine noises and knocking',
    short: 'Engine',
    metaTitle: 'Engine noises and knocking: full guide | Stuk',
    description:
      'Every engine sound in one place: knocking, ticking, rattling, pinging, squealing. How to tell the harmless from the dangerous and what you can check yourself.',
    intro: [
      'The engine is the most talkative part of a car and the most ambiguous one: the word “knock” covers both the harmless clatter of injectors and worn crankshaft bearings, where every kilometre brings a rebuild closer. What separates them is not loudness but where the sound comes from, when it appears and how it reacts to the throttle and to warming up.',
      'This section collects a guide for each type of sound: from valve ticking and timing-chain rustle to pinging and the knock of rod bearings. Each one comes with what it sounds like, safe checks you can do without taking anything apart, and an honest verdict on how urgent it is.',
      'If you are not sure which sound is yours, start with the interactive question tree on the symptom pages below: a few questions narrow the field faster than reading every article in a row.',
    ],
  },
  podveska: {
    slug: 'suspension-noises',
    h1: 'Suspension knocks and creaks',
    short: 'Suspension and steering',
    metaTitle: 'Suspension knocks and creaks: full guide | Stuk',
    description:
      'Knocking over bumps, creaking on rough roads, play in the steering: how to locate the source in the suspension and steering and what you can check yourself.',
    intro: [
      'Suspension wears out gradually and almost always warns you with a noise long before it becomes dangerous. The trouble is that a knock over bumps sounds the same whether it comes from cheap anti-roll bar links or from a ball joint, and a ball joint that fails at speed is a safety matter.',
      'The section is organised by the character of the sound and the conditions it appears in: frequent knocking on small ripples, single thumps in potholes, creaking when the car rocks, a knock that reaches the steering wheel. Alongside them are the signs of wear for each part and checks you can do in a car park without a lift.',
      'A practical order: pin down the character of the sound on the symptom page with the diagnosis tree, then open the article about the specific part — the signs, the risks and what the repair involves are there.',
    ],
  },
  tormoza: {
    slug: 'brake-noises',
    h1: 'Brake squeal and grinding',
    short: 'Brakes and wheels',
    metaTitle: 'Brake squeal and grinding: full guide | Stuk',
    description:
      'Squealing, screeching, grinding and judder when braking: what each sound means, when you must stop driving and how to check the pads and caliper yourself.',
    intro: [
      'Brakes are the one system where the sound is meant literally: most of the signals here were designed in by the manufacturer. The metal wear indicator starts squealing on purpose when the pads are near their limit, and metal-on-metal grinding means the limit has already passed.',
      'At the same time the most common cause of squealing is harmless: the film of rust that forms on the discs overnight and is scraped off within the first few stops. This section covers how to tell the normal from the warning, and the warning from the point where you stop driving as usual.',
      'Wheel and hub noises belong here too: bearing hum, vibration at speed, clicking and steering-wheel judder — all of them are regularly mistaken for brake problems.',
    ],
  },
  transmissiya: {
    slug: 'transmission-noises',
    h1: 'Gearbox, clutch and driveshaft noises',
    short: 'Transmission',
    metaTitle: 'Gearbox, clutch and driveshaft noises | Stuk',
    description:
      'Gearbox whine, crunching gears, CV joint clicking, automatic transmission jolts: how to locate the source, how urgent it is and what the repair involves.',
    intro: [
      'A transmission makes noise differently from an engine: its sounds follow the gear, the speed and the clutch pedal rather than engine revs. That is why simple tests — press the clutch, coast in neutral, change gear — often point to the source better than listening alone.',
      'The section covers both manuals and automatics: shaft bearing whine, crunching synchros, the signs of a dying clutch and release bearing, jolts in an automatic, clicking CV joints, propshaft universal joints and differential whine.',
      'It is worth remembering the price of delay here: a worn CV joint or release bearing is not expensive on its own, but when either lets go it takes neighbouring parts with it and ends on a tow truck.',
    ],
  },
  vyhlop: {
    slug: 'exhaust-noises',
    h1: 'Exhaust system noises',
    short: 'Exhaust',
    metaTitle: 'Exhaust noises: roar, banging, rattle | Stuk',
    description:
      'Roaring, banging from the muffler, rattling under the floor and a ringing heat shield: what exhaust sounds mean, why they matter and what the repair involves.',
    intro: [
      'The exhaust makes the most recognisable sounds of all: the roar of a burnt-through muffler, banging when you lift off the throttle, a metallic rattle at particular engine speeds. Most of them do not affect how the car drives, but they should not be ignored either — behind a rattle that sounds harmless there is sometimes a broken catalytic converter, and its fragments can be drawn into the engine.',
      'The section covers the whole path: from a penny heat shield and a torn flexible section to a burnt manifold and a blocked catalytic converter, including what each fault sounds like and the risk of exhaust getting into the cabin.',
    ],
  },
  salon: {
    slug: 'interior-noises',
    h1: 'Interior creaks and rattles',
    short: 'Interior and body',
    metaTitle: 'Interior creaks and rattles: finding the source | Stuk',
    description:
      'Interior rattles, a creaking dashboard, knocking doors and rattling over bumps: how to find the source yourself and tell it apart from a chassis fault.',
    intro: [
      'Interior noises are the most irritating and usually the cheapest to fix: more often it is a loose clip, an unsecured object in the boot or a dry seal rather than a failure. The main thing is being able to tell them from a suspension knock, so that squeaking plastic does not turn into a bill for chassis diagnostics.',
      'The section covers simple ways to pin the sound down: press the trim panel with your hand while driving, empty the boot, check the body for flex when a wheel climbs a kerb. And an honest marker for when the noise really does come from below and it is time to see a mechanic.',
    ],
  },
};

/** Английский хаб по русскому слагу раздела. */
export function hubEn(hub: Hub): HubEn {
  const en = HUBS_EN[hub.slug];
  if (!en) throw new Error(`Нет английского хаба для раздела «${hub.slug}»`);
  return en;
}

/** Все разделы в английском порядке — тот же, что и в русском. */
export const HUBS_EN_LIST = HUBS.map((h) => ({ ru: h, en: hubEn(h) }));

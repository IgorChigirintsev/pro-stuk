import type { Dict } from './types';

export const en: Dict = {
  brand: 'Pro-Stuk',
  nav: {
    symptoms: 'Symptoms',
    how: 'How it works',
    articles: 'Articles',
    analytics: 'Analytics',
    lang: 'Language',
  },
  footer: {
    disclaimer:
      'Pro-Stuk gives a probability estimate from your answers and the sound, not a diagnosis. ' +
      'The final call on any repair belongs to a mechanic who has looked at the car.',
    how: 'How it works',
    privacy: 'Privacy policy',
    ruArticles: 'Articles (in Russian)',
    ruOnly: 'Symptom guides and articles (in Russian)',
  },
  home: {
    title: 'Pro-Stuk — diagnose your car by its sound',
    description:
      'Record the noise and find out what your car is doing. A short questionnaire, ' +
      'sound analysis and a report: likely causes with percentages, an urgency traffic ' +
      'light and what to say at the garage.',
    schemaDescription:
      'Car fault diagnosis from symptoms and sound: a questionnaire, a sound recording ' +
      'and a report with likely causes.',
    h1: 'Record the noise — find out what your car is doing',
    sub:
      'A short questionnaire and a 15–30 second recording. In return: likely causes with ' +
      'percentages, an urgency traffic light and the right words for the garage.',
    cta: 'Get the app',
    ctaNote: 'Android · free for now',
    howH2: 'How it works',
    steps: [
      {
        title: '1. Questions',
        text: 'When you hear the noise and what it sounds like — the question tree narrows the cause down.',
      },
      {
        title: '2. Sound',
        text: 'A 15–30 second recording: the spectrum, the rhythm of the knocks and engine speed are worked out on the server.',
      },
      {
        title: '3. Report',
        text: 'Causes with percentages, an urgency traffic light and what to say at the garage.',
      },
    ],
    faqH2: 'Common questions',
    faq: [
      {
        q: 'Is this an exact diagnosis?',
        a: 'No. Pro-Stuk gives a probability estimate: a list of possible causes with percentages and how urgent it is. The exact diagnosis comes from a mechanic after an inspection — the report just means you arrive prepared.',
      },
      {
        q: 'What does it cost?',
        a: 'Free for now: up to 3 full sound reports per device per day. The preliminary verdict from the questionnaire has no limit.',
      },
      {
        q: 'Which cars are supported?',
        a: 'Passenger cars with a petrol or diesel engine and a manual or automatic gearbox. The make, year and mileage are taken into account in the analysis.',
      },
      {
        q: 'What happens to my recording?',
        a: 'The audio goes to the server, is analysed and is not kept afterwards. There are no accounts and no advertising trackers.',
      },
      {
        q: 'What if I cannot get a good recording?',
        a: 'The report rests first of all on your answers — the way a mechanic starts by asking questions. If the recording tells us nothing, the app says so plainly.',
      },
    ],
  },
  quiz: {
    h2: 'Check it now',
    sub: 'A few questions and you will see the likely cause and how urgent it is.',
    urgOk: 'Safe to drive',
    urgWarn: 'Shop this week',
    urgStop: 'Pull over',
    back: 'Back',
    restart: 'Start over',
    cta: 'Full sound report — in the app',
    schemaMarked: 'Circled is what your answers point to — a theory, not a diagnosis.',
    schemaWhole: 'The whole assembly.',
  },
  symptoms: {
    indexTitle: 'Car noises and symptoms explained | Pro-Stuk',
    indexDescription: 'Knocking, humming, squealing, grinding: what each car noise means, how dangerous it is and what you can check yourself. Symptom guides with a diagnostic tree.',
    h1: 'Symptoms by sound',
    sub: 'Pick the noise closest to yours. Each guide lists the likely causes, a danger traffic light, safe checks you can do yourself and an interactive diagnostic tree.',
    gDvigatel: 'Engine',
    gDvizhenie: 'On the move',
    gTormozaRul: 'Brakes and steering',
    gPodveska: 'Suspension',
    causesH2: 'Possible causes',
    thCause: 'Cause',
    thLikelihood: 'How likely',
    thDanger: 'Danger',
    canRideH2: 'Can you keep driving',
    checksH2: 'What to check yourself',
    quizH2: 'Narrow the cause down with questions',
    quizSub: 'Answer a few questions and the diagnostic tree will shorten the list of causes for your case.',
    appHelpH2: 'How the app helps',
    faqH2: 'Common questions',
    lightOk: 'safe to drive',
    lightWarn: 'shop this week',
    lightStop: 'pull over',
    mapTitle: 'Where the noise comes from',
    mapOk: 'You can drive to the garage calmly',
    mapWarn: 'Do not put it off: check within days',
    mapStop: 'Go to the garage without delay',
    zoneDvigatel: 'the engine bay',
    zoneDvizhenie: 'the wheels and everything turning with them',
    zoneTormoza: 'brakes and steering, the wheel area',
    zonePodveska: 'suspension, the wheel area',
  },
  download: {
    h2: 'The Android app',
    sub: 'The questionnaire, the sound recording and the full report with probabilities are all in the Pro-Stuk app.',
    btn: 'Download for Android',
    meta: 'Version {version} · APK {size} MB · updated {date}',
    installH: 'How to install the APK',
    steps: [
      'Download the file using the button above.',
      'Open it from the notification or from your Downloads.',
      'Allow installation from this source when the phone asks.',
      'Install the app and open it.',
    ],
    playNote: 'When the app reaches Google Play, this page will be updated.',
  },
  how: {
    title: 'How sound diagnosis works | Pro-Stuk',
    description:
      'A straight account of how Pro-Stuk works: the questionnaire as the main tool, ' +
      'spectral analysis of the recording, a language model and the known weak spots ' +
      'of each model. Why the result is a probability.',
    schemaName: 'How sound diagnosis works',
    h1: 'How it works',
    formH2: 'The questionnaire is the main tool',
    formP:
      'Every diagnostician starts by asking: when did the noise appear, what does it sound ' +
      'like, does it depend on speed, engine revs, braking, cornering. Your answers rule out ' +
      'whole families of causes — that is worth more than any algorithm running on a poor ' +
      'recording. So the questionnaire comes first in Pro-Stuk, and its logic is a decision tree: ' +
      'each answer leads to the next, narrower question.',
    recH2: 'What happens to the recording',
    recP: [
      'The 15–30 second recording goes to the server. First it is handled by ordinary maths, ' +
        'no neural networks: the spectrum of the sound, its colour (a tonal squeal or broadband ' +
        'noise), the rhythm of the knocks and their rate, an estimate of engine speed from the ' +
        'low-frequency band. Every feature is marked for reliability: if the recording is quiet ' +
        'or noisy, the features are honestly flagged as unreliable.',
      'Then a language model puts it all together: your answers, the features of the recording, ' +
        'the audio itself and the car — make, year, mileage and the known weak spots of that ' +
        'model. The result is 2–4 likely causes with percentages, an urgency level and pointers ' +
        'for the garage.',
    ],
    probH2: 'Why the result is a probability',
    probP: [
      'Different faults make the same noise: the hum of a wheel bearing is easy to mistake for ' +
        'tyre noise, and a knock from the anti-roll bar links for something far more serious in ' +
        'the suspension. Telling them apart for certain takes an inspection on a lift. So Pro-Stuk ' +
        'does not give a diagnosis and does not promise accuracy — it spreads the probabilities ' +
        'honestly and tells you what to check first.',
      'A good recording improves the estimate, but it does not replace a mechanic. Treat the ' +
        'report as a second opinion before you go in: it makes the conversation specific, and ' +
        'makes it harder to sell you work you do not need.',
    ],
    dataH2: 'Data',
    dataP:
      'The audio is analysed on the server and is not kept afterwards. There are no accounts, ' +
      'no analytics and no advertising trackers. More detail in the ',
    dataLink: 'privacy policy',
    dataTail: '.',
  },
  privacy: {
    title: 'Privacy policy | Pro-Stuk',
    description:
      'What happens to your data in the Pro-Stuk app: audio is processed on the server and not kept after the analysis, sign-in is via Google or Apple, and there is no analytics.',
    h1: 'Privacy policy',
    updatedLabel: 'Updated',
    intro:
      'The Pro-Stuk app collects the bare minimum — exactly what the diagnosis needs and nothing beyond it.',
    items: [
      {
        strong: 'The recording',
        text: 'is sent to the server only when you press the record button. It is used for the analysis and is not kept once the report is ready — neither on the server nor in any file.',
      },
      {
        strong: 'The sound is analysed by Google.',
        text: 'The recording is passed to the Google Gemini API, the service that analyses it on our behalf. Nothing that identifies you is sent along with it.',
      },
      {
        strong: 'Car details',
        text: '(make, model, year, mileage) and your answers go with the recording — they are what the causes are weighed against.',
      },
      {
        strong: 'Sign-in with Google or Apple.',
        text: 'The app creates no accounts of its own and never asks for a password. From the store it receives only your permanent user number; your garage and check balance are stored against it. Your name, photo and e-mail are neither requested nor kept.',
      },
      {
        strong: 'Purchases go through the store.',
        text: 'Payment is taken by Google Play or the App Store; your card details never reach us. Our server receives only the store’s confirmation and adds the checks; the receipt is kept so nothing is credited twice.',
      },
      {
        strong: 'Your IP address',
        text: 'is visible to the server, as it is to any site you open, and is used only to keep the service from being overloaded. It stays in memory for a few minutes, never reaches a database and is never linked to a report.',
      },
      {
        strong: 'There are no third-party trackers or ads.',
        text: 'The site counts anonymous page views on its own server — no cookies, no identifiers, nothing passed to anyone else. The app has no analytics at all.',
      },
      {
        strong: 'Your report history',
        text: 'stays on your device only and is deleted along with the app.',
      },
      {
        strong: 'The connection is encrypted.',
        text: 'The app talks to the server over HTTPS.',
      },
      {
        strong: 'How to delete your data.',
        text:
          'Uninstalling the app is enough to erase the report history on your phone. The account itself, together with the garage and the remaining checks, is deleted inside the app: Settings → Delete account. Deletion is final and unused checks are not refunded.',
      },
      {
        strong: 'The app is not meant for children.',
        text: 'It is built for drivers and is not directed at children.',
      },
    ],
    outro:
      'The microphone is switched on only while a sound is being recorded, and only when you ask for it. The report is a probability estimate, not a diagnosis; the decision to repair belongs to a mechanic after an inspection.',
    contactTitle: 'How to reach us',
    contactText:
      'The Pro-Stuk app and site are run by {operator}. Questions about your data, complaints and deletion requests go to:',
    changes:
      'If this policy changes, the update date at the top of the page changes with it.',
  },
  og: {
    tagline: 'Find the fault by its sound',
  },
  notFound: {
    title: 'Page not found — Pro-Stuk',
    description:
      'There is no such page on this site. Go back to the home page or open the symptom guides.',
    h1: 'Page not found',
    text:
      'The address has a typo in it, or the page has moved. The noise that brought you here is still there — start from the home page or open the symptom guides.',
    home: 'Go to the home page',
  },
  deleteAccount: {
    title:
      'Delete your account | Pro-Stuk',
    h1:
      'Delete your account',
    description:
      'How to delete your Pro-Stuk account together with the garage and remaining checks: with a button in the app, or by e-mail if the app is already uninstalled.',
    intro:
      'The account is deleted in full: garage, cars, purchase history and every remaining check. Nothing can be restored, and unused checks are not refunded.',
    appT:
      'From the app — the fastest way',
    app:
      'Open Settings and tap Delete account. The app asks once to confirm and removes the record straight away; there is nothing to wait for.',
    mailT:
      'By e-mail, if the app is already uninstalled',
    mail:
      'Write to us from the address your Google or Apple account uses and tell us which of the two you signed in with. We delete within 30 days and reply once it is done.',
    whatT:
      'What exactly is deleted',
    what:
      'The account loses its garage slots, cars, check balance and the list of processed purchases. Recordings are not stored at all — they are discarded after the analysis. The report history lives on your phone and goes with the app.',
  },
};

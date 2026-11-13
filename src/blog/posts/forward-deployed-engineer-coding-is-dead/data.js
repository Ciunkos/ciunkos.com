/* Every number the figures in this post draw, with where it comes from. Both language
   versions of the post read this file, so a figure can't say one thing in English and
   another in Polish. Text is { en, pl }. */

export const SOURCES = {
  lenny: {
    name: "TrueUp via Lenny's Newsletter",
    href: 'https://www.lennysnewsletter.com/p/state-of-the-tech-job-market-late'
  },
  jjit: {
    name: 'Just Join IT',
    href: 'https://justjoin.it/blog/rynek-it-w-polsce-2025-stabilizacja-i-koniec-kryzysu-raport'
  },
  nfj: {
    name: 'No Fluff Jobs via Antyweb',
    href: 'https://antyweb.pl/rynek-pracy-it-2026'
  },
  fortune: {
    name: 'Lightcast via Fortune',
    href: 'https://fortune.com/2026/09/03/forward-deployed-engineers-fast-growing-six-figure-silicon-valley-job-integrate-ai-with-customers-tech-careers-palantir/'
  },
  databricks: {
    name: 'Databricks',
    href: 'https://www.databricks.com/company/careers/professional-services-operations/sr-forward-deployed-engineer-8739465002'
  },
  levels: {
    name: 'Levels.fyi',
    href: 'https://www.levels.fyi/t/software-engineer/title/forward-deployed-engineer'
  },
  bloomberry: {
    name: 'Bloomberry',
    href: 'https://bloomberry.com/blog/i-analyzed-1000-forward-deployed-engineer-jobs-what-i-learned/'
  },
  pricing: {
    name: { en: 'my price list', pl: 'mój cennik' },
    href: 'https://ciunkos.com/pricing'
  },
  eldorado: {
    name: 'Czy Jest Eldorado',
    href: 'https://czyjesteldorado.pl/zwolnienia-w-it'
  }
}

// change in open engineering roles, 29 Oct 2025 to 28 Oct 2026 (TrueUp)
export const roleShift = {
  title: {
    en: 'FDE up 4.6x. Mobile and front-end nearly halved.',
    pl: 'FDE: wzrost 4,6x. Mobile i front-end: prawie o połowę mniej.'
  },
  subtitle: {
    en: 'Change in open engineering roles in one year, by job title',
    pl: 'Zmiana liczby otwartych ofert w rok, według nazwy stanowiska'
  },
  showTrue: { en: 'Show the true scale', pl: 'Pokaż prawdziwą skalę' },
  showCut: { en: 'Cut the bar again', pl: 'Utnij słupek z powrotem' },
  hint: {
    en: 'The top bar is cut off so the others stay readable. Press the button to see how far it really goes.',
    pl: 'Górny słupek jest ucięty, żeby reszta była czytelna. Kliknij przycisk i zobacz, jak daleko sięga naprawdę.'
  },
  grew: {
    en: (label, value) => `${label}: ${value} more open roles than a year ago`,
    pl: (label, value) => `${label}: ${value} więcej ofert niż rok temu`
  },
  shrank: {
    en: (label, value) => `${label}: ${value} fewer open roles than a year ago`,
    pl: (label, value) => `${label}: ${value} mniej ofert niż rok temu`
  },
  rows: [
    {
      id: 'fde',
      label: {
        en: 'Forward deployed engineer',
        pl: 'Forward deployed engineer'
      },
      value: 361,
      suffix: ' (4.6x)',
      lead: true
    },
    {
      id: 'security',
      label: { en: 'Security engineer', pl: 'Security engineer' },
      value: 34
    },
    {
      id: 'platform',
      label: { en: 'Platform engineer', pl: 'Platform engineer' },
      value: 30
    },
    {
      id: 'embedded',
      label: { en: 'Embedded systems engineer', pl: 'Embedded' },
      value: 25
    },
    {
      id: 'mts',
      label: {
        en: 'Member of Technical Staff',
        pl: 'Member of Technical Staff'
      },
      value: 11
    },
    {
      id: 'backend',
      label: { en: 'Backend engineer', pl: 'Backend engineer' },
      value: 4.2
    },
    {
      id: 'mobile',
      label: { en: 'Mobile engineer', pl: 'Mobile engineer' },
      value: -39
    },
    {
      id: 'ios',
      label: { en: 'iOS engineer', pl: 'iOS engineer' },
      value: -46
    },
    {
      id: 'android',
      label: { en: 'Android engineer', pl: 'Android engineer' },
      value: -47
    },
    {
      id: 'frontend',
      label: { en: 'Front-end engineer', pl: 'Front-end engineer' },
      value: -51
    }
  ],
  sources: [SOURCES.lenny]
}

// since January 2024: open engineering roles against engineers actually hired (US)
export const openingsVsHires = {
  title: {
    en: 'More job ads, fewer people hired',
    pl: 'Więcej ogłoszeń, mniej zatrudnionych'
  },
  subtitle: {
    en: 'Engineering roles since January 2024, indexed to 100',
    pl: 'Stanowiska inżynierskie od stycznia 2024, indeks 100'
  },
  start: { en: 'Jan 2024', pl: 'sty 2024' },
  end: { en: 'Nov 2026', pl: 'lis 2026' },
  series: [
    {
      id: 'openings',
      label: { en: 'Open roles', pl: 'Otwarte oferty' },
      value: 144,
      tone: 'up'
    },
    {
      id: 'hires',
      label: { en: 'People hired', pl: 'Zatrudnieni' },
      value: 83,
      tone: 'down'
    }
  ],
  readout: {
    en: 'US companies hired about 113,000 software engineers in the year to April 2026. At the 2022 peak it was 239,000.',
    pl: 'Firmy w USA zatrudniły około 113 tys. programistów w rok do kwietnia 2026. W szczycie w 2022 było to 239 tys.'
  },
  sources: [SOURCES.lenny]
}

// Poland: job ads on Just Join IT per year, and how crowded each ad is
export const poland = {
  title: {
    en: 'Poland: the ads came back. The queue did not get shorter for juniors.',
    pl: 'Polska: ogłoszenia wróciły. Kolejka juniorów się nie skróciła.'
  },
  subtitle: {
    en: 'IT job ads on Just Join IT per year',
    pl: 'Ogłoszenia IT na Just Join IT w roku'
  },
  years: [
    { year: 2022, value: 175610 },
    { year: 2023, value: 129836 },
    { year: 2024, value: 99363 },
    { year: 2025, value: 110996 }
  ],
  describe: {
    en: (year, value) => `${year}: ${value} job ads`,
    pl: (year, value) => `${year}: ${value} ogłoszeń`
  },
  hint: {
    en: 'From the 2022 peak to 2024 the number of ads fell by 43%. 2025 was the first year of growth.',
    pl: 'Od szczytu w 2022 do 2024 liczba ogłoszeń spadła o 43%. Rok 2025 był pierwszym rokiem wzrostu.'
  },
  tiles: [
    {
      value: '21',
      label: {
        en: 'applications per ad on No Fluff Jobs in the first half of 2026, down from 44 in 2024',
        pl: 'aplikacji na ogłoszenie w No Fluff Jobs w I połowie 2026, wobec 44 w 2024'
      }
    },
    {
      value: '146',
      label: {
        en: 'applications per junior front-end ad',
        pl: 'aplikacji na ogłoszenie dla juniora front-end'
      }
    },
    {
      value: '1 in 20',
      valuePl: '1 na 20',
      label: {
        en: 'ads is for a junior. In 2022 it was about 3 in 20.',
        pl: 'ogłoszeń jest dla juniora. W 2022 były to około 3 na 20.'
      }
    }
  ],
  sources: [SOURCES.jjit, SOURCES.nfj]
}

// how big the FDE market is: of 100 open engineering roles, how many are FDE
export const fdeShare = {
  title: {
    en: 'Fastest growing, still about 2 in 100',
    pl: 'Rośnie najszybciej, ale to wciąż około 2 na 100'
  },
  subtitle: {
    en: 'Each dot is 1% of open engineering roles. The blue ones are FDE.',
    pl: 'Jedna kropka to 1% otwartych ofert inżynierskich. Niebieskie to FDE.'
  },
  total: 65000,
  fde: 1500,
  readout: {
    en: 'About 1,500 of about 65,000 open engineering roles are FDE: 2.3%. A year ago it was about half a percent.',
    pl: 'Około 1500 z około 65 tys. otwartych ofert inżynierskich to FDE: 2,3%. Rok temu było to około pół procenta.'
  },
  growthTitle: {
    en: 'How fast it grew depends on who counts',
    pl: 'Tempo wzrostu zależy od tego, kto liczy'
  },
  growth: [
    {
      value: '4.6x',
      valuePl: '4,6x',
      source: { name: 'TrueUp', href: SOURCES.lenny.href },
      label: {
        en: 'open roles, year to October 2026',
        pl: 'otwarte oferty, rok do października 2026'
      }
    },
    {
      value: '8.3x',
      valuePl: '8,3x',
      source: {
        name: 'Indeed',
        href: 'https://fortune.com/2026/09/03/forward-deployed-engineers-fast-growing-six-figure-silicon-valley-job-integrate-ai-with-customers-tech-careers-palantir/'
      },
      label: {
        en: 'postings, April 2025 to April 2026',
        pl: 'ogłoszenia, kwiecień 2025 do kwietnia 2026'
      }
    },
    {
      value: '11x+',
      source: { name: 'Lightcast', href: SOURCES.fortune.href },
      label: {
        en: 'postings, January to August 2026 against a year earlier',
        pl: 'ogłoszenia, styczeń do sierpnia 2026 wobec roku wcześniej'
      }
    }
  ],
  sources: [SOURCES.lenny]
}

// published pay for FDE roles, per year. US ads are in dollars and Polish ads in złoty;
// the figure shows both in the reader's currency at the rate of my own price list
// (180 zł = $45, so 4 zł to the dollar). B2B: hourly rate x 160 hours x 12 months.
export const pay = {
  title: {
    en: 'What FDE ads pay per year',
    pl: 'Ile rocznie płacą ogłoszenia FDE'
  },
  subtitle: {
    en: 'Advertised ranges in US dollars, Polish ads converted at 4 zł to the dollar',
    pl: 'Widełki z ogłoszeń w złotych, amerykańskie przeliczone po 4 zł za dolara'
  },
  rate: 4,
  groups: [
    {
      id: 'us',
      name: { en: 'United States', pl: 'USA' },
      currency: 'usd',
      rows: [
        {
          id: 'anthropic',
          label: 'Anthropic',
          low: 280000,
          high: 320000,
          detail: {
            en: 'base salary, ad from August 2026, now closed',
            pl: 'pensja podstawowa, ogłoszenie z sierpnia 2026, już zamknięte'
          }
        },
        {
          id: 'openai',
          label: 'OpenAI',
          low: 220000,
          high: 280000,
          detail: {
            en: 'base salary, New York, up to 50% travel, ad now closed',
            pl: 'pensja podstawowa, Nowy Jork, do 50% podróży, ogłoszenie zamknięte'
          }
        },
        {
          id: 'databricks',
          label: 'Databricks',
          low: 182000,
          high: 250208,
          detail: {
            en: 'base salary, senior FDE, 6+ years',
            pl: 'pensja podstawowa, senior FDE, 6+ lat'
          }
        },
        {
          id: 'levels',
          label: { en: 'Median, Levels.fyi', pl: 'Mediana, Levels.fyi' },
          point: 225000,
          detail: {
            en: 'median total compensation, so with stock and bonus',
            pl: 'mediana całkowitego wynagrodzenia, czyli z akcjami i premią'
          }
        }
      ]
    },
    {
      id: 'pl',
      name: { en: 'Poland', pl: 'Polska' },
      currency: 'pln',
      rows: [
        {
          id: 'agency',
          label: {
            en: 'One agency ad, B2B',
            pl: 'Jedno ogłoszenie agencji, B2B'
          },
          low: 480000,
          high: 768000,
          detail: {
            en: '250 to 400 zł an hour in the ad, counted as 160 hours a month for 12 months with no leave',
            pl: '250 do 400 zł za godzinę w ogłoszeniu, liczone jako 160 godzin miesięcznie przez 12 miesięcy bez urlopu'
          }
        },
        {
          id: 'google',
          label: { en: 'Google Cloud, employment', pl: 'Google Cloud, etat' },
          low: 280000,
          high: 287000,
          detail: {
            en: 'Warsaw or Wrocław, plus 15% bonus and stock',
            pl: 'Warszawa lub Wrocław, plus 15% premii i akcje'
          }
        },
        {
          id: 'me',
          label: { en: 'Me, B2B', pl: 'Ja, B2B' },
          point: 360000,
          lead: true,
          detail: {
            en: 'my public price: 30,000 zł for a dedicated month',
            pl: 'moja publiczna cena: 30 000 zł za miesiąc na wyłączność'
          }
        }
      ]
    }
  ],
  sources: [SOURCES.levels, SOURCES.databricks, SOURCES.pricing]
}

// the cost of work done by hand against the price of two days of discovery
export const roi = {
  title: {
    en: 'What does the manual work cost you a year?',
    pl: 'Ile rocznie kosztuje Cię ręczna robota?'
  },
  subtitle: {
    en: 'Move the sliders to your own numbers. Nothing leaves your browser.',
    pl: 'Ustaw suwaki na swoje liczby. Nic nie opuszcza przeglądarki.'
  },
  currencies: {
    pln: {
      label: 'zł',
      hourly: 60,
      hourlyMax: 200,
      discovery: 2880,
      rate: 180
    },
    eur: { label: '€', hourly: 30, hourlyMax: 100, discovery: 640, rate: 40 },
    usd: { label: '$', hourly: 35, hourlyMax: 100, discovery: 720, rate: 45 }
  },
  weeks: 46,
  fields: {
    people: {
      en: 'People doing the manual work',
      pl: 'Osoby wykonujące ręczną pracę'
    },
    hours: {
      en: 'Hours a week each of them spends on it',
      pl: 'Godziny w tygodniu, które każda na to poświęca'
    },
    hourly: {
      en: 'What an hour of their work costs you',
      pl: 'Ile kosztuje Cię godzina ich pracy'
    },
    share: {
      en: 'Share of that work a system could take over',
      pl: 'Część tej pracy, którą może przejąć system'
    }
  },
  out: {
    cost: { en: 'The manual work costs', pl: 'Ręczna praca kosztuje' },
    perYear: { en: 'a year', pl: 'rocznie' },
    saved: { en: 'A system could take over', pl: 'System może przejąć' },
    discovery: {
      en: 'Two days of discovery cost',
      pl: 'Dwa dni discovery kosztują'
    },
    roi: {
      en: 'return on the discovery in year one',
      pl: 'zwrotu z discovery w pierwszym roku'
    },
    payback: {
      en: days =>
        `It pays for itself in ${days} working ${days === 1 ? 'day' : 'days'} of that saving.`,
      pl: days =>
        `Zwraca się po ${days} ${days === 1 ? 'dniu roboczym' : 'dniach roboczych'} tej oszczędności.`
    },
    hoursUnit: { en: 'h', pl: 'h' }
  },
  note: {
    en: 'An estimate at 46 working weeks a year.',
    pl: 'Szacunek dla 46 tygodni pracy w roku.'
  },
  sources: [SOURCES.pricing]
}

// the loop an FDE runs with one customer
export const loop = {
  title: { en: 'The FDE loop', pl: 'Pętla FDE' },
  subtitle: {
    en: 'Five steps with one customer. Pick a step.',
    pl: 'Pięć kroków z jednym klientem. Wybierz krok.'
  },
  steps: [
    {
      id: 'discovery',
      name: { en: 'Discovery', pl: 'Discovery' },
      when: { en: '2 days', pl: '2 dni' },
      does: {
        en: 'I sit with the people who do the work: on site, on calls, in Slack and in the repositories. I watch where orders get retyped, where things wait and where mistakes come back.',
        pl: 'Siadam z ludźmi, którzy wykonują pracę: na miejscu, na callach, na Slacku i w repozytoriach. Patrzę, gdzie przepisuje się zamówienia, gdzie rzeczy czekają i skąd wracają błędy.'
      },
      get: {
        en: 'A list of problems ranked by what they cost you.',
        pl: 'Lista problemów ułożona według tego, ile Cię kosztują.'
      }
    },
    {
      id: 'plan',
      name: { en: 'Plan with numbers', pl: 'Plan z liczbami' },
      when: { en: 'Day 3', pl: 'Dzień 3' },
      does: {
        en: 'For each problem: what to automate, what it costs and what it saves, counted on your real costs. Sometimes the answer is that AI makes no sense here yet.',
        pl: 'Dla każdego problemu: co zautomatyzować, ile to kosztuje i ile oszczędza, policzone na Twoich prawdziwych kosztach. Czasem odpowiedź brzmi: AI nie ma tu jeszcze sensu.'
      },
      get: {
        en: 'An action plan. You decide whether we go on.',
        pl: 'Plan działania. To Ty decydujesz, czy idziemy dalej.'
      }
    },
    {
      id: 'pilot',
      name: { en: 'Pilot', pl: 'Pilotaż' },
      when: { en: '2 to 4 weeks', pl: '2 do 4 tygodni' },
      does: {
        en: 'One process, one agent, wired into the systems you already have. It runs on real orders next to the people, with checks and a cost cap.',
        pl: 'Jeden proces, jeden agent, podpięty do systemów, które już masz. Działa na prawdziwych zamówieniach obok ludzi, z testami i limitem kosztów.'
      },
      get: {
        en: 'Something that works on the dispatch desk on a Monday.',
        pl: 'Coś, co działa w dyspozytorni w poniedziałek.'
      }
    },
    {
      id: 'rollout',
      name: { en: 'Rollout and training', pl: 'Wdrożenie i szkolenia' },
      when: { en: 'Weeks 4 to 6', pl: 'Tygodnie 4 do 6' },
      does: {
        en: 'Corrections after the pilot, then training. A tool people avoid ends up paid for, official and unused.',
        pl: 'Poprawki po pilotażu, potem szkolenia. Narzędzie, którego ludzie unikają, kończy jako opłacone, oficjalne i nieużywane.'
      },
      get: {
        en: 'People who use it without being told to.',
        pl: 'Ludzie, którzy korzystają z tego bez przymusu.'
      }
    },
    {
      id: 'check',
      name: { en: 'The return visit', pl: 'Wizyta kontrolna' },
      when: { en: 'After 6 weeks', pl: 'Po 6 tygodniach' },
      does: {
        en: 'I come back and measure. Did the savings from the plan show up, or did they get wasted? Then the next problem on the list.',
        pl: 'Wracam i mierzę. Czy oszczędności z planu się zmaterializowały, czy zostały zaprzepaszczone? Potem następny problem z listy.'
      },
      get: {
        en: 'The plan against reality, in numbers.',
        pl: 'Plan kontra rzeczywistość, w liczbach.'
      }
    }
  ],
  getLabel: { en: 'You get', pl: 'Dostajesz' }
}

// FDE against the roles it gets confused with
export const compare = {
  title: {
    en: 'FDE and the roles it gets confused with',
    pl: 'FDE i role, z którymi jest mylony'
  },
  head: {
    en: [
      'Role',
      'Where they work',
      'Ships production code',
      'Answers for the result after launch',
      'Paid for'
    ],
    pl: [
      'Rola',
      'Gdzie pracuje',
      'Wdraża kod na produkcję',
      'Odpowiada za wynik po wdrożeniu',
      'Za co mu płacą'
    ]
  },
  rows: [
    {
      name: {
        en: 'Forward deployed engineer',
        pl: 'Forward deployed engineer'
      },
      lead: true,
      cells: {
        en: ['Inside the customer’s team', 'Yes', 'Yes', 'The outcome'],
        pl: ['W zespole klienta', 'Tak', 'Tak', 'Wynik']
      }
    },
    {
      name: { en: 'Consultant', pl: 'Konsultant' },
      cells: {
        en: ['Meeting rooms', 'Rarely', 'No', 'The advice'],
        pl: ['Sale spotkań', 'Rzadko', 'Nie', 'Poradę']
      }
    },
    {
      name: {
        en: 'Solutions or sales engineer',
        pl: 'Solutions lub sales engineer'
      },
      cells: {
        en: [
          'Before the sale',
          'Demos and proofs of concept',
          'No',
          'The signed deal'
        ],
        pl: [
          'Przed sprzedażą',
          'Dema i proof of concept',
          'Nie',
          'Podpisaną umowę'
        ]
      }
    },
    {
      name: { en: 'Outsourced team', pl: 'Zespół z outsourcingu' },
      cells: {
        en: ['Their own office', 'Yes', 'Only for the backlog', 'The hours'],
        pl: ['Własne biuro', 'Tak', 'Tylko za backlog', 'Godziny']
      }
    }
  ]
}

// where the day goes; my own estimate, not a survey
export const dayShift = {
  title: { en: 'Where the day goes', pl: 'Na co schodzi dzień' },
  subtitle: {
    en: 'My own working day, then and now. An estimate, not a survey.',
    pl: 'Mój własny dzień pracy, kiedyś i dziś. Szacunek, nie badanie.'
  },
  parts: [
    {
      id: 'hand',
      label: { en: 'Writing code by hand', pl: 'Ręczne pisanie kodu' }
    },
    {
      id: 'agents',
      label: {
        en: 'Steering and reviewing agents',
        pl: 'Prowadzenie i przegląd agentów'
      }
    },
    {
      id: 'people',
      label: {
        en: 'With the customer and users',
        pl: 'Z klientem i użytkownikami'
      }
    },
    {
      id: 'measure',
      label: { en: 'Measuring what changed', pl: 'Mierzenie, co się zmieniło' }
    },
    {
      id: 'rest',
      label: { en: 'Meetings and the rest', pl: 'Spotkania i reszta' }
    }
  ],
  days: [
    {
      id: 'then',
      label: {
        en: 'Full-stack developer, 2022',
        pl: 'Full-stack developer, 2022'
      },
      values: { hand: 60, agents: 0, people: 10, measure: 5, rest: 25 }
    },
    {
      id: 'now',
      label: {
        en: 'Forward deployed engineer, 2026',
        pl: 'Forward deployed engineer, 2026'
      },
      values: { hand: 5, agents: 35, people: 30, measure: 15, rest: 15 }
    }
  ],
  describe: {
    en: (day, part, value) =>
      `${day}: ${value}% of the day on ${part.toLowerCase()}`,
    pl: (day, part, value) => `${day}: ${value}% dnia, ${part.toLowerCase()}`
  },
  hint: {
    en: 'The code still gets written. I just stopped being the one who types it.',
    pl: 'Kod dalej powstaje. Tylko to już nie ja go wklepuję.'
  }
}

// the shifts one career has already been through
export const shifts = {
  title: {
    en: 'Every few years the job changes',
    pl: 'Co kilka lat ten zawód się zmienia'
  },
  subtitle: {
    en: 'The shifts since I wrote my first paid code in 2009',
    pl: 'Zmiany od mojego pierwszego płatnego kodu w 2009'
  },
  items: [
    {
      year: '2007',
      name: { en: 'Mobile', pl: 'Mobile' },
      text: {
        en: 'The iPhone ships and desktop developers learn touch screens and app stores.',
        pl: 'Wychodzi iPhone, a programiści desktopowi uczą się ekranów dotykowych i sklepów z aplikacjami.'
      }
    },
    {
      year: '2009',
      name: { en: 'I start', pl: 'Zaczynam' },
      me: true,
      text: {
        en: 'My first contract, a game engine in C#. The web is server-rendered pages and jQuery.',
        pl: 'Moje pierwsze zlecenie, silnik gry w C#. Web to strony renderowane na serwerze i jQuery.'
      }
    },
    {
      year: '2010s',
      name: { en: 'Cloud', pl: 'Chmura' },
      text: {
        en: 'Servers become an API. Whoever racked machines learns infrastructure as code.',
        pl: 'Serwery stają się API. Kto wkręcał maszyny do szaf, uczy się infrastruktury jako kodu.'
      }
    },
    {
      year: '2013',
      name: { en: 'Single-page apps', pl: 'Aplikacje SPA' },
      text: {
        en: 'React arrives and "front-end developer" becomes a full-time job of its own.',
        pl: 'Pojawia się React i „front-end developer” staje się osobnym, pełnoetatowym zawodem.'
      }
    },
    {
      year: '2022',
      name: { en: 'AI assistants', pl: 'Asystenci AI' },
      text: {
        en: 'ChatGPT launches in November. The assistant answers faster than Stack Overflow ever did.',
        pl: 'W listopadzie startuje ChatGPT. Asystent odpowiada szybciej, niż kiedykolwiek robił to Stack Overflow.'
      }
    },
    {
      year: '2025',
      name: { en: 'Coding agents', pl: 'Agenci kodujący' },
      text: {
        en: 'Agents write, run and fix the code. Typing it stops being the job.',
        pl: 'Agenci piszą, uruchamiają i poprawiają kod. Wklepywanie go przestaje być pracą.'
      }
    },
    {
      year: '2026',
      name: { en: 'Forward deployed', pl: 'Forward deployed' },
      now: true,
      text: {
        en: 'The work moves to the customer: finding the problem and making the fix stick.',
        pl: 'Praca przenosi się do klienta: znaleźć problem i sprawić, żeby rozwiązanie się przyjęło.'
      }
    },
    {
      year: '?',
      name: { en: 'Next', pl: 'Co dalej' },
      next: true,
      text: {
        en: 'My bet: this role goes too. The habit of changing does not.',
        pl: 'Mój zakład: ta rola też zniknie. Nawyk zmieniania się zostanie.'
      }
    }
  ]
}

// reactions played from MemeLib, by their id there
export const memelib = {
  'they-took-our-jobs': {
    width: 640,
    height: 360,
    alt: {
      en: 'Reaction clip: an angry cartoon townsman at a podium shouts "They took our jobs!"',
      pl: 'Reakcja: wściekły rysunkowy mieszkaniec miasteczka krzyczy zza mównicy „Zabrali nam robotę!”'
    },
    caption: {
      en: 'The whole industry, 2026. From',
      pl: 'Cała branża, 2026. Z'
    },
    page: {
      en: '/memelib/they-took-our-jobs',
      pl: '/memylib/they-took-our-jobs'
    }
  },
  'let-it-go': {
    width: 498,
    height: 280,
    alt: {
      en: 'Reaction clip: an animated queen in a blue dress sings "Let it go"',
      pl: 'Reakcja: animowana królowa w niebieskiej sukni śpiewa „Mam tę moc”'
    },
    caption: {
      en: 'Your vim macros will be fine without you. From',
      pl: 'Twoje makra w vimie poradzą sobie bez Ciebie. Z'
    },
    page: { en: '/memelib/let-it-go', pl: '/memylib/let-it-go' }
  }
}

// the offer at the end of the post, and the head that leans in next to it
export const hire = {
  title: { en: 'Looking for an FDE?', pl: 'Szukasz FDE?' },
  lead: {
    en: 'I am available now, on contract or full time, remote from Wrocław with travel to you.',
    pl: 'Jestem dostępny od zaraz, na kontrakt albo etat, zdalnie z Wrocławia z dojazdem do Ciebie.'
  },
  points: {
    en: [
      '15+ years of shipping software, nine of them embedded in client teams',
      'Building agents since 2024: tool calling, evals, cost caps',
      'Scope and price in writing within 24 hours of the call'
    ],
    pl: [
      '15+ lat dostarczania oprogramowania, z czego dziewięć w zespołach klientów',
      'Agenci od 2024: tool calling, ewaluacje, limity kosztów',
      'Zakres i cena na piśmie w 24 godziny po rozmowie'
    ]
  },
  call: { en: 'Book a 30-minute call', pl: 'Umów 30 minut rozmowy' },
  callHref: 'https://cal.com/przemyslaw-zalewski-ciunkos/30min',
  more: { en: 'How I work as an FDE', pl: 'Jak pracuję jako FDE' },
  moreHref: {
    en: 'https://ciunkos.com/hire-ai-engineer-contract',
    pl: 'https://ciunkos.com/zatrudnij-ai-engineera-na-kontrakt'
  },
  peek: {
    en: 'Looking for an FDE? I read every pull request. And every email.',
    pl: 'Szukasz FDE? Czytam każdy pull request. I każdego maila.'
  },
  peekCall: { en: 'Fine, book the call', pl: 'Dobra, umów rozmowę' },
  peekClose: { en: 'Close', pl: 'Zamknij' }
}

// three signs a company is not ready for this work
export const redFlags = {
  title: {
    en: 'Three signs an FDE can’t help you',
    pl: 'Trzy sygnały, że FDE Ci nie pomoże'
  },
  items: [
    {
      id: 'paper',
      name: { en: 'Bureaucracy', pl: 'Biurokracja' },
      text: {
        en: 'Every change needs three signatures.',
        pl: 'Każda zmiana wymaga trzech podpisów.'
      }
    },
    {
      id: 'lock',
      name: { en: 'Rigid processes', pl: 'Usztywnione procesy' },
      text: {
        en: '“We have always done it this way.”',
        pl: '„Zawsze tak robiliśmy.”'
      }
    },
    {
      id: 'anchor',
      name: { en: 'No will to change', pl: 'Brak chęci do zmiany' },
      text: {
        en: 'AI is wanted for the press release.',
        pl: 'AI ma być do komunikatu prasowego.'
      }
    }
  ]
}

// publicly reported layoffs in Polish IT per month of 2026 (positions)
export const layoffs = {
  title: {
    en: 'Layoffs in Polish IT, 2026',
    pl: 'Zwolnienia w polskim IT, 2026'
  },
  subtitle: {
    en: 'Positions cut per month, from public reports',
    pl: 'Zredukowane stanowiska w miesiącu, z publicznych doniesień'
  },
  months: {
    en: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov'
    ],
    pl: [
      'sty',
      'lut',
      'mar',
      'kwi',
      'maj',
      'cze',
      'lip',
      'sie',
      'wrz',
      'paź',
      'lis'
    ]
  },
  values: [196, 240, 188, 252, 1035, 65, 1186, 384, 1124, 747, 25],
  // November was ten days old when the count was taken
  partial: 10,
  describe: {
    en: (month, value) => `${month} 2026: about ${value} positions`,
    pl: (month, value) => `${month} 2026: około ${value} stanowisk`
  },
  hint: {
    en: 'About 5,442 positions at 84 companies from January to 10 November. Community-reported, so some entries are unconfirmed.',
    pl: 'Około 5442 stanowisk w 84 firmach od stycznia do 10 listopada. Dane zgłaszane przez społeczność, więc część wpisów jest niepotwierdzona.'
  },
  sources: [SOURCES.eldorado]
}

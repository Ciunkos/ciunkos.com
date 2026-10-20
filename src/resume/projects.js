import {
  apkaTv,
  fastCoffee,
  blog,
  iAmRich,
  kwejk,
  musicTube,
  pogaduszki,
  promegle,
  ratingSpeed,
  storePro,
  testyPrawoJazdy,
  platformerGameEngine,
  classicGames
} from 'projects'
import tech from './tech'
import companies from './companies'
import koronaKrulowIcon from './koronakrulow.png'
import validatorIcon from './validator.png'
import sandtimeIcon from './sandtime.png'
import patriotMailIcon from './patriotmail.png'

export default [
  {
    key: 'agentSkills',
    name: 'Agent skills platform',
    client: companies.Sanddev,
    slug: 'agent-skills',
    timeFrame: 'September 2026 - present',
    tech: [
      tech.claudeCode,
      tech.codex,
      tech.agentSkills,
      tech.mcp,
      tech.typeScript,
      tech.nodeJs,
      tech.GitHubActions,
      tech.owaspAsvs
    ],
    responsibilities: [
      'Productized a multi-agent code audit as a Claude Code skill: repository in, client-ready PDF report on security, production readiness and maintainability out, with a priced fix plan. Ran on 10+ repositories, detailed reports of up to 365 pages.',
      'Introduced audit-driven development: audit, fix, re-audit. It runs as a loop across our production products.',
      'Added GEO/SEO visibility and DNS and email-security audits. Set up the shared platform on which three colleagues now ship their own skills.'
    ],
    print: true
  },
  {
    key: 'patriotMail',
    name: 'Patriot Mail',
    client: companies.Sanddev,
    url: 'patriotmail.ai',
    href: 'https://patriotmail.ai',
    slug: 'patriot-mail',
    timeFrame: 'May 2025 - present',
    icon: patriotMailIcon,
    description:
      'Email client: a web app plus iOS and macOS apps on the App Store.',
    tech: [
      tech.NextJs,
      tech.react,
      tech.typeScript,
      tech.nodeJs,
      tech.imap,
      tech.oauth,
      tech.playwright,
      tech.checkly,
      tech.postHog,
      tech.axe,
      tech.wcag,
      tech.casa,
      tech.claudeCode,
      tech.codex,
      tech.appStore
    ],
    responsibilities: [
      'Shipped a greenfield Next.js client and, with a colleague, iOS and macOS apps to the App Store in four months.',
      'Built the delivery pipeline: Playwright end-to-end suite, Checkly checks and PostHog observability. Output with one colleague and AI agents: 5,000+ commits a year, up from ~2,000 a year on my own.',
      'Turned early experiments with agent-written code into a reviewed, repeatable process: an agent opened ~30% of merged pull requests in 2026 and I reviewed ~85% of them.',
      'Passed Google\u2019s CASA Tier 2 security assessment (certification and recertification) and Yahoo\u2019s OAuth review.',
      'Integrated IMAP and related mail protocols (dozens of RFCs). Drove WCAG 2.2 AA accessibility with axe checks.'
    ],
    print: true
  },
  {
    key: 'aiContent',
    name: 'AI content platforms',
    client: `${companies.Sanddev} for undisclosed client`,
    slug: 'ai-content-platforms',
    timeFrame: 'November 2023 - May 2025',
    tech: [
      tech.typeScript,
      tech.nodeJs,
      tech.NextJs,
      tech.react,
      tech.openAIApi,
      tech.toolCalling,
      tech.llmAsJudge,
      tech.rag,
      tech.embeddings,
      tech.pgvector,
      tech.postgreSQL,
      tech.cloudflareWorkers,
      tech.vercel,
      tech.TailwindCSS
    ],
    responsibilities: [
      'Mentored a new hire from day one through daily pair sessions and code review. Fully contributing within a year.',
      'Built an agentic content platform (2024): tool-call loop, stop conditions, best-of-n, LLM-as-judge and plagiarism checks. It published thousands of fact-checked articles with AI disclosures, plus chatbots in production.',
      'Designed an affiliate discovery system: semantic search over pgvector with query expansion and tiered caching. It grew a seed of ~300 programs into a catalog of 10,000+.',
      'Took over a dashboard for 300+ generated sites. Added git-backed storage, bulk operations, newsletters, AI brand and logo generation, and third-party integrations.'
    ],
    print: true
  },
  {
    key: 'suppressionList',
    name: 'Suppression list management platform',
    client: `${companies.Sanddev} for a UK email and performance-marketing publisher`,
    slug: 'suppression-list',
    timeFrame: 'March 2023 - December 2024',
    description:
      'Multi-tenant SaaS for suppression lists and opt-outs, designed for terabyte-level growth. Team lead of two engineers and a QA.',
    tech: [
      tech.typeScript,
      tech.nodeJs,
      tech.postgreSQL,
      tech.playwright,
      tech.Docker,
      tech.nginx,
      tech.cloudflareWorkers,
      tech.ciCd
    ],
    responsibilities: [
      'Led the team from MVP to a full product, full time March to November 2023, then oversaw it in production through 2024.',
      'Designed a web-native architecture for terabyte-level growth: multi-tenant PostgreSQL partitioned by tenant and list, massive imports and exports, parallel request pipelines, constant-time sign-up, zero-downtime blue/green deploys. In production: hundreds of gigabytes and millions of events.',
      'Built the UI without a client framework: server-rendered HTML with SPA-like navigation (history API, DOM morphing) on a simple HTTP mental model, picked for high availability and a small team.',
      'Kept opt-out pages up through backend outages (queues, workers, backfill, idempotent retries). Shipped one-click unsubscribe four months before Google and Yahoo announced the requirement. Client rated the engagement 5.0/5.0 in a public Clutch review.'
    ],
    print: false
  },
  {
    key: 'sage',
    name: 'Accounting MVP',
    client: `${companies.PGS} for Sage`,
    slug: 'sage',
    timeFrame: 'November 2022 - March 2023',
    description:
      'Micro-frontends for banking and Making Tax Digital integrated into an accounting MVP on the client\u2019s design system, component library and C# backend APIs.',
    tech: [
      tech.typeScript,
      tech.react,
      tech.storybook,
      tech.REST,
      tech.Jest,
      tech.CSharp
    ],
    responsibilities: [
      'Integrated micro-frontends for banking and Making Tax Digital into an accounting MVP, building on the client\u2019s design system, component library and C# backend APIs.',
      'Worked with more than a dozen people in two cross-functional teams across Spain and Poland. Joined as an engineer. My team treated me as its lead, despite no title.'
    ],
    print: false
  },
  {
    key: 'taskManager',
    name: 'Back Office Task Management System',
    client: `${companies.PGS} for Nate (US start-up)`,
    slug: 'task-manager',
    timeFrame: 'June 2022 - November 2022',
    description:
      'Order-fulfillment back office for a 100+ operator team. I led four engineers while actively developing features.',
    tech: [
      tech.typeScript,
      tech.react,
      tech.NextJs,
      tech.nodeJs,
      tech.Jest,
      tech.WebdriverIO,
      tech.SSE,
      tech.WebExtensions,
      tech.mongoDB,
      tech.styledComponents,
      tech.TailwindCSS,
      tech.CSS,
      tech.REST,
      tech.Auth0,
      tech.Kubernetes,
      tech.Datadog,
      tech.jira,
      tech.CircleCI
    ],
    responsibilities: [
      'Led four engineers building an order-fulfillment back office for a 100+ operator team. Moved the team to trunk-based development with CI/CD, enforced strict auth, and improved observability and logging.',
      'Cut order handling time and duplicate fulfillment with a refreshed UI and live updates over SSE. Errors fell steadily, and a survey of 100+ operators rated the changes a clear improvement.',
      'Stopped a parallel initiative that would not pay off, sparing the company a split-brain across two systems. Closed a public endpoint writing straight to the database and rebuilt the payments feed as a proper migration.'
    ],
    print: false
  },
  {
    key: 'omio',
    name: 'Ads and Ancillaries',
    client: `${companies.PGS} for Omio`,
    url: 'Omio.com',
    href: 'https://www.omio.com',
    slug: 'omio',
    timeFrame: 'July 2021 - May 2022',
    description:
      'Ad placements across web, React Native apps, native iOS and Android, and email, owned from design through A/B tests, feature flags and monitoring in an OKR-driven, data-first team.',
    tech: [
      tech.typeScript,
      tech.react,
      tech.js,
      tech.nodeJs,
      tech.reactNative,
      tech.Jest,
      tech.storybook,
      tech.hapi,
      tech.REST,
      tech.Redux,
      tech.swift,
      tech.kotlin,
      tech.go,
      tech.java,
      tech.redash,
      tech.SQL,
      tech.bigQuery,
      tech.kibana,
      tech.grafana,
      tech.amplitude,
      tech.googleAdManager,
      tech.firebase,
      tech.xcode,
      tech.androidStudio,
      tech.jira,
      tech.confluence
    ],
    responsibilities: [
      'Shipped ad placements inside other teams\u2019 code across web (React), React Native, native iOS and Android, and email, forking and fixing the React Native ad library where needed.',
      'Owned features from design through A/B tests, feature flags and monitoring. Reported open redirects I found along the way.'
    ],
    print: false
  },
  {
    key: 'profilometry',
    name: 'Undisclosed',
    client: `${companies.Sanddev} for undisclosed client`,
    slug: 'profilometry',
    timeFrame: 'July 2017 - June 2021',
    description:
      'Web application for rendering, manipulation, and storage of 3D scans from profilometers, AFMs, and other 3D microscopes. A bespoke solution for a leading company that manufactures profilometry devices and is focused on thin-film measurements.',
    tech: [
      tech.js,
      tech.react,
      tech.Redux,
      tech.reduxThunk,
      tech.nodeJs,
      tech.Jest,
      tech.CSharp,
      tech.dotNetCore,
      tech.EntityFramework,
      tech.mySql,
      tech.ASPDotNetCore,
      tech.Sass,
      tech.WebGL,
      tech.threeJs,
      tech.git,
      tech.GitHub,
      tech.Webpack,
      tech.puppeteer,
      tech.expo,
      tech.reactNative,
      tech.storybook,
      tech.APMAzure,
      tech.AWS,
      tech.stripe
    ],
    responsibilities: [
      'Built frontend features in React with Redux (early adoption, 2017) and backend APIs in C#/.NET, in a team of five engineers and a QA, with weekly calls with the US client.',
      'Built interactive charts and measurement widgets from scratch, synchronized with a 3D renderer I integrated and patched.',
      'Introduced visual regression testing, shared tooling and unified formatting for the team.'
    ],
    print: false
  },
  {
    key: 'sandtime',
    name: 'Sandtime.io',
    client: companies.Sanddev,
    url: 'Sandtime.io',
    href: 'https://sandtime.io',
    slug: 'sandtime',
    timeFrame: 'July 2018 - present',
    icon: sandtimeIcon,
    description:
      'Multiplatform time-tracking SaaS for 4,000+ freelancers and teams.',
    tech: [
      tech.js,
      tech.react,
      tech.nodeJs,
      tech.expressJs,
      tech.Sass,
      tech.styledComponents,
      tech.Webpack,
      tech.Docker,
      tech.DockerCompose,
      tech.nginx,
      tech.mongoDB,
      tech.mongoose,
      tech.redis,
      tech.JWT,
      tech.ciCd,
      tech.Jenkins,
      tech.git,
      tech.GitLab,
      tech.elk,
      tech.puppeteer,
      tech.expo,
      tech.reactNative,
      tech.electron,
      tech.storybook,
      tech.APMSentry,
      tech.AWSS3,
      tech.paddle
    ],
    responsibilities: [
      'Founding engineer: built the product from the first commit in 2018 to its first customers, then CI/CD, end-to-end tests and subscriptions. Hands-on in 2018 to 2020, since then review, consulting and growth.',
      'Reviewed and mentored colleagues through 800+ pull requests (2018 to 2026) and onboarded new engineers. Scrum master for four years.',
      'Shipped to eight platforms, from app stores to a Chrome extension, with Electron and React Native.',
      'Took over growth: SEO and AI-search visibility built from near zero, PostHog KPI dashboards, a public MCP server and REST APIs.'
    ],
    print: true
  },
  {
    key: 'validator',
    name: 'Validator',
    client: companies.Sanddev,
    slug: 'validator',
    timeFrame: 'November 2019 - December 2019',
    icon: validatorIcon,
    description:
      'Mobile app to help users capture valid photos for ID documents, submitted to the Polish government competition GovTech.',
    tech: [
      tech.js,
      tech.react,
      tech.tensorFlow,
      tech.tensorFlowLite,
      tech.faceApi,
      tech.webAssembly,
      tech.android,
      tech.kotlin,
      tech.git,
      tech.GitLab
    ],
    responsibilities: [
      'Led a small team to deliver a working app within a tight competition deadline: on-device face detection, landmarks and face-part segmentation with TensorFlow.js in the browser and TensorFlow Lite in a Kotlin Android app around a React WebView, fully offline.',
      'Replaced an early OpenCV prototype with hand-written sharpness and color checks, built the test suite and debug tools, and wrote the submission report.'
    ],
    print: false
  },
  {
    key: 'std',
    name: 'std',
    client: companies.Sanddev,
    url: 'sanddev-com.github.io/std',
    href: 'https://sanddev-com.github.io/std/',
    slug: 'std',
    timeFrame: 'October 2019 - 2024',
    description:
      'Modern library of statically-typed modular functions for daily use in JavaScript and TypeScript projects. It served as a place to sharpen my TypeScript skills. Extensively used across the company’s projects.',
    tech: [
      tech.typeScript,
      tech.js,
      tech.rollup,
      tech.SSG,
      tech.git,
      tech.GitHub,
      tech.GitHubPages,
      tech.GitHubActions,
      tech.react,
      tech.nodeJs,
      tech.babel,
      tech.prettier,
      tech.esLint
    ],
    responsibilities: [
      'I was responsible for providing a library to reduce code duplication across the company’s repositories. I have defined module boundaries and extracted a huge chunk of utility functions to be strongly typed and included within the library. I wrote hundreds of TypeScript functions and I have covered them with tests to attain full coverage. I have been responsible for the package releases on npm and related chores. I have been performing code reviews to make sure the shared code is of high quality. With the custom static site generation toolkit, I have provided searchable and interactive documentation.'
    ],
    print: false
  },
  {
    key: 'koronaKrulow',
    name: 'Korona Krulów',
    url: 'koronakrulow.pl',
    href: 'https://koronakrulow.pl',
    slug: 'korona-krulow',
    icon: koronaKrulowIcon,
    description: 'A game about COVID-19, polish government, and propaganda.',
    tech: [tech.js, tech.react, tech.nodeJs, tech.nginx],
    responsibilities: [
      'I created and deployed a React-based game played by 100,000+ people. I have managed to publish the game within two weeks of work. The game included over 400 actions and their effects that impact the internal simulation of infections and economy and society. I have implemented a leaderboards system to make the game more competitive.'
    ]
  },
  {
    key: 'testyPrawoJazdy',
    name: 'Driver’s license tests',
    slug: 'testy-prawo-jazdy',
    url: 'testyprawojazdy.com',
    icon: testyPrawoJazdy.icon,
    description:
      'Responsive web app to prepare for the polish driving theory test exam.',
    tech: [
      tech.js,
      tech.react,
      tech.nodeJs,
      tech.babel,
      tech.esLint,
      tech.visualStudioCode,
      tech.MobX
    ],
    responsibilities: [
      'Writing the front-end with React.js, styling with CSS, designing responsive, mobile-friendly views',
      'Database design and implementation of static data as a code modules system',
      'Open-sourcing test questions and explanations along with an edit system based on Git',
      'Implementing reactive view model using MobX and performance testing',
      'Enabling server-side rendering using node.js on IIS with iis-node'
    ]
  },
  {
    key: 'promegle',
    slug: 'promegle',
    name: 'Promegle',
    url: 'promegle.com',
    icon: promegle.icon,
    description: 'Anonymous chat application for Windows Phone and web.',
    tech: [
      tech.CSharp,
      tech.js,
      tech.react,
      tech.nodeJs,
      tech.babel,
      tech.Redux,
      tech.webSockets,
      tech.Docker,
      tech.ASPDotNet,
      tech.WindowsPhone,
      tech.WindowsStore
    ],
    responsibilities: [
      'Writing the front-end with React.js, Redux, and a custom styling solution',
      'Implementing message queue system and reactive immutable database solution',
      'Implementing video calling over WebRTC along with the signaling server',
      'Automatic image classification using Yahoo’s Not Safe For Work deep neural model running on Docker',
      'Integrating with legacy ASP.NET long polling back-end servers and C# code'
    ]
  },
  {
    key: 'blog',
    name: 'Personal web page and blog',
    slug: 'blog',
    url: 'ciunkos.com',
    href: 'https://ciunkos.com',
    link: 'blog',
    icon: blog.icon,
    description: 'A static site with a personal blog and resume.',
    tech: [
      tech.js,
      tech.react,
      tech.nodeJs,
      tech.babel,
      tech.esLint,
      tech.git,
      tech.GitHub,
      tech.visualStudioCode,
      tech.Webpack
    ],
    tags: ['responsive', 'printable'],
    responsibilities: [
      'Writing the front-end with React.js, styling with CSS, using data as a code modules',
      'Designing responsive and printable resume page',
      'Static blog generation and integrating Disqus commenting system',
      'Controlling source code and data versions using Git',
      'Deploying server-side rendering with express.js with iss-node on Windows IIS'
    ]
  },
  {
    key: 'storePro',
    slug: 'store-pro',
    name: 'Store ᴾᴿᴼ',
    description:
      'A Windows Phone application with redesigned and rethought store interface.',
    url: 'storeproapp.com',
    icon: storePro.icon,
    tech: [
      tech.CSharp,
      tech.XAML,
      tech.MVVM,
      tech.ASPDotNet,
      tech.MsSQL,
      tech.visualStudio
    ],
    responsibilities: [
      'Design and development of Windows Phone 8 application using C#, XAML, and MVVM pattern',
      'Creating and deploying ASP.NET based web service and API endpoints along with a landing page',
      'Designing and managing MS SQL database and integrating it with back-end service using Entity Framework',
      'Back-end crawling services for deals discovery and sending push notifications',
      'Internationalization implementation for over 192 languages',
      'Deployment of multiple updates, maintenance work, and customer support'
    ]
  },
  {
    key: 'musicTube',
    slug: 'music-tube',
    name: 'MusicTube',
    url: 'musictube.fm',
    icon: musicTube.icon,
    description:
      'Windows Phone, Windows Store, Web App for music videos playback from YouTube.',
    tech: [
      tech.CSharp,
      tech.XAML,
      tech.MVVM,
      tech.ASPDotNet,
      tech.MsSQL,
      tech.visualStudio
    ],
    responsibilities: [
      'YouTube and Last.fm APIs integration',
      'Windows Store, Windows Phone and web app development using C#, XAML, MVVM, ASP.NET',
      'Design and management of MS SQL database along with crawling services',
      'Monetization through multiple ad networks',
      'Implementation of multi-platform shared code solution',
      'Deploying multiple updates, maintenance work and customer support'
    ]
  },
  {
    key: 'pogaduszki',
    slug: 'pogaduszki',
    name: 'Pogaduszki',
    icon: pogaduszki.icon,
    description: 'Windows Phone messenger application of Gadu-Gadu protocol.',
    tech: [
      tech.CSharp,
      tech.XAML,
      tech.MVVM,
      tech.ASPDotNet,
      tech.MsSQL,
      tech.visualStudio
    ],
    responsibilities: [
      'Development of native Windows Phone',
      'Implementation of Gadu-Gadu binary protocol',
      'Setting up a persistent proxy and push notification server',
      'Deploying multiple updates, maintenance work, and customer support'
    ]
  },
  {
    key: 'apkaTv',
    slug: 'apka-tv',
    name: 'APKA.TV',
    icon: apkaTv.icon,
    description:
      'A streaming app of Polish public TV channels for the final studies project. Made in collaboration with Grzegorz Ślązak, Justyna Witkowska and Paweł Skiba.',
    tech: [
      tech.CSharp,
      tech.XAML,
      tech.MVVM,
      tech.ASPDotNet,
      tech.MsSQL,
      tech.visualStudio
    ],
    responsibilities: [
      'Collaborative development of native Windows Store and Windows Phone applications',
      'Deployment of ASP.NET based streaming services and API endpoints',
      'Development of streaming protocol with various bitrates',
      'Designing chunked stream format which allows history playback',
      'Deploying streamer app along with hardware wiring and antennas using DVB-T adapters'
    ]
  },
  {
    key: 'kwejk',
    slug: 'kwejk',
    name: 'Kwejk.pl',
    icon: kwejk.icon,
    description: 'Kwejk.pl feed viewer application for Windows Phone.',
    client: companies.CubeInvestments,
    tech: [tech.CSharp, tech.XAML, tech.MVVM, tech.ASPDotNet, tech.REST],
    responsibilities: [
      'Development of Windows Phone application based on client’s provided project using XAML, MVVM, and C#',
      'Integration with existing web APIs',
      'Collaboration with the project owner and the rest of the team',
      'Monetization through different ad networks',
      'Deploying multiple updates after the release'
    ]
  },
  {
    key: 'ratingSpeed',
    slug: 'rating-speed',
    name: 'RatingSpeed',
    icon: ratingSpeed.icon,
    description: 'Network speed measurement app for Windows Phone.',
    client: companies.LOSO,
    tech: [tech.CSharp, tech.XAML, tech.MVVM, tech.ASPDotNet, tech.REST],
    responsibilities: [
      'Development of Windows Phone application using XAML, MVVM, and C#',
      'Implementing network speed measurement, test results statistics, and upload',
      'Implementing the design provided by the client',
      'Preparing the app for publishing in the Windows Store and providing app updates'
    ]
  },
  {
    name: 'Fast-coffee',
    slug: 'fast-coffee',
    icon: fastCoffee.icon,
    description: 'Windows Phone dating app.',
    client: companies.IT4Biznes,
    timeFrame: '2014',
    tech: [
      tech.CSharp,
      tech.XAML,
      tech.MVVM,
      tech.ASPDotNet,
      tech.socketIO,
      tech.visualStudio
    ],
    responsibilities: [
      'Implementing real-time chatting with socket.io',
      'Implementing chat list, chat and profile views',
      'Integrating with provided APIs',
      'Working closely with the development team'
    ]
  },
  {
    key: 'iAmRich',
    slug: 'i-am-rich',
    name: 'I Am Rich The Game',
    icon: iAmRich.icon,
    description: 'Windows PC and Windows Store turn-based simulation game.',
    client: companies.RedDotGames,
    tech: [
      tech.CPlusPlus,
      tech.XAML,
      tech.CSharp,
      tech.DirectX9,
      tech.DirectX11,
      tech.visualStudio
    ],
    responsibilities: [
      'Development of native Win32 game in C++ with a DirectX renderer',
      'Networking protocol with Winsock, supporting up to four players',
      'Implementation of provided game design and assets',
      'Porting to Windows Store as hybrid native and C# app',
      'Deploying to the app store and providing updates'
    ],
    text: 'I Am Rich is an unique time management game where your goal is to succeed at your avatar’s life. Have you ever imagined to work as a salesman or as a broker? In this game you can be whoever you want! Have fun playing with your friends or with a computer opponents in local multiplayer for up to 4 players. Buy all the items to decorate your own apartament, graduate from the university, work hard and gain so much money so you are the richest person in the world!',
    fetures: [
      'Local multiplayer for up to 4 players',
      'Player versus player or AI gameplay',
      'Over 50 achievements to be unlocked!',
      'Autosave after each turn - continue your game whenever you want',
      'Roamed saves - continue your game on whichever computer you are'
    ]
  },
  {
    key: 'platformerGameEngine',
    name: 'Platformer game engine',
    slug: 'platformer-game-engine',
    icon: platformerGameEngine.icon,
    description:
      'Windows PC and Xbox 360 platformer game engine with a built-in editor.',
    client: companies.RedDotGames,
    tech: [tech.CSharp, tech.DirectX9, tech.XNA, tech.visualStudio],
    responsibilities: [
      'Development of XNA game engine',
      'Creation of game editor with support for live play',
      'Implementation of various game mechanics'
    ]
  },
  {
    key: 'classicGames',
    name: 'Classic Windows PC games',
    slug: 'classic-games',
    icon: classicGames.icon,
    description: 'Classic, fun, little Windows PC games.',
    tech: [tech.CPlusPlus, tech.DirectX9, tech.visualStudio],
    responsibilities: [],
    downloadUrl: '/classics.zip',
    exclude: true
  }
]

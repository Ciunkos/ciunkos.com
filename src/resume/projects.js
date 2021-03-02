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

export default [
  {
    key: 'profilometry',
    name: 'Undisclosed',
    slug: 'profilometry',
    timeFrame: 'July 2017 - present',
    description:
      'Web application for rendering, manipulation, and storage of 3D scans from profilometers, AFMs, and other 3D microscopes. A bespoke solution for a leading company that manufactures profilometry devices and is focused on thin-film measurements.',
    tech: [
      tech.js,
      tech.react,
      tech.Redux,
      tech.reduxThunk,
      tech.nodeJs,
      tech.CSharp,
      tech.EntityFramework,
      tech.mySql,
      tech.mySqlWorkbench,
      tech.dotNetCore,
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
      'I was responsible for full-stack software development using a modern React-based frontend with C# powered backend services to provide a web-based app that allows 3D image visualization and processing. During this project, I have learned how to work with an on-site and remote team to deliver a great product that satisfies client’s and users’ needs. I had gained experience with git workflow and collaboration with other developers. I had been performing code reviews and delivered high-quality code. I had also been responsible for the integration of external libraries and close cooperation with the APIs provider, which often resulted in a need for providing detailed bug reports and test cases. I’ve been continuously focused on providing great user experience, performance, and security, which is why I have brought in many useful solutions like visual regression detection toolkit, secret leakage prevention and configured and optimized the build process to yield the optimal bundle and improve the development experience.'
    ],
    print: true
  },
  {
    key: 'sandtime',
    name: 'Sandtime.io',
    url: 'sandtime.io',
    href: 'https://sandtime.io',
    slug: 'sandtime',
    timeFrame: 'January 2019 - present',
    icon: sandtimeIcon,
    description:
      'In-house multiplatform SaaS time tracking system to improve workflows of creative people. With the automatic time tracking and integrations, it makes all the parties involved in projects credible and accountable.',
    tech: [
      tech.js,
      tech.react,
      tech.Redux,
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
      'I was responsible for leading the project starting from creating the project vision, defining the microservices-based architecture powered by Docker containers, then by delivery of an MVP and continuous development of new features. During this project, I have also been performing a Scrum Master role and helped my teammates to deliver the desired product that meets users’ and stakeholders’ needs. I was responsible for setting up continuous integration, delivery, and deployment to shorten iteration and delivery cycles. I have introduced an end-to-end testing solution to maintain high quality and reduce risks of broken deployments. I have managed to get the app to multiple platforms and app stores (Windows, macOS, Linux, Windows Store, Mac App Store, Chrome Extension, Android, iOS) by using cross-platform tools like Electron and React Native. I was responsible for the external payment system integration and setting up a subscription model.'
    ],
    print: true
  },
  {
    key: 'validator',
    name: 'Validator',
    slug: 'validator',
    timeFrame: 'November 2019 - December 2019',
    icon: validatorIcon,
    description:
      'Mobile app to help users capture perfect photos for ID documents. The app was submitted to the Polish government competition GovTech. The project scored 5th place out of more than 50 submissions.',
    tech: [
      tech.js,
      tech.react,
      tech.tensorFlow,
      tech.tensorFlowLite,
      tech.faceApi,
      tech.openCV,
      tech.webAssembly,
      tech.android,
      tech.kotlin
    ],
    responsibilities: [
      'I was responsible for leading a small team to deliver a fully functional app that meets the competition’s requirements within a tight deadline. I have incorporated AI-based solutions and libraries to tackle the problem with near-real-time performance in mind. I have integrated React-based frontend with native Kotlin-based Android app that ran bare-metal models for extended performance on mobile, while still being able to run the app entirely on the web, fully offline. I have implemented a complex image detection and processing pipeline using face-api.js, OpenCV, TensorFlow, and custom functions. To achieve proper results, I have provided an extensive test suite, debug and visualization tools, and gathered a huge set of samples. Finally, I wrote a submission paper with a detailed report and documentation.'
    ],
    print: true
  },
  {
    key: 'std',
    name: 'std',
    url: 'sandstreamdev.github.io/std',
    href: 'https://sandstreamdev.github.io/std',
    slug: 'std',
    timeFrame: 'October 2019 - August 2020',
    description:
      'Modern library of statically-typed modular functions for daily use in JavaScript and TypeScript projects. It served as a place to sharpen my TypeScript skills. Extensively used across the company’s projects.',
    tech: [
      tech.typeScript,
      tech.js,
      tech.rollup,
      tech.SSG,
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
    print: true
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
      'I created and deployed a React-based game played by hundreds of thousands of people. I have managed to publish the game within two weeks of work. The game included over 400 actions and their effects that impact the internal simulation of infections and economy and society. I have implemented a leaderboards system to make the game more competitive.'
    ]
  },
  {
    key: 'testyPrawoJazdy',
    name: 'Driving licence tests',
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
      'Writing the front-end with React.js, styling with CSS, designing resposive, mobile friendly views',
      'Database design and implementation of static data as a code modules system',
      'Open sourcing test questions and explanations along with an edit system based on Git',
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
      tech.js,
      tech.react,
      tech.nodeJs,
      tech.babel,
      tech.Redux,
      tech.webSockets,
      tech.Docker,
      tech.CSharp,
      tech.ASPDotNet
    ],
    responsibilities: [
      'Writing the front-end with React.js, Redux and custom styling solution',
      'Implementing message queue system and reactive immutable database solution',
      'Implementing video calling over WebRTC along with the signaling server',
      'Automatic image classification using Yahoo’s Not Safe For Work deep neural model running on Docker',
      'Integrating with legacy ASP.NET long polling back-end servers and C# code'
    ]
  },
  {
    key: 'blog',
    name: 'Personal web page and blog.',
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
      'Design and development of Windows Phone 8 application using C#, XAML and MVVM pattern',
      'Creating and deploying ASP.NET based web service and API endpoints along with a landing page',
      'Designing and managing MS SQL database and integrating it with back-end service using Entity Framework',
      'Back-end crawling services for deals discovery and sending push notifications',
      'Internationalization implementation for over 192 languages',
      'Deployment of multiple updates, maintenance work and customer support'
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
      'Setting up persistent proxy and push notification server',
      'Deploying multiple updates, maintenance work and customer support'
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
    tech: [
      tech.CSharp,
      tech.XAML,
      tech.MVVM,
      tech.ASPDotNet,
      tech.MsSQL,
      tech.visualStudio
    ],
    responsibilities: [
      'Development of Windows Phone application based on client’s provided project using XAML, MVVM and C#',
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
    tech: [
      tech.CSharp,
      tech.XAML,
      tech.MVVM,
      tech.ASPDotNet,
      tech.MsSQL,
      tech.visualStudio
    ],
    responsibilities: [
      'Development of Windows Phone application using XAML, MVVM and C#',
      'Implementing network speed measurement, test results statistics and upload',
      'Implementing the design provided by the client',
      'Preparing app for publishing in the Windows Store and providing app updates'
    ]
  },
  {
    name: 'Fast-coffee',
    slug: 'fast-coffee',
    icon: fastCoffee.icon,
    description: 'Windows Phone dating app.',
    client: companies.IT4Biznes,
    timeRange: '2014',
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
    description:
      'Windows PC and Windows Store 4-player turn-based game simulation game.',
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
    text:
      'I Am Rich is an unique time management game where your goal is to succeed at your avatar’s life. Have you ever imagined to work as a salesman or as a broker? In this game you can be whoever you want! Have fun playing with your friends or with a computer opponents in local multiplayer for up to 4 players. Buy all the items to decorate your own apartament, graduate from the university, work hard and gain so much money so you are the richest person in the world!',
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
    tech: [tech.CSharp, tech.DirectX9, tech.visualStudio],
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

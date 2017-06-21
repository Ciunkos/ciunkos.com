import tech from './tech'
import companies from './companies'

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

export default [
    {
        key: 'testyPrawoJazdy',
        name: 'Driving licence tests',
        slug: 'testy-prawo-jazdy',
        url: 'testyprawojazdy.com',
        icon: testyPrawoJazdy.icon,
        description: 'Responsive web app to prepare for the polish driving theory test exam',
        status: 'development',
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
        ],
        print: true
    },

    {
        key: 'promegle',
        slug: 'promegle',
        name: 'Promegle',
        url: 'promegle.com',
        icon: promegle.icon,
        description: 'Anonymous Windows Phone and web chat application',
        status: 'live',
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
            'Automatic image classification using Yahoo\'s Not Safe For Work deep neural model running on Docker',
            'Integrating with legacy ASP.NET long polling back-end servers and C# code'
        ],
        print: true
    },

    {
        key: 'blog',
        name: 'Personal web page and blog',
        slug: 'blog',
        url: 'ciunkos.com',
        link: 'blog',
        icon: blog.icon,
        description: 'Static site with personal blog and resume.',
        status: 'live',
        tech: [
            tech.js,
            tech.react,
            tech.nodeJs,
            tech.babel,
            tech.esLint,
            tech.git,
            tech.gitHub,
            tech.visualStudioCode,
            tech.Webpack
        ],
        tags: [
            'responsive',
            'printable'
        ],
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
        description: 'Windows Phone application.',
        url: 'storeproapp.com',
        icon: storePro.icon,
        status: 'unmaintained',

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
        name: 'Music Tube',
        url: 'musictube.fm',
        icon: musicTube.icon,
        description: 'Windows Phone, Windows Store, Web App for music videos playback from YouTube.',
        status: 'unmaintained',
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
        description: 'Polish public TV streaming app for the final studies project. Made in collaboration with Grzegorz Ślązak, Justyna Witkowska and Paweł Skiba.',
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
        description: 'Kwejk.pl feed viewer application for Windows Phone',
        client: companies.CubeInvestments,
        status: 'live',
        tech: [
            tech.CSharp,
            tech.XAML,
            tech.MVVM,
            tech.ASPDotNet,
            tech.MsSQL,
            tech.visualStudio
        ],
        responsibilities: [
            'Development of Windows Phone application based on client\'s provided project using XAML, MVVM and C#',
            'Integration with existing web APIs',
            'Collaboration with the project owner and the rest of the team',
            'Monetization through different ad networks',
            'Deploying multiple updates after the release'
        ],
        print: true
    },

    {
        key: 'ratingSpeed',
        slug: 'rating-speed',
        name: 'RatingSpeed',
        icon: ratingSpeed.icon,
        description: 'Network speed measurement app for Windows Phone',
        client: companies.IT4Biznes,
        status: 'unmaintaned',
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
        ],
        print: true
    },

    {
        name: 'Fast-coffee',
        slug: 'fast-coffee',
        icon: fastCoffee.icon,
        company: companies.IT4Biznes,
        description: 'Windows Phone dating app',
        client: companies.IT4Biznes,
        timeRange: '2014',
        status: 'cancelled',
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
        description: 'Windows PC and Windows Store game',
        client: companies.RedDotGames,
        status: 'unmaintained',
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
        text: "I Am Rich is an unique time management game where your goal is to succeed at your avatar's life. Have you ever imagined to work as a salesman or as a broker? In this game you can be whoever you want! Have fun playing with your friends or with a computer opponents in local multiplayer for up to 4 players. Buy all the items to decorate your own apartament, graduate from the university, work hard and gain so much money so you are the richest person in the world!",
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
        description: 'Windows PC and Xbox 360 platformer game engine',
        client: companies.RedDotGames,
        status: 'unmaintained',
        tech: [
            tech.CSharp,
            tech.DirectX9,
            tech.visualStudio
        ],
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
        description: 'Windows PC games',
        status: 'unmaintained',
        tech: [
            tech.CPlusPlus,
            tech.DirectX9,
            tech.visualStudio
        ],
        responsibilities: [
        ],
        downloadUrl: '/Classics.zip',
        exclude: true
    }
]

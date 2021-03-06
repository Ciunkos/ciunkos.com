import tech from './tech'

const Skill = (skill, value) => ({
  name: skill.name,
  value
})

export default {
  web: [
    Skill(tech.js, 3),
    Skill(tech.typeScript, 1),
    Skill(tech.react, 3),
    Skill(tech.nodeJs, 3),
    Skill(tech.Redux, 3),
    Skill(tech.reduxThunk, 2),
    Skill(tech.HTML, 3),
    Skill(tech.CSS, 3),
    Skill(tech.Sass, 2),
    Skill(tech.responsiveDesign, 3),
    Skill(tech.expressJs, 3),
    Skill(tech.Jest, 2),
    Skill(tech.HTTPS, 3),
    Skill(tech.REST, 3),
    Skill(tech.webSockets, 2),
    Skill(tech.JWT, 2),
    Skill(tech.SSR, 2),
    Skill(tech.electron, 1),
    Skill(tech.reactNative, 1),
    Skill(tech.expo, 1),
    Skill(tech.npm, 3),
    Skill(tech.Webpack, 3),
    Skill(tech.babel, 2),
    Skill(tech.rollup, 1),
    Skill(tech.esLint, 2),
    Skill(tech.prettier, 3),
    Skill(tech.ChromeDevTools, 2),
    Skill(tech.webSecurity, 2),
    Skill(tech.puppeteer, 2),
    Skill(tech.nginx, 1),
    Skill(tech.mongoDB, 2),
    Skill(tech.redis, 1),
    Skill(tech.WebGL, 1),
    Skill(tech.threeJs, 1)
  ],
  windows: [
    Skill(tech.CSharp, 3),
    Skill(tech.XAML, 3),
    Skill(tech.dotNetFramework, 2),
    Skill(tech.dotNetCore, 2),
    Skill(tech.ASPDotNet, 2),
    Skill(tech.ASPDotNetCore, 1),
    Skill(tech.LINQ, 3),
    Skill(tech.EntityFramework, 2),
    Skill(tech.MsSQL, 2),
    Skill(tech.mySql, 1),
    Skill(tech.IIS, 2),
    Skill(tech.xUnit)
  ],
  tools: [
    Skill(tech.git, 3),
    Skill(tech.GitHub, 3),
    Skill(tech.GitLab, 2),
    Skill(tech.jira, 2),
    Skill(tech.Docker, 2),
    Skill(tech.DockerCompose, 2),
    Skill(tech.ciCd, 2),
    Skill(tech.Jenkins, 2),
    Skill(tech.GitHubActions, 1),
    Skill(tech.AWS, 1),
    Skill(tech.GoogleAnalytics, 2),
    Skill(tech.CloudFlare, 2),
    Skill(tech.visualStudioCode, 3),
    Skill(tech.visualStudio, 3),

    Skill(tech.unitTesting),
    Skill(tech.e2e, 1),
    Skill(tech.scrum),
    Skill(tech.scrumMaster),
    Skill(tech.agile),
    Skill(tech.codeReview),
    Skill(tech.mentorship)
  ],
  languages: [
    Skill(tech.english, 2),
    Skill(tech.polish, 3),
    Skill(tech.js, 3),
    Skill(tech.CSharp, 3),
    Skill(tech.typeScript, 1),
    Skill(tech.CPlusPlus, 1),
    Skill(tech.Haskell, 1)
  ]
}

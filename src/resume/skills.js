import tech from './tech'

const Skill = (skill, value) => ({
  name: skill.name,
  value
})

export default {
  web: [
    Skill(tech.js, 3),
    Skill(tech.react, 3),
    Skill(tech.Redux, 3),
    Skill(tech.ImmutableJS, 2),
    Skill(tech.HTML, 3),
    Skill(tech.CSS, 3),
    Skill(tech.SASS, 1),
    Skill(tech.flexBox, 3),
    Skill(tech.grid, 1),
    Skill(tech.responsiveDesign, 3),
    Skill(tech.nodeJs, 3),
    Skill(tech.expressJs, 1),
    Skill(tech.SSR, 2),
    Skill(tech.MobX, 2),
    Skill(tech.babel, 2),
    Skill(tech.npm, 3),
    Skill(tech.yarn, 1),
    Skill(tech.Webpack, 3),
    Skill(tech.esLint, 2),
    Skill(tech.ChromeDevTools, 2),
    Skill(tech.webSecurity, 1),
    Skill(tech.Jest),
    Skill(tech.enzyme)
  ],
  windows: [
    Skill(tech.CSharp, 3),
    Skill(tech.XAML, 3),
    Skill(tech.ASPDotNet, 2),
    Skill(tech.ASPDotNetCore, 1),
    Skill(tech.LINQ, 3),
    Skill(tech.EntityFramework, 2),
    Skill(tech.MsSQL, 2),
    Skill(tech.IIS, 2),
    Skill(tech.WindowsPhone, 3),
    Skill(tech.WindowsStore, 3),
    Skill(tech.Azure, 1),
    Skill(tech.MVVM, 2)
  ],
  tools: [
    Skill(tech.visualStudio, 3),
    Skill(tech.visualStudioCode, 3),
    Skill(tech.atom, 2),
    Skill(tech.ReSharper, 2),
    Skill(tech.git, 2),
    Skill(tech.GitHub, 2),
    Skill(tech.GoogleAnalytics, 1),
    Skill(tech.CloudFlare, 2)
  ],
  languages: [
    Skill(tech.english, 2),
    Skill(tech.polish, 3),

    Skill(tech.js, 3),
    Skill(tech.CSharp, 3),
    Skill(tech.CPlusPlus, 1),
    Skill(tech.Haskell, 1)
  ]
}
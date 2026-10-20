import tech from './tech'

const Skill = (skill, value) => ({
  name: skill.name,
  value
})

export default {
  ai: [
    Skill(tech.claudeCode, 3),
    Skill(tech.codex, 3),
    Skill(tech.agentSkills, 3),
    Skill(tech.mcp, 3),
    Skill(tech.openAIApi, 3),
    Skill(tech.promptEngineering, 3),
    Skill(tech.llmAsJudge, 2),
    Skill(tech.evals, 2),
    Skill(tech.rag, 3),
    Skill(tech.pgvector, 3),
    Skill(tech.guardrails, 2)
  ],
  web: [
    Skill(tech.react, 3),
    Skill(tech.typeScript, 3),
    Skill(tech.js, 3),
    Skill(tech.NextJs, 3),
    Skill(tech.nodeJs, 3),
    Skill(tech.HTML, 3),
    Skill(tech.CSS, 3),
    Skill(tech.responsiveDesign, 3),
    Skill(tech.storybook, 2),
    Skill(tech.reactNative, 2),
    Skill(tech.electron, 2),
    Skill(tech.zod, 3),
    Skill(tech.i18n, 3),
    Skill(tech.TailwindCSS, 2),
    Skill(tech.Webpack, 3)
  ],
  data: [
    Skill(tech.REST, 3),
    Skill(tech.openApi, 3),
    Skill(tech.webSockets, 2),
    Skill(tech.SSE, 2),
    Skill(tech.expressJs, 3),
    Skill(tech.SQL, 3),
    Skill(tech.postgreSQL, 3),
    Skill(tech.mongoDB, 2),
    Skill(tech.redis, 2),
    Skill(tech.oauth, 2),
    Skill(tech.webSecurity, 2)
  ],
  windows: [
    Skill(tech.CSharp, 3),
    Skill(tech.net, 3),
    Skill(tech.ASPDotNet, 3),
    Skill(tech.XAML, 3),
    Skill(tech.MsSQL, 2)
  ],
  tools: [
    Skill(tech.playwright, 3),
    Skill(tech.Jest, 2),
    Skill(tech.visualRegression, 3),
    Skill(tech.axe, 2),
    Skill(tech.checkly, 2),
    Skill(tech.e2e, 3),
    Skill(tech.git, 3),
    Skill(tech.GitHub, 3),
    Skill(tech.GitHubActions, 3),
    Skill(tech.ciCd, 3),
    Skill(tech.Docker, 2),
    Skill(tech.nginx, 2),
    Skill(tech.cloudflareWorkers, 3),
    Skill(tech.cloudflare, 3),
    Skill(tech.vercel, 2),
    Skill(tech.postHog, 3),
    Skill(tech.Datadog, 2),
    Skill(tech.owaspAsvs, 2),
    Skill(tech.jira, 2),
    Skill(tech.scrum),
    Skill(tech.scrumMaster),
    Skill(tech.codeReview),
    Skill(tech.mentorship)
  ]
}

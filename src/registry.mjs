/* Deployment inventory: this repository exports static Cloudflare Pages assets only.
   Paid APIs and Workers under ciunkos.com have separate registrations in hamulec.
   Check hamulec's emergency/fault latch before publishing; never clear it here. */
export const STATIC_SITES = {
  ciunkos: {
    repo: 'ciunkos.com',
    provider: 'Cloudflare Pages',
    productionBranch: 'master',
    outputDirectory: 'dist',
    dependencies: [],
    paidComputeCeilingUsd: 0,
    shutdown:
      'Preserve static pages and PDFs; stop builds if the account latch is set. No functions, containers, cron or paid API calls are deployed here.'
  }
}

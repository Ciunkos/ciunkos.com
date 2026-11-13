Since November I have been a programmer without a client. I am a full-stack developer with 15 years of experience, and nobody is buying full-stack development. In the same twelve months, open roles for [Forward Deployed Engineers](https://ciunkos.com/glossary/forward-deployed-engineer) grew 4.6 times.

```chart
role-shift
```

> [!WARNING]
> I am not neutral. I am looking for a Forward Deployed Engineer role myself, and this post is part of how I look. Every number links to its source.

> [!TLDR]
> A Forward Deployed Engineer (FDE) is a software engineer who works inside the customer's team and answers for the result the customer gets. AI agents write the code now, so companies pay for what agents can't do: finding the right problem and making the fix stick. Front-end and mobile openings fell by about half in a year. FDE openings grew 4.6 times and are still about 2 in 100 engineering roles. If you write code for a living, start moving now.

Developers: this is a warning from someone who moved too late. Business owners: this is what an FDE does in your company and what it costs. Hiring one? Skip to [Looking for an FDE?](#hire)

## They took our jobs {#they-took-our-jobs}

```chart
they-took-our-jobs
```

Lenny Rachitsky, whose [job market report](https://www.lennysnewsletter.com/p/state-of-the-tech-job-market-late) the chart above comes from, reads it this way: the specialised disciplines are collapsing into smaller teams with broader ownership, and AI made that possible.

I agree, because I lived it. For years my value was that I could do the front end, the back end and the deployment. Today an agent does all three while I make coffee.

The job ads hide a second problem. Companies advertise more and hire less.

```chart
openings-vs-hires
```

Two cautions. The first chart counts job titles, so part of the FDE growth is sales engineers with a new name. And an open role is an intention, not a hire.

The damage is uneven. New-graduate hiring at the biggest tech companies is [down about 65% against 2019](https://www.signalfire.com/blog/signalfire-state-of-talent-report-2026), and about 76% at early-stage startups. Employment of 22 to 25-year-olds in the jobs most exposed to AI is [about 19% below](https://digitaleconomy.stanford.edu/news/canariesaug26/) where it would otherwise be. Seniors mostly keep their jobs. Juniors don't get in.

### And in Poland {#poland}

I live in Wrocław, so I checked whether this is only an American story. It is ours too, with a delay.

```chart
poland
```

The ads came back in 2025. A junior front-end ad still gets 146 applications. I track the Polish numbers on my own [IT job radar](https://ciunkos.com/radar-pracy-it) (in Polish).

```chart
they-took-my-job
```

At a meetup this week I introduced myself as a _programista bezklientowy_, a clientless programmer. People laughed. Then a few asked how long I had been looking.

## What is a Forward Deployed Engineer? {#what-is-fde}

A Forward Deployed Engineer is a software engineer who works inside a customer's team, builds on top of an existing product or model, and answers for whether the customer's problem got solved.

Palantir invented the role in the early 2010s and called these engineers Deltas. [Until about 2016](https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers) it had more of them than regular software engineers. The split is simple: a product engineer builds one capability for many customers, and a forward deployed engineer uses many capabilities for one customer.

For a decade almost nobody copied this, because it looked like expensive consulting. Then the AI labs found that selling a model is easy and getting it to work inside a bank is hard. OpenAI, Anthropic, Databricks and Google now hire FDEs. In June 2026 [AWS put $1 billion](https://www.aboutamazon.com/news/aws/aws-1-billion-forward-deployed-ai-engineers) behind a forward deployed organisation.

```chart
fde-compare
```

Look at the "Answers for the result after launch" column. A consultant leaves after the slides. An [outsourced team](https://ciunkos.com/glossary/staff-augmentation) closes tickets. An FDE is still there on the Monday after the demo, when people either use the thing or quietly go back to Excel.

It is an engineering job. Of [1,000 FDE job ads](https://bloomberry.com/blog/i-analyzed-1000-forward-deployed-engineer-jobs-what-i-learned/), none carried a sales quota and two thirds asked for Python.

## Why now {#why-now}

Senior developers who sat in client meetings still spent most of their time on implementation and architecture. Claude Code, ChatGPT and Codex do that work in minutes. It used to take me hours, days or weeks.

In 2026, [coding agents](https://ciunkos.com/glossary/coding-agent) built about two thirds of the merged pull requests across two products I worked on, nearly all of them through my review. Today AI writes 100% of my code. I type by hand only when I hit a usage limit or something exceptional breaks.

On Sandtime I took over growth and built search and AI-search visibility from near zero. A few years ago that meant a full-time hire. This time an agent did most of it.

> [!PRZEMO]
> The agent did the work. I knew which work was worth doing.

So the bottleneck moved. Code is cheap. Knowing what to build, wiring it into a company's real systems and getting people to use it is the expensive part. One FDE engagement at Qualcomm [cut multi-day workflows to minutes](https://www.databricks.com/blog/forward-deployed-engineering-delivering-business-outcomes-ai). Nobody at Qualcomm was short of code.

Coding is dead. Programming is fine, because [coding is not programming](https://lnkd.in/p/d9ymUTAa). AI does more of the work every month, and every month there is more work to do.

```chart
day-shift
```

## Two days at a freight forwarder {#discovery}

Take a freight forwarding company with forty people. Transport orders arrive by email as PDFs. Dispatchers retype them into the transport system by hand. A wrong digit in a postcode sends a truck to the wrong town, and invoices go out late because nobody matched the delivery notes. The owner has heard about AI and has no million-złoty budget for a "digital transformation".

The call usually comes because the boss says "our competitors are doing AI, we want AI too". The owner often can't say where the money leaks, so the first job is to find out.

```chart
fde-loop
```

I sit with the people who do the work. On site if the work is on site. If it is remote, I read the Slack or Teams channels and the repositories, and I join the calls. This takes two days, not a department.

Then you get a plan with numbers: what can be automated, what each piece costs and what it saves, counted on your real costs. You decide whether we continue. Try your own numbers:

```chart
roi
```

Two days of [paid discovery](https://ciunkos.com/glossary/paid-discovery-phase) are 16 hours at my [standard rate](https://ciunkos.com/pricing): $720, or 2,880 zł net. Same price for everyone.

Sometimes the honest result is that AI makes no sense for you today. Then you paid for that answer before spending ten times more on a [pilot](https://ciunkos.com/glossary/poc-vs-pilot). This changes fast, so we look again in a few weeks, and the second look is cheaper.

Most AI projects die between the pilot and daily use. People get an official tool that is awkward, so they keep using their own. That is [shadow IT](https://ciunkos.com/glossary/shadow-it-shadow-ai), and with chatbots, [shadow AI](https://ciunkos.com/glossary/shadow-ai). So training and corrections are part of the job. After six weeks I come back and measure, like [Magda Gessler](https://en.wikipedia.org/wiki/Magda_Gessler), the Polish restaurant-rescue show host.

```chart
red-flags
```

## Is this just consulting with a better title? {#rebrand}

Some of it is. Chris Degnan, the former Snowflake CRO, [called the FDE](https://letsdatascience.com/news/chris-degnan-critiques-forward-deployed-engineer-role-e05975bb) "a glorified professional services person". A Gartner analyst [says](https://www.ciodive.com/news/can-forward-deployed-engineers-fdes-fix-ai-gartner/831833/) many vendors use "forward deployed" for ordinary implementation work because it sounds more strategic. Andreessen Horowitz argued both sides: startups should [trade margin for this work](https://a16z.com/services-led-growth/), and most companies copying Palantir will [end up as expensive services businesses](https://a16z.com/the-palantirization-of-everything/).

The market is also smaller than the headlines.

```chart
fde-share
```

My test for real FDE work has three questions. Does the person ship code to production? Do they stay after launch? Does anyone measure the result in money or hours six weeks later? Three yeses, and I don't care what the role is called. I expect every outsourcing and body-leasing company in Poland to repaint itself as FDE within a year, so ask.

## What it pays {#pay}

```chart
pay
```

These are advertised ranges. In the US, the big labs advertise $180,000 to $320,000 in base salary. In Poland, Google pays an employee about $70,000 a year before bonus and stock, and agencies advertise 250 to 400 zł an hour for senior contractors, which is $120,000 to $190,000 a year. My own price works out to $90,000.

B2B money is before your own taxes, insurance, holidays and sick days. And the agency market is thinner than it looks: my scan of about 14,000 openings this month found roughly 120 FDE-type roles, about 30 of them in Poland or remote in the EU, and the same end client often appears in four agency ads.

## How to get there {#how-to}

### If you are a junior {#junior}

A panel I sat on this week asked whether programmers will still be needed. My answer surprised the room: juniors today have it better than juniors ten years ago.

Back then you asked on Stack Overflow and waited hours or days for someone experienced to bother answering. Today AI explains a new subject at once, as many times as you need, and you can switch technologies in weeks.

The price is a higher entry bar. Today's junior has to work at the level of yesterday's senior, because the simple tasks juniors learned on are gone. AI will train juniors. Seniors won't have the time. And knowledge still pays: in [400,000 Claude Code sessions](https://www.anthropic.com/research/claude-code-expertise), people who knew the task's domain succeeded about twice as often as novices.

### If you are a mid-level developer {#mid}

Nothing teaches like your own business. Launch an app or a small online business and meet the problems real owners have.

Or help someone you know who runs a company. My cousin puts up billboards for a living. I would build him a site with AI that shows his TikTok content and brings him customers. He is family, and I would still have to talk to a client, agree on what done means and fix what he doesn't like. Employers ask about exactly that.

### If you are a senior {#senior}

Let go of the arcane skills. Typing commands from memory was a point of pride, and it is worth nothing now. Let AI take the manual work and point your attention at problems that hurt someone. There are more of them than before.

```chart
let-it-go
```

The first thing I threw out of my own day was writing code by hand. Claude Code and the [harnesses](https://ciunkos.com/glossary/agent-harness) around it write better code than most programmers, me included on many days.

For most of 15 years I was paid to build. The last two were different: mini-projects straight from idea to implementation, experiments, R&D, presentations to clients and feedback the same week. FDE work without the title. What I can teach is problem solving. What I still practise is communication and being open to new contacts, so I practise in public. This post is part of it.

## Who pays for this {#cost}

For a business, automation is a pure gain, and the first savings are jobs. A voicebot can replace hundreds or thousands of call-centre consultants. The same is happening to junior and mid-level programmers, who were always expensive, even at entry level. An agent does the work at once and doesn't complain.

When I show a client the [return on a deployment](https://ciunkos.com/glossary/ai-roi), part of that number is positions they no longer need. What they do with it is their decision. I won't pretend the number is something else.

The whole society pays. In Poland much of our industry works on B2B contracts, so companies never carried the social costs of the people they now let go. Most programmers I know own a flat and have savings. But many were not ready for the speed. The first signals came at the start of the year. By May there were waves.

```chart
layoffs
```

I am not writing this to scare you. Look at the chart, then at your own calendar. Moving is easiest while you still have a client.

## My bets {#bets}

These are opinions. I have no sources for them and I may be wrong. I hope I'm wrong!

**The FDE role will disappear too.** We are all optimising for it, and in a few years it won't be needed either. I am applying for a job I expect to become obsolete.

**"Architecture and security will stay with humans" is bullshit.** People said the same about writing code two years ago.

**Companies will become hive minds.** Google already is one: [no human reviews a Chrome extension](https://lnkd.in/p/dzDxxS-5) any more. Most of a business could run as a mass of agents with a board on top. Later, maybe without the board.

**One thing will not age.** Programmers were always well paid because we were expected to change. The technology rotated every few years, and you could not stand still.

```chart
shifts
```

Many people in this industry have not lived through a shift yet. This one is faster than the earlier ones, but the deal is the same: everything flows, and we get paid for flowing with it. That is what [agile](https://agilemanifesto.org/) means when you take it out of the corporate slide deck.

So I am optimistic. Businesses have more problems than ever and less patience for them. Somebody has to walk in, find the one that costs the most and fix it. For the next few years that somebody is called an FDE.

## FAQ {#faq}

### What does FDE stand for? {#faq-stands-for}

Forward Deployed Engineer. Palantir's own title is Forward Deployed Software Engineer (FDSE). Some companies write "forward deployment engineer" or "deployed engineer" for the same job.

### What is the difference between an FDE and a solutions engineer? {#faq-solutions-engineer}

A solutions or [sales engineer](https://ciunkos.com/glossary/sales-engineer) works before the sale, builds demos and is often measured on the deal. An FDE works after the sale, ships production code inside the customer's systems and is measured on whether the customer got the result.

### Do Forward Deployed Engineers write code? {#faq-code}

Yes, and they ship it to production. In 2026 agents write most of that code while the FDE directs and reviews them, which leaves more time for the customer.

### How much does a Forward Deployed Engineer earn? {#faq-pay}

In the US, the median total compensation is [$225,000 a year](https://www.levels.fyi/t/software-engineer/title/forward-deployed-engineer), and ads at AI labs go up to $320,000 in base salary. In Poland, ads in November 2026 range from about $70,000 a year on employment to $120,000 to $190,000 a year on B2B.

### Can a junior become an FDE? {#faq-junior}

Most ads ask for five or more years. Palantir is the exception and has advertised the role to graduates. The practical route is to become a solid engineer first and get customer experience on the side, even with a friend's small business.

### Are there FDE jobs in Poland? {#faq-poland}

Yes. Google hires FDEs in Warsaw and Wrocław, and consultancies and agencies advertise the role too. It is a small market: on 13 November 2026 there were [32 open FDE postings in Poland](https://ciunkos.com/job-finder-ai/forward-deployed-engineer-jobs-poland) from 28 employers, two thirds of them remote. [Job Finder AI](https://ciunkos.com/job-finder-ai) matches your CV against open offers, FDE roles included.

## Looking for an FDE? {#hire}

I am a senior engineer from Wrocław with nine years inside client teams and two years of building with agents. One honest gap: I have scoped, estimated and priced work, but I have not closed enterprise deals. I work best where I can see the user and the result.

```chart
hire
```

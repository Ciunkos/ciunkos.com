Since November I have been a programmer without a client. I am a full-stack developer with 15 years of experience, and right now nobody is buying full-stack development. In the same twelve months, open roles for [Forward Deployed Engineers](https://ciunkos.com/glossary/forward-deployed-engineer) grew 4.6 times.

```chart
role-shift
```

> [!WARNING]
> I am not neutral. I am looking for a Forward Deployed Engineer role myself, and this post is part of how I look. Every number links to its source so you can check me.

> [!TLDR]
> A Forward Deployed Engineer (FDE) is a software engineer who works inside the customer's team and answers for the result the customer gets. AI agents now write most code in minutes, so companies pay for the part agents can't do: finding the right problem and making the fix stick. Front-end and mobile openings fell by about half in a year. FDE openings grew 4.6 times, but they are still about 2 in 100 engineering roles. If you write code for a living, start moving now.

This post is for three readers. If you are a developer, it is a warning from someone who moved too late. If you run a business, it shows what an FDE does in your company and what it costs. If you are hiring one, skip to [Looking for an FDE?](#hire)

## They took our jobs {#they-took-our-jobs}

```chart
they-took-our-jobs
```

Lenny Rachitsky's [job market report from 10 November 2026](https://www.lennysnewsletter.com/p/state-of-the-tech-job-market-late) counts open roles at more than 9,000 tech companies. In one year, front-end engineer openings fell 51%, Android 47%, iOS 46% and mobile 39%. Backend grew 4.2%. Forward deployed engineer grew 361%.

His reading is that the specialised, siloed disciplines are collapsing into smaller teams with broader ownership, and that AI made this possible. I agree, because I have lived it. For years my value was that I could do the front end, the back end and the deployment. Today an agent does all three while I make coffee.

The job ads hide a second problem. Companies advertise more and hire less.

```chart
openings-vs-hires
```

Two cautions before you panic. The chart at the top counts job titles in ads, so part of the FDE growth is old sales engineer roles with a new name. Lenny says so himself. And an open role is an intention, not a hire.

The damage is also uneven. [SignalFire](https://www.signalfire.com/blog/signalfire-state-of-talent-report-2026) reports that new-graduate hiring at the biggest tech companies is down about 65% against 2019, and about 76% at early-stage startups. [Stanford's Digital Economy Lab](https://digitaleconomy.stanford.edu/news/canariesaug26/) finds employment of 22 to 25-year-olds in the jobs most exposed to AI about 19% below where it would otherwise be. Seniors mostly keep their jobs. Juniors don't get in.

### And in Poland {#poland}

I live in Wrocław, so I checked whether this is an American story. It is ours too, with a delay.

```chart
poland
```

The ads came back in 2025 and the queue for each one got shorter on average. A junior front-end ad still gets 146 applications. I track the Polish numbers on my own [IT job radar](https://ciunkos.com/radar-pracy-it) (in Polish).

```chart
they-took-my-job
```

At a meetup this week I introduced myself as a _programista bezklientowy_, a clientless programmer. People laughed, and then a few of them asked how long I had been looking.

## What is a Forward Deployed Engineer? {#what-is-fde}

A Forward Deployed Engineer is a software engineer who works inside a customer's team, builds on top of an existing product or model, and answers for whether the customer's problem got solved.

Palantir invented the role in the early 2010s and called these engineers Deltas. Its job ads still say the company pioneered embedding engineers directly with customers. According to [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers), until about 2016 Palantir had more forward deployed engineers than regular software engineers. The split it describes is simple: a product engineer builds one capability for many customers, and a forward deployed engineer uses many capabilities for one customer.

For a decade almost nobody copied this, because it looked like expensive consulting. Then AI labs found that selling a model is easy and getting it to work inside a bank is hard. OpenAI, Anthropic, Databricks and Google now hire FDEs. In June 2026 [AWS put $1 billion](https://www.aboutamazon.com/news/aws/aws-1-billion-forward-deployed-ai-engineers) behind a forward deployed organisation that embeds its engineers with customers.

```chart
fde-compare
```

The column that matters is "Answers for the result after launch". A consultant leaves after the slides. An outsourced team closes tickets. An FDE is still there on the Monday after the demo, when the people on the shop floor either use the thing or quietly go back to Excel.

[Bloomberry read 1,000 FDE job ads](https://bloomberry.com/blog/i-analyzed-1000-forward-deployed-engineer-jobs-what-i-learned/) and found that none of them carried a sales quota. Two thirds asked for Python. So it is an engineering job, with customers attached.

## Why now {#why-now}

Even senior developers who sat in on client meetings used to spend most of their time on implementation and architecture. Claude Code, ChatGPT and Codex now do that work in minutes. It used to take me hours, days or weeks.

I am not guessing. In 2026, coding agents built about two thirds of the merged pull requests across two products I work on, nearly all of them through my review. On Sandtime I took over growth and built search and AI-search visibility from near zero. A few years ago that meant hiring a full-time person. This time an agent did most of it on its own.

> [!PRZEMO]
> The agent did the work. I knew which work was worth doing. That second part is the job now.

So the bottleneck moved. Code is cheap. Knowing what to build, wiring it into a company's real systems and getting people to use it is the expensive part. [Databricks describes](https://www.databricks.com/blog/forward-deployed-engineering-delivering-business-outcomes-ai) an FDE engagement at Qualcomm that cut multi-day workflows to minutes. Nobody at Qualcomm was short of code.

```chart
day-shift
```

## Two days in a window factory {#discovery}

Here is how the work looks. Take a mid-size company that makes windows and doors. A few dozen people. Orders arrive by email, the technical documents are PDFs, and sales staff retype everything into the ERP by hand. Mistakes turn into delays and complaints. The owner has heard about AI and has no million-złoty budget for a "digital transformation".

Usually the call comes because the boss says "our competitors are doing AI, we want AI too". That is fine. It is a start. But the owner often can't say where the money leaks, so the first job is to find out.

```chart
fde-loop
```

I sit with the people who do the work. On site if the work is on site. If it is remote, I read the Slack or Teams channels and the repositories, and I get on calls. This takes two days, and it does not take a department. It takes good observation and quick arithmetic.

After those two days you get a plan with numbers in it: what can be automated, what each piece costs, and what it saves, counted on your real costs. That needs some openness about wages on your side. Then you decide whether we continue.

Try your own numbers:

```chart
roi
```

Two days of discovery are 16 hours at my [standard rate of 180 zł](https://ciunkos.com/pricing), so 2,880 zł net, or $720. It is on my public price list and it is the same for everyone.

Sometimes the honest result is that AI makes no sense for you today. Then you paid for that answer, and it is worth having before you spend ten times more on a pilot. This changes fast, so we look again in a few months, and the second look is cheaper because the map already exists.

Most AI projects die between the pilot and daily use. People get an official tool that is awkward, so they keep using their own, which is what shadow IT means. That is why training and corrections are part of the job and not an extra. And after six weeks I come back and measure, like the host of _Kuchenne rewolucje_, the Polish restaurant-rescue show, who returns to see whether the kitchen kept the changes or slid back.

Three signs that an FDE can't help a company, whatever the budget: bureaucracy, rigid processes and no will to change.

## Is this just consulting with a better title? {#rebrand}

Some of it is. Chris Degnan, the former Snowflake CRO, called the FDE "a glorified professional services person" and said strong engineers should not want the job. A Gartner analyst told [CIO Dive](https://www.ciodive.com/news/can-forward-deployed-engineers-fdes-fix-ai-gartner/831833/) that many vendors now use "forward deployed" as a label for ordinary implementation work because it sounds more strategic. Andreessen Horowitz published both sides: [one essay](https://a16z.com/services-led-growth/) argues that startups should trade margin for this kind of hands-on work, and [another](https://a16z.com/the-palantirization-of-everything/) warns that most companies copying Palantir will end up as expensive services businesses.

The market is also smaller than the headlines.

```chart
fde-share
```

IT projects always had this problem. The results looked good in the presentation and less good in real use. A new title does not fix that.

My test for whether a role is real FDE work has three questions. Does the person ship code to production? Do they stay after launch? Does anyone measure the result in money or hours six weeks later? Three yeses and I don't care what the role is called. In Poland I expect every outsourcing and body-leasing company to repaint itself as FDE within a year, so ask those questions.

## What it pays {#pay}

```chart
pay
```

These are advertised ranges, so read them as what companies are willing to say in public. In the US, the big labs advertise $180,000 to $320,000 in base salary. In Poland the picture splits. Google pays an employee in Warsaw or Wrocław about 23,000 zł a month before bonus and stock. Agencies advertise 250 to 400 zł an hour for senior contractors, and my own scan of about 14,000 openings this month found roughly 120 FDE-type roles, about 30 of them in Poland or remote in the EU. One caution from that scan: the same end client often appears in four agency ads.

A B2B rate and an employment salary are not the same money. B2B is before your own taxes, insurance, holidays and sick days.

## How to get there {#how-to}

### If you are a junior {#junior}

A panel I sat on this week asked whether programmers will still be needed. My answer surprised the room: juniors today have it better than juniors ten years ago.

Back then you asked on Stack Overflow or a forum and waited hours or days for someone experienced to bother answering. There were few such people. Today AI explains a new subject at once, as many times as you need, and lets you switch technologies in weeks.

The price is that the entry bar rises. Today's junior has to work at the level of yesterday's senior, because the simple tasks juniors used to learn on are gone. AI will train juniors. Seniors won't have the time. [Anthropic's study of 400,000 Claude Code sessions](https://www.anthropic.com/research/claude-code-expertise) shows why the knowledge still matters: sessions from people with expertise in the task succeeded about twice as often as sessions from novices.

### If you are a mid-level developer {#mid}

Nothing teaches like your own business. Launch an app or a small online business and meet the problems real owners have.

Or offer your help to someone you know who runs a company. My cousin puts up billboards for a living. The first thing I would do for him is a site built with AI that shows his TikTok content and brings him customers. He is family, and I would still have to talk to a client, agree on what done means and fix what he doesn't like. That is the experience employers ask about.

### If you are a senior {#senior}

Let go of the arcane skills. Typing commands from memory was a point of pride, and it is worth nothing now. Let AI take the manual work and point your attention at problems that hurt someone. There are more of them than before.

The first thing I threw out of my own day is writing code by hand. Claude Code and the harnesses around it write better code than most programmers, me included on many days.

What I can teach others is problem solving. What I still lack for this role is communication and being open to new contacts. I spent 15 years being paid to sit quietly and build, so I am practising in public. This post is part of that.

> [!NOTE]
> Does AI really make experienced developers faster? A [2025 METR study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) found 16 open-source developers were 19% slower with AI while believing they were 20% faster. [METR's 2026 update](https://metr.org/blog/2026-02-24-uplift-update/) says that result is now out of date and that its newer data points the other way but is unreliable. My own experience since then matches the update.

## Who pays for this {#cost}

I would rather say this plainly. For a business, automation is a pure gain, and the first savings are jobs. A voicebot can replace hundreds or thousands of call-centre consultants. The same thing is happening to junior and mid-level programmers, and programmers were always expensive, even at entry level. An agent does the work at once and doesn't complain.

When I show a client the return on a deployment, part of that number is positions they no longer need. It is their decision what to do with it, but I won't pretend the number is something else.

The whole society pays for this. In Poland a large part of our industry works on B2B contracts, which means companies never carried the social costs of the people they are now letting go. Most programmers I know own a flat and have savings, so it is not a catastrophe for them. But many were not ready for the speed. The first signals came at the start of the year, and nine months later there were waves of layoffs.

I want this post to bring a few people down to earth. Some still think they have time.

## My bets {#bets}

These are opinions. I have no sources for them and I may be wrong.

**The FDE role will disappear too.** We are all optimising for it now, and in a few years it will not be needed either. I am applying for a job I expect to become obsolete.

**"Architecture and security will stay with humans" is bullshit.** People said the same about writing code two years ago. Models will handle both.

**Companies will become hive minds.** Most of a business, even at Google's size, could become a mass of agents with a board on top. Later, maybe without the board. I think this is a matter of a few years.

**One thing will not age.** Programmers were always well paid because we were expected to change. The technology rotated every few years, and you could not stand still.

```chart
shifts
```

Many people in this industry have not lived through a shift yet, because they come a few years apart. This one is faster than the earlier ones. But it is the same deal we always had: everything flows, and we get paid for flowing with it. That is what agile means when you take it out of the corporate slide deck.

So I am optimistic. Businesses have more problems than ever and less patience for them. Somebody has to walk in, find the one that costs the most and fix it. For the next few years that somebody is called an FDE.

## FAQ {#faq}

### What does FDE stand for? {#faq-stands-for}

Forward Deployed Engineer. Palantir's own title is Forward Deployed Software Engineer (FDSE). Some companies write "forward deployment engineer" or "deployed engineer" for the same job.

### What is the difference between an FDE and a solutions engineer? {#faq-solutions-engineer}

A solutions or sales engineer works before the sale, builds demos and is often measured on the deal. An FDE works after the sale, ships production code inside the customer's systems and is measured on whether the customer got the result.

### Do Forward Deployed Engineers write code? {#faq-code}

Yes, and they ship it to production. In 2026 much of that code is written by agents that the FDE directs and reviews, which leaves more time for the customer.

### How much does a Forward Deployed Engineer earn? {#faq-pay}

In the US, [Levels.fyi](https://www.levels.fyi/t/software-engineer/title/forward-deployed-engineer) reports a median total compensation of $225,000, and ads at AI labs go up to $320,000 in base salary. In Poland, public ads in November 2026 range from about 23,000 zł a month on employment to 250 to 400 zł an hour on B2B.

### Can a junior become an FDE? {#faq-junior}

Most ads ask for five or more years. Palantir is the exception and has advertised the role to graduates. The practical route is to become a solid engineer first and get customer experience on the side, even with a friend's small business.

### Are there FDE jobs in Poland? {#faq-poland}

Yes. Google hires FDEs in Warsaw and Wrocław, and consultancies and agencies advertise the role too. It is still a small market: in my scan this month, about 30 roles were in Poland or remote in the EU.

## Looking for an FDE? {#hire}

I am a senior engineer from Wrocław who has spent nine years inside client teams and the last two building with agents. I am honest about my gaps: I have scoped, estimated and priced work, but I have not closed enterprise deals. I work best where I can see the user and the result.

```chart
hire
```

## Sources {#sources}

- Lenny Rachitsky, [State of the tech job market: late 2026](https://www.lennysnewsletter.com/p/state-of-the-tech-job-market-late), with data from TrueUp and Live Data Technologies
- Gergely Orosz, [Forward deployed engineers](https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers), The Pragmatic Engineer
- Amazon, [AWS invests $1 billion in forward deployed AI engineers](https://www.aboutamazon.com/news/aws/aws-1-billion-forward-deployed-ai-engineers)
- Databricks, [Forward deployed engineering: delivering business outcomes with AI](https://www.databricks.com/blog/forward-deployed-engineering-delivering-business-outcomes-ai)
- Bloomberry, [I analyzed 1,000 forward deployed engineer jobs](https://bloomberry.com/blog/i-analyzed-1000-forward-deployed-engineer-jobs-what-i-learned/)
- Fortune, [Forward deployed engineers are a fast-growing six-figure job](https://fortune.com/2026/09/03/forward-deployed-engineers-fast-growing-six-figure-silicon-valley-job-integrate-ai-with-customers-tech-careers-palantir/), with Lightcast data
- CIO Dive, [Can forward deployed engineers fix AI?](https://www.ciodive.com/news/can-forward-deployed-engineers-fdes-fix-ai-gartner/831833/)
- Andreessen Horowitz, [Trading margin for moat](https://a16z.com/services-led-growth/) and [The Palantirization of everything](https://a16z.com/the-palantirization-of-everything/)
- SignalFire, [State of Talent Report 2026](https://www.signalfire.com/blog/signalfire-state-of-talent-report-2026)
- Stanford Digital Economy Lab, [Canaries in the coal mine, August 2026 update](https://digitaleconomy.stanford.edu/news/canariesaug26/)
- METR, [2025 study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) and [2026 update](https://metr.org/blog/2026-02-24-uplift-update/)
- Anthropic, [Agentic coding and persistent returns to expertise](https://www.anthropic.com/research/claude-code-expertise)
- Just Join IT, [the Polish IT market in 2025](https://justjoin.it/blog/rynek-it-w-polsce-2025-stabilizacja-i-koniec-kryzysu-raport)
- Antyweb, [the IT job market in 2026](https://antyweb.pl/rynek-pracy-it-2026), citing No Fluff Jobs
- Levels.fyi, [Forward Deployed Engineer compensation](https://www.levels.fyi/t/software-engineer/title/forward-deployed-engineer)

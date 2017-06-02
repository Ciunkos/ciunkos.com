import React from 'react'
import styled from 'styled'
import { Page, Section, ActionButton, InlineLink, Button } from 'components'
import { HeaderBar } from 'components/Header'
import {
    CheckBoxOutlineBlank,
    AccountCircle,
    School,
    Poll,
    BusinessCenter,
    CheckBox,
    ArrowDownward,
    ArrowBack,
    ArrowForward
} from 'icons'
import ProfilePicture from 'assets/profile-picture.jpg';
import {
    photo14870587922750ad4aaf24ca7,
    photo1441109296207fd911f7cd5e5,
    photo1468322638156074863f9362e,
    photo14603245588408df3143cd908
} from 'assets/backgrounds'
import { bio, skills, contracts, projects, goals, social, interests } from 'resume'
import './styles'

const ProjectCallToAction = () =>
<styled.Card ProjectCard tag="a" href="/about#contact" card-1 middle media-no-print center padding-2 style={{ justifyContent: 'space-around', color: 'white', background: 'rgba(255,255,255,0.1)' }}>
    <h2 style={{ textAlign: 'center', marginLeft: 72, marginRight: 72 }}>Your next project can be here</h2>
    <Button primary active middle center full-width shadow-1>Contact me</Button>
</styled.Card>

const Skills = ({ skills }) =>
<styled.Skills tag="ul" dot-separated horizontal wrappable spacing vertical-spacing>
{
    skills.map(skill =>
        <styled.Skill key={skill.name} tag="li" horizontal wrappable spacing>
            <styled.SkillName>{skill.name}</styled.SkillName>
        </styled.Skill>
    )
}
</styled.Skills>

const Interests = ({ interests, ...rest }) =>
<styled.Interests tag="ul" dot-separated horizontal wrappable spacing vertical-spacing {...rest} >
{
    interests.map(interest => 
        <styled.Skill key={interest} tag="li" horizontal spacing>
            <styled.SkillName>{interest}</styled.SkillName>
        </styled.Skill>
    )
}
</styled.Interests>

const Goals = ({ goals, ...rest }) =>
<styled.Goals tag="ul" semicolon-separated spacing {...rest} >
{
    goals.map(goal => 
        <styled.Goal key={goal} tag="li" horizontal spacing>
            <styled.SkillIcon>
                <CheckBoxOutlineBlank />
            </styled.SkillIcon>
            <styled.SkillName tag="span" stretch>{goal}</styled.SkillName>
        </styled.Goal>
    )
}
</styled.Goals>

const id = x => x
const compose = f => g => x => f(g(x))

const splitString = x => x.split('')
const firstLetterToLowercase = ([x, ...xs]) => [x.toLowerCase(), ...xs].join('')
const splitAndThenFirstLetterToLowercase = compose(firstLetterToLowercase)(splitString)

const toSentenceCase = (part, index) => (index > 0 ? splitAndThenFirstLetterToLowercase : id)(part)
const createSentence = parts => parts.map(toSentenceCase).join(', ')

const InlineGoals = ({ goals, ...rest }) =>
<styled.InlineGoals tag="p" {...rest}>
{
    `${createSentence(goals)}.`
}
</styled.InlineGoals>

const InlineInterests = ({ interests, ...rest }) =>
<styled.InlineInterests tag="p" {...rest}>
{
    `${createSentence(interests)}.`
}
</styled.InlineInterests>

const Contracts = ({ contracts }) =>
<styled.Contracts spacing-3>
{
    contracts.map(contract =>
        <div key={contract.date} >
            <styled.Subheader Subheader>{contract.date}</styled.Subheader>
            <p>{contract.company} · {contract.title} · {contract.scope} · {contract.tech}</p>
            <p>{contract.decription}</p>
        </div>
    )
}
</styled.Contracts>

const JobPaths = () =>
<styled.JobPaths spacing-3>
    <div>
        <styled.Subheader>Since 2016</styled.Subheader>
        <p>Full-stack web developer · JavaScript</p>
    </div>
    <div>
        <styled.Subheader Subheader>2013 - 2016</styled.Subheader>
        <p>Windows app developer · C#</p>
    </div>
    <div>
        <styled.Subheader Subheader>Before 2013</styled.Subheader>
        <p>Game developer · C++, C#</p>
    </div>
</styled.JobPaths>

const routes = [
    {
        name: 'Profile',
        href: '#profile',
        icon: <AccountCircle />
    },
    {
        name: 'Education and experience',
        href: '#education-and-experience',
        icon: <School />
    },
    {
        name: 'Skills',
        href: '#skills',
        icon: <Poll />
    },
    {
        name: 'Projects',
        href: '#projects',
        icon: <BusinessCenter />
    },
    {
        name: 'Goals',
        href: '#interests-and-goals',
        icon: <CheckBox />
    }
]

const clamp = (min, max) => value => Math.max(Math.min(value, max), min)

const scroll = (direction) => {
    if (document) {
        const grid = document.getElementById('projectGrid')

        // clamping prevents scrolling to padded area
        if (grid) {
            const extent = grid.scrollWidth - grid.offsetWidth - 8
            const value = grid.scrollLeft + (direction * grid.offsetWidth)
            grid.scrollLeft = clamp(0, extent)(value)
        }
    }
}

const overflowScrollBack = () => scroll(-1)
const overflowScrollForward = () => scroll(+1)

const Resume = () =>
<Page Resume
      title="Resume - Przemysław Zalewski"
      description="Full-stack web and Windows app developer, currently living in Wroclaw. Ready to work on your next project!"
      subheader={ top => 
        <HeaderBar 
            routes={routes}
            scrolled-top={top <= 64}
            animated
            fade-in-down
            fast
            style={{ zIndex: 10 }}
        />
      }
>
    <Section Profile cover={photo14870587922750ad4aaf24ca7} id="profile">
        <Section.Content padding-2 >
            <styled.Column middle HeadingImageContainer >
                <styled.HeadingImage
                    tag="img"
                    src={ProfilePicture}
                    transition-all
                />
            </styled.Column>
            <styled.Column HeadingContent flex-2 spacing-4 >
                <h1>Przemysław Zalewski</h1>

                <styled.AboutMe>
                    <p>
                        Full-stack web and Windows app developer, currently living in Wroclaw.
                    </p>

                    <p>
                        Ready to work on your next project!
                    </p>
                </styled.AboutMe>

                <styled.Outbound>
                    <styled.Bio spacing>
                    { Object.entries(bio).map(([key, { name, value, uri, classes = {} }]) =>
                        <styled.BioEntry horizontal spacing wrappable key={key} text {...classes}>
                            <styled.BioEntryName>{name}</styled.BioEntryName>
                            <styled.BioEntryValue stretch>
                            { uri
                            ? <InlineLink href={uri}>{value}</InlineLink>
                            : value}
                            </styled.BioEntryValue>
                        </styled.BioEntry>
                    )}
                    </styled.Bio>

                    <styled.Social horizontal wrappable spacing media-no-print>
                    { Object.entries(social).map(([key, { name, icon, url }]) =>
                        <styled.SocialEntry tag="a" href={url} key={key} card-1>
                            <styled.SocialIcon tag="img" src={icon} alt={name} />
                        </styled.SocialEntry>
                    )}
                    </styled.Social>
                </styled.Outbound>

                <styled.Actions>
                    <Button tag="a" href="/about#contact" primary active center middle style={{ minHeight: 48 }}>
                        Hire me
                    </Button>
                </styled.Actions>
            </styled.Column>
        </Section.Content>

        <ActionButton href="#education-and-experience" name="Learn more" icon={<ArrowDownward />} />
    </Section>

    <Section cover={photo1441109296207fd911f7cd5e5} id="education-and-experience">
        <Section.Content padding-2 spacing-4 >
            <h2>Education and work experience</h2>

            <p>
                In 2014 I have earned <em>Bachelor of Science</em> degree in <em>Computer Science</em> on <InlineLink href="http://wiz.pwr.edu.pl/en/"><em>Faculty of Computer Science and Management</em></InlineLink> of <InlineLink href="http://pwr.edu.pl/en/"><em>Wroclaw University of Science and Technology</em></InlineLink>.
            </p>

            <p className="media-no-print">
                I work mostly on my own apps and services, however I have done some contracted work. I am currently open for office work.
            </p>

            <styled.Row horizontal wrappable>
                <styled.Column stretch style={{ flex: '2 1 auto', paddingRight: 16 }}>
                    <h3>Contracted work</h3>
                    <Contracts contracts={contracts} />
                </styled.Column>

                <styled.Column stretch style={{ flex: '1 1 auto' }}>
                    <h3>Job paths</h3>
                    <JobPaths />
                </styled.Column>
            </styled.Row>
        </Section.Content>
    </Section>

    <Section Skills cover={photo14603245588408df3143cd908} id="skills">
        <Section.Content padding-2 spacing-4>
            <h2>Skills</h2>
                    
            <p className="media-no-print">
                {"Browse my skills to see if I can fit your project's needs."}
            </p>

            <styled.SkillSets spacing-2>
                <styled.SkillSet>
                    <h3>Web</h3>
                    <Skills skills={skills.web} />
                </styled.SkillSet>

                <styled.SkillSet>
                    <h3>Windows</h3>
                    <Skills skills={skills.windows} />
                </styled.SkillSet>

                <styled.SkillSet>
                    <h3>Tools</h3>
                    <Skills skills={skills.tools} />
                </styled.SkillSet>

                    <styled.SkillSet>
                    <h3>Languages</h3>
                    <Skills skills={skills.languages} />
                </styled.SkillSet>
            </styled.SkillSets>
        </Section.Content>
    </Section>

    <Section Projects cover={photo14603245588408df3143cd908} id="projects">
        <Section.Content padding-2 spacing-4>
            <h2>Projects</h2>

            <p className="media-no-print">
                There are some notable projects I have been working on recently. Some of them are still in development.
            </p>

        </Section.Content>

        <styled.Row ProjectsOverview full-width stretch horizontal padding-2 style={{ maxWidth: 1120, color: 'black', width: '100%', maxHeight: 56 * 20, paddingBottom: 0 }}>
            <styled.OverflowButton style={{paddingLeft: 8, paddingRight: 8, paddingBottom: 16 }}>
                <Button primary borderless center middle horizontal spacing-2
                style={{ minHeight: 48, height: '100%' }}
                onClick={overflowScrollBack}
                >
                    <ArrowBack />
                </Button>
            </styled.OverflowButton>
            
            <styled.ProjectsGrid id="projectGrid" horizontal full-width stretch >
                {
                    projects.filter(x => !x.exclude).map(project =>
                        <styled.Card ProjectCard key={project.name} card-1 media-no-print={!project.print}>
                            <styled.ProjectHeader padding-2 spacing-2 shadow-1>
                                <styled.Row horizontal spacing-2>
                                    <img className="ProjectIcon" src={project.icon} width="40" height="40" />
                                    <styled.ProjectHeadline center>
                                        <h4 className="ProjectName">{project.name}</h4>
                                        {project.url && <div className="ProjectUrl">{project.url}</div>}
                                    </styled.ProjectHeadline>
                                </styled.Row>
                            </styled.ProjectHeader>

                            <styled.CardContent padding-2 spacing-2 style={{ lineHeight: '1.7em' }}>
                                <styled.Description>
                                    {project.description}
                                </styled.Description>

                                {project.client &&
                                <styled.ClientSection>
                                    <styled.Subheader>Client</styled.Subheader>
                                    <p>
                                        {project.client}
                                    </p>
                                </styled.ClientSection>
                                }

                                <styled.TechnologySection>
                                    <styled.Subheader>Technology</styled.Subheader>
                                    <p>
                                        {project.tech.map(x => typeof x === 'string' ? x : x.name).join(', ')}
                                    </p>
                                </styled.TechnologySection>

                                <styled.ResponsibilitiesSection>
                                    <styled.Subheader>My responsibilities</styled.Subheader>
                                    <ul>
                                    {project.responsibilities.map(r => 
                                        <li key={r}>{r}</li>
                                    )}
                                    </ul>
                                </styled.ResponsibilitiesSection>
                        </styled.CardContent>
                    </styled.Card>
                    )
                }
                <ProjectCallToAction />

                <div className="OverflowLastItemFix media-no-print" />
            </styled.ProjectsGrid>

            <styled.OverflowButton style={{paddingLeft: 8, paddingRight: 8, paddingBottom: 16}}>
                <Button primary borderless center middle horizontal spacing-2
                style={{minHeight: 48, height: '100%'}}
                onClick={overflowScrollForward}
                >
                    <ArrowForward />
                </Button>
            </styled.OverflowButton>
        </styled.Row>

         <ActionButton href="/apps" name="See more" icon={<ArrowForward />} />
    </Section>

    <Section InterestsSection cover={photo1468322638156074863f9362e} id="interests-and-goals">
        <Section.Content padding-2 spacing-4>
            <h2>Interests and future goals</h2>

            <p className="media-no-print">
                I am always ready to learn new things and explore new opportunities.
            </p>

            <styled.InterestsAndGoals spacing-2>
                <styled.InterestsSection>
                    <h3>My interests</h3>
                    <Interests interests={interests} media-no-print />
                    <InlineInterests interests={interests} media-only-print />
                </styled.InterestsSection>

                <styled.GoalsSection>
                    <h3>My goals</h3>
                    <Goals goals={goals} media-no-print />
                    <InlineGoals goals={goals} media-only-print />
                </styled.GoalsSection>
            </styled.InterestsAndGoals>
        </Section.Content>
    </Section>

    <Section Notes cover={photo1468322638156074863f9362e}>
        <Section.Content padding-2 spacing-4>
            <styled.LegalNote>
                Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w mojej ofercie pracy dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z Ustawą z dnia 29.08.1997 roku o Ochronie Danych Osobowych; tekst jednolity: Dz. U. z 2002r. Nr 101, poz. 926 ze zm.).
            </styled.LegalNote>

            <styled.CopyrightNotes media-no-print>
                <p>
                    <span><span>Background images from </span> <span>{' '}</span><InlineLink href="https://unsplash.com">Unsplash</InlineLink>.</span>
                </p>
                <p>
                    <span>Source code available on <span>{' '}</span><InlineLink href="https://github.com/ciunkos/ciunkos.com/">GitHub</InlineLink>.</span>
                </p>
            </styled.CopyrightNotes>

            <styled.Extras media-no-print>
                <p>
                    <InlineLink href="resume.pdf">Download this resume as PDF</InlineLink>
                </p>
            </styled.Extras>
        </Section.Content>
    </Section>
</Page>

export default Resume

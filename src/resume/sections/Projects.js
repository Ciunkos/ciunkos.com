import React from 'react'

import styled from 'styled'
import { Section, ActionButton, Button, Paragraph } from 'components'
import projects from 'resume/projects'
import { ArrowBack, ArrowForward } from 'icons'
import { projects as cover } from './covers'

const clamp = (min, max) => value => Math.max(Math.min(value, max), min)

const scroll = direction => () => {
  if (document) {
    const grid = document.getElementById('projectGrid')
    if (grid) {
      const extent = grid.scrollWidth - grid.offsetWidth - 16
      const value =
        Math.floor(
          (grid.scrollLeft + direction * grid.offsetWidth) / grid.offsetWidth
        ) * grid.offsetWidth
      grid.scroll({ left: clamp(0, extent)(value), behavior: 'smooth' })
    }
  }
}

const [overflowScrollBack, overflowScrollForward] = [-1, 1].map(scroll)

const OverflowButton = ({ children, onClick }) => (
  <styled.OverflowButton
    style={{ paddingLeft: 8, paddingRight: 8, paddingBottom: 16 }}
  >
    <Button
      primary
      borderless
      center
      middle
      horizontal
      spacing-2
      style={{ minHeight: 48, height: '100%' }}
      onClick={onClick}
    >
      {children}
    </Button>
  </styled.OverflowButton>
)

const ProjectCallToAction = () => (
  <styled.Card
    ProjectCard
    tag="a"
    href="/about#contact"
    card-1
    middle
    media-no-print
    center
    padding-2
    style={{
      justifyContent: 'space-around',
      color: 'white',
      background: 'rgba(255,255,255,0.1)'
    }}
  >
    <h2 style={{ textAlign: 'center', marginLeft: 72, marginRight: 72 }}>
      Your next project can be here
    </h2>
    <Button primary active middle center full-width shadow-1>
      Contact me
    </Button>
  </styled.Card>
)

const preventWordWidows = text => text.replace(/ ([a-zA-Z]) /g, ' $1\u00A0')

export default () => (
  <Section Projects cover={cover} id="projects">
    <Section.Content padding-2 spacing-4>
      <Section.Title>Projects</Section.Title>
      <Paragraph media-no-print>
        There are some notable projects I have been working on recently.
      </Paragraph>
    </Section.Content>

    <styled.Row
      ProjectsOverview
      full-width
      horizontal
      padding-2
      style={{
        maxWidth: 1120,
        color: 'black',
        width: '100%',
        maxHeight: 2 * 56 * 20,
        paddingBottom: 0
      }}
    >
      <OverflowButton onClick={overflowScrollBack}>
        <ArrowBack />
      </OverflowButton>

      <styled.ProjectsGrid id="projectGrid" horizontal full-width>
        {projects
          .filter(x => !x.exclude)
          .map(project => (
            <styled.Card
              ProjectCard
              key={project.name}
              card-1
              media-no-print={!project.print}
            >
              <styled.ProjectHeader padding-2 spacing-2 shadow-1>
                <styled.Row horizontal spacing-2>
                  {project.icon && (
                    <styled.ProjectIcon
                      tag="img"
                      alt={project.name}
                      src={project.icon}
                      width="40"
                      height="40"
                    />
                  )}
                  <styled.ProjectHeadline center>
                    <styled.ProjectName tag="h4">
                      {project.name}
                    </styled.ProjectName>
                    {project.url &&
                      (project.href ? (
                        <styled.ProjectUrl
                          href={project.href}
                          InlineLink
                          rel="noopener noreferrer"
                          tag="a"
                          target="_blank"
                        >
                          {project.url}
                        </styled.ProjectUrl>
                      ) : (
                        <styled.ProjectUrl>{project.url}</styled.ProjectUrl>
                      ))}
                  </styled.ProjectHeadline>
                  {project.timeFrame && (
                    <styled.ProjectTimeFrame tag="h5">
                      {project.timeFrame}
                    </styled.ProjectTimeFrame>
                  )}
                </styled.Row>
              </styled.ProjectHeader>

              <styled.CardContent line-height-default padding-2 spacing-2>
                {project.description && (
                  <styled.Description>
                    {preventWordWidows(project.description)}
                  </styled.Description>
                )}

                {project.client && (
                  <styled.ClientSection>
                    <styled.Subheader>Client</styled.Subheader>
                    <p>{project.client}</p>
                  </styled.ClientSection>
                )}

                <styled.TechnologySection>
                  <styled.Subheader>Technology</styled.Subheader>
                  <p>
                    {project.tech
                      .map(x => (typeof x === 'string' ? x : x.name))
                      .join(', ')}
                  </p>
                </styled.TechnologySection>

                <styled.ResponsibilitiesSection>
                  <styled.Subheader>My responsibilities</styled.Subheader>
                  <styled.ul spacing-1>
                    {project.responsibilities.map(responsibility => (
                      <li key={responsibility}>
                        {preventWordWidows(responsibility)}
                      </li>
                    ))}
                  </styled.ul>
                </styled.ResponsibilitiesSection>
              </styled.CardContent>
            </styled.Card>
          ))}
        <ProjectCallToAction />

        <styled.OverflowLastItemFix media-no-print />
      </styled.ProjectsGrid>

      <OverflowButton onClick={overflowScrollForward}>
        <ArrowForward />
      </OverflowButton>
    </styled.Row>

    <ActionButton href="/apps" name="See more" icon={<ArrowForward />} />
  </Section>
)

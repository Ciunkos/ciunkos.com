import React from 'react'
import { shallow } from 'enzyme'

import Home from 'home'
import Apps from 'apps'
import About from 'about'
import Resume from 'resume'
import Blog from 'blog'
import { creatingContactFormsWithNodemailerAndReact } from 'blog/posts'

describe('Main routes rendering', () => {
  it('should render Home page without throwing an error', () => {
    expect(shallow(<Home />).contains(<h1>Ooh, hello there!</h1>)).toBe(true)
  })

  it('should render About page without throwing an error', () => {
    expect(shallow(<About />).contains(<h1>About me</h1>)).toBe(true)
  })

  it('should render Apps page without throwing an error', () => {
    expect(shallow(<Apps />).contains(<h1>Apps</h1>)).toBe(true)
  })

  it('should render Resume page without throwing an error', () => {
    expect(shallow(<Resume />).contains(<h1>Przemysław Zalewski</h1>)).toBe(
      true
    )
  })

  it('should render a Blog post page without throwing an error', () => {
    expect(
      shallow(<Blog post={creatingContactFormsWithNodemailerAndReact} />).name()
    ).toBe('Page')
  })
})

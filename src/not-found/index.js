import React from 'react'
import styled from 'styled'
import { Page, Section, ActionButton, Button } from 'components'

const NotFoundPage = () =>
<Page NotFound
      title="Page not found"
>
    <Section cover={'https://source.unsplash.com/random'}>
        <Section.Content padding-2 spacing-4>
            <h1>
                Ooops!
            </h1>

            <p>
                {"The page you've requested does not exist. If you believe this to be an error, please contact me and I'll get to the bottom of it."}
            </p>

            <styled.Actions spacing style={{ maxWidth: 360 }}>
                <Button tag="a" href="/" primary active center middle style={{ minHeight: 48 }}>
                    Back to home
                </Button>

                <Button tag="a" href="/apps" primary center middle style={{ minHeight: 48 }}>
                    Browse my apps
                </Button>

                <Button tag="a" href="/resume" primary center middle style={{ minHeight: 48 }}>
                    See my resume
                </Button>
            </styled.Actions>
        </Section.Content>
    </Section>
</Page>

export default NotFoundPage

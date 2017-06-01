import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled'
import { Page, Section, ActionButton } from 'components'
import { FileDownload } from 'icons'
import { photo1480694313141fce5e697ee25 } from 'assets/backgrounds'
import './styles.css'
import apps from './data'

const dimmensions = (str) => {
    const regex = /r(\d+)x(\d+)/g
    const matches = regex.exec(str)

    const baseHeight = 400;

    let scaledWidth = 240
    let scaledHeight = baseHeight

    if (matches) {
        const width = +matches[1]
        const height = +matches[2]
        scaledWidth = (width / height) * baseHeight
        scaledHeight = baseHeight
    }
    return {
        width: scaledWidth,
        height: scaledHeight
    }
}

const totalWidth = (entries) => {
    const widths = entries.map(entry => dimmensions(entry[0]).width + 8)
    const sum = widths.reduce((acc, curr) => acc + curr, 32 - 8)
    return sum
}

const AppsPage = () =>
<Page Apps
      title="Apps - Przemysław Zalewski - Ciunkos"
      description="Promegle, Testy Prawo Jazdy, Store ᴾᴿᴼ, MusicTube and more..."
>
    <Section Apps cover={photo1480694313141fce5e697ee25}>
        <Section.Content padding-2 spacing-4>
            <h1>Apps</h1>

            <styled.AppList horizontal wrappable spacing-2 vertical-spacing-2 media-no-print style={{paddingTop: 16}}>
            { Object.entries(apps).map(([key, { name, icon, slug }]) =>
                <styled.AppListItem tag="a" href={`#${slug}`} key={key} card-1>
                    <styled.AppIcon tag="img" src={icon} alt={name} />
                </styled.AppListItem>
            )}
            </styled.AppList>
        </Section.Content>
    </Section>

    { Object.values(apps).map(app =>
    <Section key={app.name} cover={app.cover}>
        <a name={app.slug} />

        <Section.Content full-width stretch spacing-4 padding-2>
            <h2>
                <styled.AppHeader horizontal spacing-2 middle>
                    <styled.AppIcon tag="img" src={app.icon} alt={app.name} small center middle />
                    <styled.AppName className="stretch">{app.name}</styled.AppName>
                </styled.AppHeader>
            </h2>

            <p>
                {app.description}
            </p>
        </Section.Content>

        {app.screenshots &&
        <styled.ScreenshotsView style={{ maxWidth: 1000, height: 424, minHeight: 424, maxHeight: 424, paddingBottom: 0, overflow: 'hidden' }}>
            <Scrollbars
                universal 
                autoHide={false}
                autoHeight
                autoHeightMin={424}
                autoHeightMax={424}
                style={{width: '100%', overflowY: 'hidden', overflowX: 'hidden', height: 424, minHeight: 424, maxHeight: 424 }}
                renderThumbHorizontal={props => <div {...props} className="thumb-horizontal" />}
                renderView={({ style, ...props }) => <div {...props} style={{ ...style, overflowY: 'hidden', minHeight: 424, width: '100%' }} />}
            >
                <styled.Screenshots 
                    horizontal
                    style={{
                        paddingBottom: 24,
                        overflowY: 'hidden',
                        height: 424,
                        minHeight: 424,
                        maxHeight: 424,
                        width: totalWidth(Object.entries(app.screenshots || {}))
                    }}
                >
                    <div className="OverflowLastItemFix" style={{ height: '1px', width: 16 }} />

                    {Object.entries(app.screenshots || {}).map(([key, value]) =>
                        <styled.Card key={key} card-1 tag="a" href={value} style={{ marginRight: 8, background: 'rgba(255, 255, 255, 0.1)', height: dimmensions(key).height }}>
                            <img src={value} style={{ height: dimmensions(key).height }} />
                        </styled.Card >
                    )}

                    <div className="OverflowLastItemFix" style={{ height: '1px' }} />
                </styled.Screenshots>
            </Scrollbars>
        </styled.ScreenshotsView> }

        {app.link && <ActionButton href="#contact" name="Download" icon={<FileDownload />} />
                  || <div style={{ paddingTop: 32, height: 48 }} /> }
    </Section> )}
</Page>

export default AppsPage

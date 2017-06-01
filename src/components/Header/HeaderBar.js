import React from 'react'

import styled from 'styled'

import { Button } from 'components'

const defaultIcon = 
<div>
    <img style={{width: 64, height: 64}} src={"data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20width%3D%2248%22%20height%3D%2248%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2214.22988%22%20y1%3D%2214.62606%22%20x2%3D%2254.98332%22%20y2%3D%2254.58714%22%20gradientUnits%3D%22userSpaceOnUse%22%20id%3D%22color-1%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23000000%22%20stop-opacity%3D%220.3%22%3E%3C/stop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23000000%22%20stop-opacity%3D%220%22%3E%3C/stop%3E%3C/linearGradient%3E%3Cfilter%20id%3D%22dropshadow-base%22%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%20%200%200%200%200%200%20%200%200%200%200%200%20%200%200%200%20.8%200%22%3E%3C/feColorMatrix%3E%20%3CfeOffset%20dx%3D%220%22%20dy%3D%221%22%3E%3C/feOffset%3E%20%3CfeGaussianBlur%20stdDeviation%3D%221%22%3E%3C/feGaussianBlur%3E%20%3CfeComposite%20in%3D%22SourceGraphic%22%3E%3C/feComposite%3E%3C/filter%3E%3Cfilter%20id%3D%22dropshadow-banner%22%20x%3D%22-10%25%22%20y%3D%22-10%25%22%20width%3D%22120%25%22%20height%3D%22130%25%22%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%20%200%200%200%200%200%20%200%200%200%200%200%20%200%200%200%20.4%200%22%3E%3C/feColorMatrix%3E%20%3CfeOffset%20dx%3D%220%22%20dy%3D%221%22%3E%3C/feOffset%3E%20%3CfeGaussianBlur%20stdDeviation%3D%220.5%22%3E%3C/feGaussianBlur%3E%20%3CfeComposite%20in%3D%22SourceGraphic%22%3E%3C/feComposite%3E%3C/filter%3E%3C/defs%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22nonzero%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20stroke-linecap%3D%22butt%22%20stroke-linejoin%3D%22miter%22%20stroke-miterlimit%3D%2210%22%20stroke-dasharray%3D%22%22%20stroke-dashoffset%3D%220%22%20font-family%3D%22none%22%20font-weight%3D%22none%22%20font-size%3D%22none%22%20text-anchor%3D%22none%22%20style%3D%22mix-blend-mode%3A%20normal%22%3E%3Cpath%20d%3D%22M7%2C43c-1.10457%2C0%20-2%2C-0.89543%20-2%2C-2v-34c0%2C-1.10457%200.89543%2C-2%202%2C-2h34c1.10457%2C0%202%2C0.89543%202%2C2v34c0%2C1.10457%20-0.89543%2C2%20-2%2C2z%22%20id%3D%22base%201%2017%201%22%20fill%3D%22%230e7afe%22%3E%3C/path%3E%3Cpath%20d%3D%22M14.22988%2C27.70873l1.90179%2C-3.9491l7.45944%2C3.59229l6.12846%2C-12.72585l3.9495%2C1.90199l9.33092%2C9.33092v15.14103c0%2C1.10457%20-0.89543%2C2%20-2%2C2h-11.47884z%22%20fill%3D%22url%28%23color-1%29%22%3E%3C/path%3E%3Cg%20id%3D%22Layer_1%204%22%20fill%3D%22%23ffffff%22%3E%3Cpath%20d%3D%22M30.20941%2C15.34854l-6.52041%2C12.63659l-7.34612%2C-3.80207l-1.86657%2C3.60989l7.34612%2C3.80339v0l3.61165%2C1.86304l8.38654%2C-16.24824z%22%20visibility%3D%22hidden%22%3E%3C/path%3E%3Cpath%20d%3D%22M14.2804%2C27.79417l1.90179%2C-3.9491l11.40905%2C5.49433l-1.90179%2C3.9491z%22%3E%3C/path%3E%3Cpath%20d%3D%22M33.7196%2C16.61349l-8.03005%2C16.67452l-3.9495%2C-1.90199l8.03005%2C-16.67452z%22%3E%3C/path%3E%3C/g%3E%3Cpath%20d%3D%22M2%2C24c0%2C-12.15026%209.84974%2C-22%2022%2C-22c12.15026%2C0%2022%2C9.84974%2022%2C22c0%2C12.15026%20-9.84974%2C22%20-22%2C22c-12.15026%2C0%20-22%2C-9.84974%20-22%2C-22z%22%20id%3D%22base%201%2013%201%22%20fill%3D%22none%22%3E%3C/path%3E%3Cpath%20d%3D%22M2%2C24c0%2C-12.15026%209.84974%2C-22%2022%2C-22c12.15026%2C0%2022%2C9.84974%2022%2C22c0%2C12.15026%20-9.84974%2C22%20-22%2C22c-12.15026%2C0%20-22%2C-9.84974%20-22%2C-22z%22%20id%3D%22base%201%209%201%22%20fill%3D%22none%22%3E%3C/path%3E%3Cpath%20d%3D%22M2%2C24c0%2C-12.15026%209.84974%2C-22%2022%2C-22c12.15026%2C0%2022%2C9.84974%2022%2C22c0%2C12.15026%20-9.84974%2C22%20-22%2C22c-12.15026%2C0%20-22%2C-9.84974%20-22%2C-22z%22%20id%3D%22base%201%205%201%22%20fill%3D%22none%22%3E%3C/path%3E%3Cpath%20d%3D%22M2%2C24c0%2C-12.15026%209.84974%2C-22%2022%2C-22c12.15026%2C0%2022%2C9.84974%2022%2C22c0%2C12.15026%20-9.84974%2C22%20-22%2C22c-12.15026%2C0%20-22%2C-9.84974%20-22%2C-22z%22%20id%3D%22base%201%201%201%22%20fill%3D%22none%22%3E%3C/path%3E%3Cg%20fill%3D%22%23000000%22%20font-family%3D%22Roboto%2C%20sans-serif%22%20font-weight%3D%22normal%22%20font-size%3D%2214%22%20text-anchor%3D%22start%22%3E%3C/g%3E%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2244%22%20height%3D%2222%22%20fill%3D%22none%22%3E%3C/rect%3E%3Cpath%20d%3D%22M2%2C24v-22h44v22z%22%20fill%3D%22none%22%3E%3C/path%3E%3Cpath%20d%3D%22M2%2C24v-22h44v22z%22%20fill%3D%22none%22%3E%3C/path%3E%3Cpath%20d%3D%22M2%2C24v-22h44v22z%22%20fill%3D%22none%22%3E%3C/path%3E%3Cpath%20d%3D%22M2%2C24v-22h44v22z%22%20fill%3D%22none%22%3E%3C/path%3E%3Cg%20id%3D%22Layer_1%201%201%22%20fill%3D%22%23000000%22%20font-family%3D%22Roboto%2C%20sans-serif%22%20font-weight%3D%22normal%22%20font-size%3D%2214%22%20text-anchor%3D%22start%22%3E%3C/g%3E%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2244%22%20height%3D%2222%22%20fill%3D%22none%22%3E%3C/rect%3E%3Cpath%20d%3D%22M2%2C24v-22h44v22z%22%20fill%3D%22none%22%3E%3C/path%3E%3Cpath%20d%3D%22M2%2C24v-22h44v22z%22%20fill%3D%22none%22%3E%3C/path%3E%3Cpath%20d%3D%22M2%2C24v-22h44v22z%22%20fill%3D%22none%22%3E%3C/path%3E%3Cpath%20d%3D%22M2%2C24v-22h44v22z%22%20fill%3D%22none%22%3E%3C/path%3E%3Cg%20id%3D%22Layer_1%202%201%22%20fill%3D%22%23000000%22%20font-family%3D%22Roboto%2C%20sans-serif%22%20font-weight%3D%22normal%22%20font-size%3D%2214%22%20text-anchor%3D%22start%22%3E%3C/g%3E%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2244%22%20height%3D%2222%22%20fill%3D%22none%22%3E%3C/rect%3E%3Cpath%20d%3D%22M2%2C24v-22h44v22z%22%20fill%3D%22none%22%3E%3C/path%3E%3Cpath%20d%3D%22M2%2C24v-22h44v22z%22%20fill%3D%22none%22%3E%3C/path%3E%3Cpath%20d%3D%22M2%2C24v-22h44v22z%22%20fill%3D%22none%22%3E%3C/path%3E%3Cpath%20d%3D%22M2%2C24v-22h44v22z%22%20fill%3D%22none%22%3E%3C/path%3E%3Cg%20id%3D%22Layer_1%203%201%22%20fill%3D%22%23000000%22%20font-family%3D%22Roboto%2C%20sans-serif%22%20font-weight%3D%22normal%22%20font-size%3D%2214%22%20text-anchor%3D%22start%22%3E%3C/g%3E%3Crect%20x%3D%222%22%20y%3D%222%22%20width%3D%2244%22%20height%3D%2222%22%20fill%3D%22none%22%3E%3C/rect%3E%3Cpath%20d%3D%22M2%2C24v-22h44v22z%22%20fill%3D%22none%22%3E%3C/path%3E%3Cpath%20d%3D%22M2%2C24v-22h44v22z%22%20fill%3D%22none%22%3E%3C/path%3E%3Cpath%20d%3D%22M2%2C24v-22h44v22z%22%20fill%3D%22none%22%3E%3C/path%3E%3Cpath%20d%3D%22M2%2C24v-22h44v22z%22%20fill%3D%22none%22%3E%3C/path%3E%3C/g%3E%3C/svg%3E"} />
</div>

const defaultRoutes = [
    {
        name: 'Nauka',
        href: '/playground/nauka'
    },
    {
        name: 'Pytania',
        href: '/playground/pytania'
    },
    {
        name: 'Baza wiedzy',
        href: '/playground/baza-wiedzy'
    },
    {
        name: 'Forum',
        href: '/playground/forum'
    },
    {
        name: 'Profil',
        href: '/playground/profil'
    }
]

import { Link } from 'react-router'

const HeaderBar = ({ routes = [], ...rest}) =>
<styled.HeaderBar transition-all Bar main-appbar style={{top: 0}} {...rest}>
    <styled.BarContent horizontal stretch>
    {
        routes.map(route =>
            <Button key={route.href} tag="a" title={route.title || route.name} href={route.href} primary borderless center middle navbaritem {...(route.classes || {})} style={{minWidth: 24, paddingLeft: 14, paddingRight: 14, paddingLeft: 0, paddingRight: 0, ...route.style}}>
                <styled.Action horizontal>
                    {route.largeIcon && <styled.ActionLargeIcon>{route.largeIcon}</styled.ActionLargeIcon>}
                    {route.icon && <styled.ActionIcon>{route.icon}</styled.ActionIcon>}
                    <styled.ActionName center middle>{route.name}</styled.ActionName>
                </styled.Action>
            </Button>
        )
    }
    </styled.BarContent>
</styled.HeaderBar>

export default HeaderBar
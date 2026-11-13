import React from 'react'

import Compare from './Compare'
import DayShift from './DayShift'
import FdeShare from './FdeShare'
import Hire from './Hire'
import Layoffs from './Layoffs'
import Loop from './Loop'
import MemeLib from './MemeLib'
import OpeningsVsHires from './OpeningsVsHires'
import Pay from './Pay'
import Poland from './Poland'
import RedFlags from './RedFlags'
import RoleShift from './RoleShift'
import Roi from './Roi'
import Shifts from './Shifts'

/* The figures a post can place with a ```chart block (see charts in ../markdown.js).
   The block's text is the key here. */
const CHARTS = {
  'role-shift': RoleShift,
  'openings-vs-hires': OpeningsVsHires,
  poland: Poland,
  'fde-share': FdeShare,
  pay: Pay,
  roi: Roi,
  'fde-loop': Loop,
  'fde-compare': Compare,
  'day-shift': DayShift,
  shifts: Shifts,
  'they-took-our-jobs': () => <MemeLib id="they-took-our-jobs" />,
  'let-it-go': () => <MemeLib id="let-it-go" />,
  'red-flags': RedFlags,
  layoffs: Layoffs,
  hire: Hire
}

const Chart = ({ name }) => {
  const Component = CHARTS[name]
  if (!Component) throw new Error(`Unknown chart in a post: ${name}`)
  return <Component />
}

export default Chart

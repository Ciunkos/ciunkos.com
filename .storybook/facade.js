import { storiesOf as storiesOfReal } from '@storybook/react'
import { action as actionReal } from '@storybook/addon-actions'
import { specs as specsReal, describe as describeReal, it as itReal } from 'storybook-addon-specifications'

export const storiesOf = storiesOfReal;
export const action = actionReal;
export const specs = specsReal;
export const describe = describeReal;
export const it = itReal;

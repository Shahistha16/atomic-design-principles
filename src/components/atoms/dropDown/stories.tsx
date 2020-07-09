import React from 'react'
import { storiesOf } from '@storybook/react'
import { option } from '../../constants'

import DropDown from './index'

storiesOf('Atoms', module).add('DropDown', () => (
  <div style={{ padding: 10 }}>
    <DropDown option={option} label={'Sort by'} />
  </div>
))

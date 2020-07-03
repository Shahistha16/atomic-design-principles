import React from 'react'
import { storiesOf } from '@storybook/react'

import DropDown from './index'

storiesOf('Atoms', module).add('DropDown', () => (
  <div style={{ padding: 10 }}>
    <DropDown />
  </div>
))

import React from 'react'
import { storiesOf } from '@storybook/react'

import TextBox from './index'

storiesOf('Atoms', module).add('textBox', () => (
  <div style={{ padding: 10 }}>
    <TextBox />
  </div>
))

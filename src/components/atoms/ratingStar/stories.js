import React from 'react'
import { storiesOf } from '@storybook/react'

import { Filled, Empty, HalfFilled } from './index'

storiesOf('Atoms', module)
  .add('Rating star filled', () => (
    <div style={{ padding: 10 }}>
      <Filled />
    </div>
  ))
  .add('Rating star empty', () => (
    <div style={{ padding: 10 }}>
      <Empty />
    </div>
  ))
  .add('Rating star half-filled', () => (
    <div style={{ padding: 10 }}>
      <HalfFilled />
    </div>
  ))

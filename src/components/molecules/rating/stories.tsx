import React from 'react'
import { storiesOf } from '@storybook/react'

import Rating from './index'

storiesOf('Molecules', module).add('Rating ', () => (
  <div style={{ padding: 10 }}>
    <Rating rating={3} />
  </div>
))

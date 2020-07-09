import React from 'react'
import { storiesOf } from '@storybook/react'
import KindleDescription from './index'

storiesOf('Molecules', module).add('KindleDescription', () => (
  <div style={{ padding: '10px' }}>
    <KindleDescription></KindleDescription>
  </div>
))

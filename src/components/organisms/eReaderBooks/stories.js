import React from 'react'
import { storiesOf } from '@storybook/react'
import EReaderBooks from './index'

storiesOf('Organism', module).add('EReaderBooks', () => (
  <div style={{ padding: '10px' }}>
    <EReaderBooks></EReaderBooks>
  </div>
))

import React from 'react'
import { storiesOf } from '@storybook/react'
import FilterColumn from './index'

storiesOf('Organism', module).add('FilterColumn', () => (
  <div style={{ padding: '10px' }}>
    <FilterColumn></FilterColumn>
  </div>
))

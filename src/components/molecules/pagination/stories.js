import React from 'react'
import { storiesOf } from '@storybook/react'

import Pagination from './index'

storiesOf('Molecules', module).add('Pagination ', () => (
  <div style={{ padding: 10 }}>
    <Pagination />
  </div>
))

import React from 'react'
import { storiesOf } from '@storybook/react'
import EReadersCard from './index'

storiesOf('Molecules', module).add('EReadersCard', () => (
  <div style={{ padding: '10px' }}>
    <EReadersCard
      src={'https://images-eu.ssl-images-amazon.com/images/I/41aTw6F6DDL._AC_SX184_.jpg'}
    ></EReadersCard>
  </div>
))

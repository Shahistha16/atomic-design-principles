import React from 'react'
import { storiesOf } from '@storybook/react'
import StoreCard from './index'
import Strings from '../../assets/strings'

storiesOf('Molecules', module).add('StoreCard', () => (
  <div style={{ padding: '10px' }}>
    <StoreCard
      src={'https://images-eu.ssl-images-amazon.com/images/I/41-G7AIOZyL._AC_US218_.jpg'}
      author={Strings.author}
      title={Strings.bookName}
      rating={3.5}
    />
  </div>
))

import React from 'react'
import { storiesOf } from '@storybook/react'
import StoreCard from './index'
import Strings from '../../assets/strings'

storiesOf('Molecules', module).add('StoreCard', () => (
  <div style={{ padding: '10px' }}>
    <StoreCard
      src={
        'https://images-eu.ssl-images-amazon.com/images/I/51MWRMIL2aL._AC_US218_FMwebp_QL70_.jpg'
      }
      author={Strings.author}
      title={Strings.bookName}
    ></StoreCard>
  </div>
))

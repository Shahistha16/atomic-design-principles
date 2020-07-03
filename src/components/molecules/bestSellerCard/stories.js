import React from 'react'
import { storiesOf } from '@storybook/react'
import BestSellerCard from './index'

storiesOf('Molecules', module).add('BestSellerCard', () => (
  <div style={{ padding: '10px' }}>
    <BestSellerCard
      src={
        'https://images-eu.ssl-images-amazon.com/images/I/816dOlxU5qL.__BG0,0,0,0_FMpng_AC_UL270_SR174,270_.jpg'
      }
    ></BestSellerCard>
  </div>
))

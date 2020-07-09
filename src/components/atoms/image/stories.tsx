import React from 'react'
import { storiesOf } from '@storybook/react'

import Image from './index'
import Images from '../../assets/images'

storiesOf('Atoms', module).add('image', () => (
  <div style={{ padding: 10 }}>
    <Image src={Images.logo} alt="" width="20" height="20" />
  </div>
))

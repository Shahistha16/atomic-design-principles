import React from 'react'
import { storiesOf } from '@storybook/react'
import TopHeader from './index'
import Strings from '../../assets/strings'

storiesOf('Organism', module).add('topHeader', () => (
  <div style={{ padding: 10 }}>
    <TopHeader></TopHeader>
  </div>
))

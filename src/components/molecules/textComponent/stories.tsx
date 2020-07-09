import React from 'react'
import { storiesOf } from '@storybook/react'
import TextComponent from './index'
import Strings from '../../assets/strings'

storiesOf('Molecules', module).add('textComponent', () => (
  <div style={{ padding: 10 }}>
    <TextComponent
      upperText={Strings.helloSignIn}
      lowerText={Strings.accountsLists}
    ></TextComponent>
  </div>
))

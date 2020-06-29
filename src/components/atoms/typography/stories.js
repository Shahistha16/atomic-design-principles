import React from 'react'
import { storiesOf } from '@storybook/react'

import Text from './index'
import Strings from '../../assets/strings'

storiesOf('Atoms', module).add('typography', () => (
  <div style={{ padding: 10 }}>
    <Text textLabel={Strings.kindleStore} />
  </div>
))

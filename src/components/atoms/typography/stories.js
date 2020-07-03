import React from 'react'
import { storiesOf } from '@storybook/react'

import { Typography } from './index'
import Strings from '../../assets/strings'

storiesOf('Atoms', module).add('typography', () => (
  <div style={{ padding: 10 }}>
    <Typography textLabel={Strings.kindleStore} />
  </div>
))

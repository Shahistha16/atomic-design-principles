import React from 'react'
import { storiesOf } from '@storybook/react'
import options from '../../constants'
import { kindleUnlimited } from '../../constants'
import styles from './style.css'

import CheckBox from './index'

storiesOf('Atoms', module).add('CheckBox', () => (
  <div style={{ padding: 10 }}>
    <CheckBox checkBoxData={kindleUnlimited} labelStyle={styles.text} />
  </div>
))

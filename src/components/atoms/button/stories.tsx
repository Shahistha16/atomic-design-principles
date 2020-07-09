/* @flow */

import React from 'react'
import { storiesOf } from '@storybook/react'
import Strings from '../../assets/strings'
import Button from './index'
import styles from './style.css'

storiesOf('Atoms', module).add('textButton', () => (
  <Button className={styles.buttonText}>{Strings.kindleStore}</Button>
))

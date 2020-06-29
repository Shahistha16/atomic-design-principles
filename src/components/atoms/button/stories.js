/* @flow */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Strings from '../../assets/strings'
import Images from '../../assets/images'
import Button, { ButtonTheme, ButtonSize } from './index'
import styles from './style.css'

storiesOf('Atoms', module)
  .add('textButton', () => (
    <Button size={ButtonSize.SMALL} onClick={action('clicked')} className={styles.buttonText}>
      {Strings.kindleStore}
    </Button>
  ))
  .add('default - medium', () => (
    <Button size={ButtonSize.MEDIUM} onClick={action('clicked')}>
      <img src={Images.search}></img>
    </Button>
  ))

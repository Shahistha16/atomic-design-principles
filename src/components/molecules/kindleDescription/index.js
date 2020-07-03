import React from 'react'
import styles from './styles.css'
import { HeaderFour, Paragraph, HeaderFive, SubTitle } from '../../atoms/typography'
import Strings from '../../assets/strings'

const KindleDescription = () => {
  return (
    <div>
      <div className={styles.border} />
      <HeaderFour textLabel={Strings.welcome} />
      <Paragraph textLabel={Strings.welcomeDescription} className={styles.paraText} />
      <HeaderFive textLabel={Strings.kindleDevice} />
      <Paragraph textLabel={Strings.kindleDeviceDescription} className={styles.paraText} />
      <HeaderFive textLabel={Strings.chooseEBook} />
      <Paragraph textLabel={Strings.chooseEBookDescription} className={styles.paraText} />
      <div className={styles.border} />
    </div>
  )
}

export default KindleDescription

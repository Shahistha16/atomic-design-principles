import React from 'react'
import styles from './styles.css'
import { HeaderFour, Paragraph, HeaderFive, SubTitle } from '../../atoms/typography'
import Strings from '../../assets/strings'

export interface kindleDescProps {
  className?: string;
}

const KindleDescription = ({ className }: kindleDescProps) => {
  return (
    <div className={className}>
      <div className={styles.border} />
      <HeaderFour textLabel={Strings.welcome} className={styles.header} />
      <Paragraph textLabel={Strings.welcomeDescription} className={styles.paraText} />
      <HeaderFive textLabel={Strings.kindleDevice} className={styles.subHeader} />
      <Paragraph textLabel={Strings.kindleDeviceDescription} className={styles.paraText} />
      <HeaderFive textLabel={Strings.chooseEBook} className={styles.subHeader} />
      <Paragraph textLabel={Strings.chooseEBookDescription} className={styles.paraText} />
      <div className={styles.border} />
    </div>
  )
}

export default KindleDescription

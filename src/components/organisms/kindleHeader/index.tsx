import React from 'react'
import { Text } from '../../atoms/typography'
import styles from './style.css'
import Strings from '../../assets/strings'

const KindleHeader = () => {
  return (
    <div className={styles.headerView}>
      <Text textLabel={Strings.kindleEReader} className={styles.textBoldStyle} />
      <Text textLabel={Strings.freeKindleReading} className={styles.textStyle} />
      <Text textLabel={Strings.kindleEBook} className={styles.textStyle} />
      <Text textLabel={Strings.kindleUnlimited} className={styles.textStyle} />
      <Text textLabel={Strings.primeReading} className={styles.textStyle} />
      <Text textLabel={Strings.dealsOnKindle} className={styles.textStyle} />
      <Text textLabel={Strings.bestSeller} className={styles.textStyle} />
      <Text textLabel={Strings.indianLangEBook} className={styles.textStyle} />
      <Text textLabel={Strings.kindleExamCenter} className={styles.textStyle} />
      <Text textLabel={Strings.kindleETextbook} className={styles.textStyle} />
      <Text textLabel={Strings.contentAndDevices} className={styles.textStyle} />
      <Text textLabel={Strings.kindleSupport} className={styles.textStyle} />
    </div>
  )
}

export default KindleHeader

import React from 'react'
import TopHeader from '../../organisms/topHeader'
import SubHeader from '../../organisms/subHeader'
import EReaderBooks from '../../organisms/eReaderBooks'
import styles from './styles.css'

const HomeScreen = () => {
  return (
    <div style={{ width: '100%', display: 'flex' }}>
      <TopHeader />
      <SubHeader />
      <KindleHeader />
      <div className={styles.bodyView}>
        <div className={styles.filterView}></div>
        <div className={styles.diaplayView}>
          <EReaderBooks />
        </div>
      </div>
    </div>
  )
}

export default HomeScreen

/* @flow */
import * as React from 'react'
import TopHeader from './components/organisms/topHeader'
import SubHeader from './components/organisms/subHeader'
import KindleHeader from './components/organisms/kindleHeader'
import styles from './components/_settings/_base.css'
import EReaderBooks from './components/organisms/eReaderBooks'
import KindleDescription from './components/molecules/kindleDescription'
import RelatedComponent from './components/organisms/relatedComponent'
import Footer from './components/organisms/footer'

const App = () => (
  <div>
    <TopHeader />
    <SubHeader />
    <KindleHeader />
    <div className={styles.bodyView}>
      <div className={styles.filterView}></div>
      <div className={styles.diaplayView}>
        <EReaderBooks />
        <KindleDescription />
      </div>
    </div>
    <RelatedComponent />
    <Footer />
  </div>
)

export default App

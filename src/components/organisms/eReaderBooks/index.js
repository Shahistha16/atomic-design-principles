import React from 'react'
import EReadersCard from '../../molecules/eReadersCard'
import { Header, Title, Text } from '../../atoms/typography'
import Strings from '../../assets/strings'
import styles from './style.css'
import StoreCard from '../../molecules/storeCard'
import DropDown from '../../atoms/dropDown'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EReaderBooks = () => {
  return (
    <div>
      <Header textLabel={Strings.kindleStore} />
      <Title textLabel={Strings.kindleEReader} />
      <div className={styles.borderDiv} />
      <div className={styles.horizontalView}>
        <EReadersCard
          src={'https://images-eu.ssl-images-amazon.com/images/I/41aTw6F6DDL._AC_SX184_.jpg'}
          rating={4}
        />
        <EReadersCard
          src={'https://images-eu.ssl-images-amazon.com/images/I/41FW4mTXMhL._AC_SX184_.jpg'}
          rating={4.5}
        />
        <EReadersCard
          src={'https://images-eu.ssl-images-amazon.com/images/I/41aTw6F6DDL._AC_SX184_.jpg'}
          rating={4}
        />
        <EReadersCard
          src={'https://images-eu.ssl-images-amazon.com/images/I/41FW4mTXMhL._AC_SX184_.jpg'}
          rating={4.5}
        />
        <EReadersCard
          src={'https://images-eu.ssl-images-amazon.com/images/I/41aTw6F6DDL._AC_SX184_.jpg'}
          rating={4}
        />
        <EReadersCard
          src={'https://images-eu.ssl-images-amazon.com/images/I/41FW4mTXMhL._AC_SX184_.jpg'}
          rating={4.5}
        />
        <EReadersCard
          src={'https://images-eu.ssl-images-amazon.com/images/I/41aTw6F6DDL._AC_SX184_.jpg'}
          rating={4}
        />
      </div>
      <div className={styles.boxView}>
        <div className={styles.results}>
          {Strings.results}
          <span className={styles.store}>{Strings.kindlestore}</span>
        </div>
        <DropDown />
      </div>
      <div className={styles.verticleView}>
        <StoreCard
          src={'https://images-eu.ssl-images-amazon.com/images/I/41-G7AIOZyL._AC_US218_.jpg'}
          author={Strings.author}
          title={Strings.bookName}
          rating={3.5}
        />
        <StoreCard
          src={
            'https://images-eu.ssl-images-amazon.com/images/I/51MWRMIL2aL._AC_US218_FMwebp_QL70_.jpg'
          }
          author={'Swami Vivekanand'}
          title={'Inspiring Thoughts'}
          rating={4}
        />
        <StoreCard
          src={'https://images-eu.ssl-images-amazon.com/images/I/41-G7AIOZyL._AC_US218_.jpg'}
          author={Strings.author}
          title={Strings.bookName}
          rating={3.5}
        />
        <StoreCard
          src={
            'https://images-eu.ssl-images-amazon.com/images/I/51MWRMIL2aL._AC_US218_FMwebp_QL70_.jpg'
          }
          author={'Swami Vivekanand'}
          title={'Inspiring Thoughts'}
          rating={4}
        />
        <StoreCard
          src={'https://images-eu.ssl-images-amazon.com/images/I/41-G7AIOZyL._AC_US218_.jpg'}
          author={Strings.author}
          title={Strings.bookName}
          rating={3.5}
        />
        <StoreCard
          src={
            'https://images-eu.ssl-images-amazon.com/images/I/51MWRMIL2aL._AC_US218_FMwebp_QL70_.jpg'
          }
          author={'Swami Vivekanand'}
          title={'Inspiring Thoughts'}
          rating={4}
        />
      </div>
      <div className={styles.pageHeader}>
        <FontAwesomeIcon icon={faChevronLeft} color="#888" />
        <div className={styles.previous}>
          Previous Page <span className={styles.page}>1 </span>
          <span className={styles.lastPage}>2 3 ... </span>
          <span>400 </span>
          <span className={styles.next}>Next Page</span>
        </div>
        <FontAwesomeIcon icon={faChevronRight} color="#0265c0" />
      </div>
    </div>
  )
}

export default EReaderBooks

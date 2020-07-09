import React from 'react'
import EReadersCard from '../../molecules/eReadersCard'
import { Header, Title, Text } from '../../atoms/typography'
import Strings from '../../assets/strings'
import styles from './style.css'
import StoreCard from '../../molecules/storeCard'
import DropDown from '../../atoms/dropDown'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { option } from '../../constants'
import Pagination from '../../molecules/pagination'

export interface EReaderBooksProps {
  className?: string;
}
const EReaderBooks = ({ className }: EReaderBooksProps) => {
  return (
    <div className={className}>
      <Header textLabel={Strings.kindleStore} />
      <Title textLabel={Strings.kindleEReader} />
      <div className={styles.borderDiv} />
      <div className={styles.horizontalView}>
        <EReadersCard
          src={'https://images-eu.ssl-images-amazon.com/images/I/41aTw6F6DDL._AC_SX184_.jpg'}
          rating={3}
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
          rating={3.5}
        />
        <EReadersCard
          src={'https://images-eu.ssl-images-amazon.com/images/I/41aTw6F6DDL._AC_SX184_.jpg'}
          rating={3}
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
        <DropDown option={option} label={'Sort by'} />
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
          rating={3}
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
          rating={4.5}
        />
      </div>
      <Pagination pagecount={400} />
    </div>
    // </div>
  )
}

export default EReaderBooks

/* @flow */
import * as React from 'react'
import Image from '../../atoms/image'
import Button from '../../atoms/button'
import SearchBar from '../../molecules/searchBar'
// import Text from '../../atoms/text'
import styles from './style.css'
import amazonLogo from '../../assets/images/amazonLogo.jpg'

const TopHeader = () => {
  return (
    <div className={styles.topheaderView}>
      <Image src={amazonLogo} width="100px" height="50px" alt="" />
    </div>
  )
}

export default TopHeader

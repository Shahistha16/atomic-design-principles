/* @flow */

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import Strings from '../../assets/strings'
import Button from '../../atoms/button'
import TextBox from '../../atoms/textBox'
import styles from './searchBarStyle.css'

const SearchBar = ({ className }) => {
  const onClick = () => {}
  return (
    <div className={styles.searchBarView}>
      <Button type="button" className={styles.buttonView} onClick={onClick()}>
        <div className={styles.textButton}>{Strings.kindleStore}</div>
      </Button>
      <div className={styles.textBoxView}>
        <TextBox className={styles.textBox} />
      </div>
      <div className={styles.imageView}>
        <Button className={styles.searchView}>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </div>
    </div>
  )
}

export default SearchBar

import React from 'react'
import styles from './style.css'

const DropDown = () => {
  return (
    <div>
      <label for="Sort" className={styles.labelStyle}>
        Sort By
      </label>
      <select id="Sort" name="Sort" className={styles.labelStyle}>
        <option value="Featured">Featured</option>
        <option value="Price: Low to High">Price: Low to High</option>
        <option value="fiat">Price: High to Low</option>
        <option value="Avg. Customer Review">Avg. Customer Review</option>
        <option value="Publication date">Publication date</option>
      </select>
    </div>
  )
}

export default DropDown

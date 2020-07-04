import React from 'react'
import styles from './style.css'

const DropDown = ({ option, className, label }) => {
  return (
    <div>
      <label for="Sort" className={styles.labelStyle}>
        {label}
      </label>
      <select className={className}>
        {option.map(item => {
          return <option value={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default DropDown

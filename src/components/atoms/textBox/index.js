import * as React from 'react'
import styles from './style.css'

const TextBox = ({ className, placeholder }) => (
  <div>
    <input className={`${styles.textboxView} ${className}`} type="text" placeholder={placeholder} />
  </div>
)

export default TextBox

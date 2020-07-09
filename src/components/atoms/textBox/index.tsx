import * as React from 'react'
import styles from './style.css'

export interface textboxInterface {
  className?: string;
  placeholder?: string;
}

const TextBox = ({ className, placeholder }: textboxInterface) => (
  <div>
    <input className={`${styles.textboxView} ${className}`} type="text" placeholder={placeholder} />
  </div>
)

export default TextBox

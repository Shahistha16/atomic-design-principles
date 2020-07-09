/* @flow */
import * as React from 'react'

import styles from './style.css'

export type buttonType = 'button' | 'submit' | 'reset'

export interface buttonInterface {
  type?: buttonType;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, className, onClick, type }: buttonInterface) => {
  return (
    <button onClick={onClick} type={type} className={`${styles.button} ${className}`}>
      {children}
    </button>
  )
}

export default Button

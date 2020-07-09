import React from 'react'
import styles from './styles.css'

export interface textComponentProps {
  upperText?: string;
  lowerText?: string;
  className?: string;
  upperClassName?: string;
  lowerClassName?: string;
}

const TextComponent = ({
  upperText,
  lowerText,
  className,
  upperClassName,
  lowerClassName,
}: textComponentProps) => {
  return (
    <div className={`${styles.text_view} ${className}`}>
      <div className={`${styles.upper_text} ${upperClassName}`}>{upperText}</div>
      <div className={`${styles.lower_text} ${lowerClassName}`}> {lowerText}</div>
    </div>
  )
}

export default TextComponent

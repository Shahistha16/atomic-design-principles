import React from 'react'
import styles from './styles.css'

const TextComponent = ({ upperText, lowerText, classname, upperClassName, lowerClassName }) => {
  return (
    <div classname={[styles.text_view, classname]}>
      <div className={`${styles.upper_text} ${upperClassName}`}>{upperText}</div>
      <div className={styles.lower_text}> {lowerText}</div>
    </div>
  )
}

export default TextComponent

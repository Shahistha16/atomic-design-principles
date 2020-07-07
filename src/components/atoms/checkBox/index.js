import React from 'react'
import styles from './style.css'

const CheckBox = ({ checkBoxData, labelStyle }) => {
  return (
    <div>
      {checkBoxData.map(item => {
        return (
          <div className={styles.view}>
            <input type="checkbox" value={item.value} />
            <label className={labelStyle} for={name}>
              {item.name}
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default CheckBox

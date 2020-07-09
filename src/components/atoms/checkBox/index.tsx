import React from 'react'
import styles from './style.css'

export interface checkBoxInterface {
  labelStyle?: string;
  checkBoxData: { name: string, value: string }[];
}

const CheckBox = ({ checkBoxData, labelStyle }: checkBoxInterface) => {
  return (
    <div>
      {checkBoxData.map(item => {
        return (
          <div className={styles.view}>
            <input type="checkbox" value={item.value} />
            <label className={labelStyle}>{item.name}</label>
          </div>
        )
      })}
    </div>
  )
}

export default CheckBox

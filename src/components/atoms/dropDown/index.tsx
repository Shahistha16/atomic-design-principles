import React from "react";
import styles from "./style.css";
export interface dropdownInterface {
  option: Array<string>;
  className?: string;
  label: string;
}

const DropDown = ({ option, className, label }: dropdownInterface) => {
  return (
    <div>
      <label className={styles.labelStyle}>{label}</label>
      <select className={className}>
        {option.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropDown;

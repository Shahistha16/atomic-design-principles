/* @flow */
import * as React from "react";
import classnames from "classnames";

import styles from "./style.css";

export interface buttonInterface {
  className?: string;
  children: React.ReactNode;
}

const Button = ({ children, className, ...props }: buttonInterface) => {
  return (
    <button {...props} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
};

export default Button;

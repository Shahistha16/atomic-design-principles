/* @flow */
import * as React from 'react'

import './style.css'

const Button = (type, onClick, children, disabled) => (
  <button type={type} onClick={onClick} disabled={disabled} className="button-Img">
    {children}
  </button>
)

export default Button

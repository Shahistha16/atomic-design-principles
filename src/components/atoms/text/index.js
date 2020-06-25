import * as React from 'react'
import './style.css'

const Text = (text, className) => (
  <div>
    <p className={className}>{text}</p>
  </div>
)

export default Text

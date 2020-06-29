import React from 'react'

const Typography = ({ fontSize = 'base', fontWeight = 400, textLabel, className }) => {
  let fontSizeClass = `text-${fontSize}`
  let fontWeightClass = `text-${fontWeight}`
  let fontClass = `${fontSizeClass} ${fontWeightClass}`
  return (
    <div>
      <p className={`text-wrapper ${fontClass} ${className}`}>{textLabel}</p>
    </div>
  )
}

export default Typography

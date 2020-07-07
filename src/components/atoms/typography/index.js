import React from 'react'
import styles from './style.css'

const Typography = ({
  fontSize = 'base',
  fontWeight = 'normal',
  fontColor = 'black',
  textLabel,
  className,
}) => {
  let fontSizeClass = `${styles[`text_${fontSize}`]}`
  let fontWeightClass = `${styles[`text_${fontWeight}`]}`
  let fontColorClass = `${styles[`text_${fontColor}`]}`
  let fontClass = `${fontSizeClass} ${fontWeightClass} ${fontColorClass} ${className}`
  return <div className={fontClass}>{textLabel}</div>
}

const Text = ({ textLabel, className }) => {
  return <div className={className}>{textLabel}</div>
}

const Header = ({ textLabel, className }) => {
  return (
    <div>
      <h1 className={className}>{textLabel}</h1>
    </div>
  )
}

const Title = ({ textLabel, className }) => {
  return (
    <div>
      <h2 className={className}>{textLabel}</h2>
    </div>
  )
}

const SubTitle = ({ textLabel, className }) => {
  return (
    <div>
      <h3 className={className}>{textLabel}</h3>
    </div>
  )
}

const HeaderFour = ({ textLabel, className }) => {
  return (
    <div>
      <h4 className={className}>{textLabel}</h4>
    </div>
  )
}

const HeaderFive = ({ textLabel, className }) => {
  return (
    <div>
      <h5 className={className}>{textLabel}</h5>
    </div>
  )
}

const HeaderSix = ({ textLabel, className }) => {
  return (
    <div>
      <h6 className={className}>{textLabel}</h6>
    </div>
  )
}
const Paragraph = ({ textLabel, className }) => {
  return (
    <div>
      <p className={className}>{textLabel}</p>
    </div>
  )
}

export { Typography, Title, SubTitle, Text, Header, HeaderFour, HeaderFive, HeaderSix, Paragraph }

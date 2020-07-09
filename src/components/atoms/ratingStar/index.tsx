import React from 'react'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Filled = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faStar} color="#ffc200" />
    </div>
  )
}

const Empty = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faStar} color="#d8dce0" />
    </div>
  )
}

const HalfFilled = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faStarHalfAlt} color="#ffc200" />
    </div>
  )
}

export { Filled, Empty, HalfFilled }

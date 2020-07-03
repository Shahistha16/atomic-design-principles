import React from 'react'
import { Filled, HalfFilled, Empty } from '../../atoms/ratingStar'
import ReactStars from 'react-rating-stars-component'

import styles from './style.css'

const Rating = ({ className, onChange, rating }) => {
  return (
    <div className={`${styles.ratingView} ${className}`}>
      <ReactStars count={5} size="10px" value={rating} size={24} color2={'#ffd700'} />
    </div>
  )
}

export default Rating

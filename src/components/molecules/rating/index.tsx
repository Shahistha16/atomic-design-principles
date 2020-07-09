import React from 'react'
import ReactStars from 'react-rating-stars-component'

export interface ratingProps {
  className?: string;
  rating: number;
}

import styles from './style.css'

const Rating = ({ className, rating }: ratingProps) => {
  return (
    <div className={`${styles.ratingView} ${className}`}>
      <ReactStars count={5} value={rating} size={24} color2={'#ffd700'} />
    </div>
  )
}

export default Rating

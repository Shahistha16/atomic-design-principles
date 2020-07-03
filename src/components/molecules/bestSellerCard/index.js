import React from 'react'
import Image from '../../atoms/image'
import { Text } from '../../atoms/typography'
import styles from './style.css'
import Rating from '../rating'

const BestSellerCard = ({ src, width, height, title, author, rating }) => {
  return (
    <div className={styles.cardView}>
      <Image src={src} width={width} height={height} />
      <Text textLabel={title} fontSize="13px" className={styles.title} />
      <Text textLabel={author} className={styles.author} fontSize="12px" />
      <Rating rating={rating} />
      <Text textLabel={'Kindle Edition'} className={styles.type} fontSize="12px" />
      <Text textLabel={'₹ 89.92'} className={styles.cost} fontSize="12px" />
    </div>
  )
}

export default BestSellerCard

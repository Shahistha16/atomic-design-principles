import React from 'react'
import Image from '../../atoms/image'
import { Text, Typography } from '../../atoms/typography'
import styles from './style.css'
import Rating from '../rating'

export interface bestSellerCardProps {
  src: string;
  width?: string;
  height?: string;
  title: string;
  author: string;
  rating: number;
}

const BestSellerCard = ({ src, width, height, title, author, rating }: bestSellerCardProps) => {
  return (
    <div className={styles.cardView}>
      <Image src={src} width={width} height={height} alt="" />
      <Typography textLabel={title} fontSize="xs" className={styles.title} />
      <Typography textLabel={author} className={styles.author} fontSize="base" />
      <Rating rating={rating} />
      <Typography textLabel={'Kindle Edition'} className={styles.type} fontSize="xs" />
      <Typography textLabel={'₹ 89.92'} className={styles.cost} fontSize="base" />
    </div>
  )
}

export default BestSellerCard

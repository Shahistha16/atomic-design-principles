import React from 'react'
import Image from '../../atoms/image'
import { Typography, SubTitle, Title, Text, HeaderFive } from '../../atoms/typography'
import styles from './style.css'

import Strings from '../../assets/strings'
import Images from '../../assets/images'
import Rating from '../rating'

export interface EReadersCardProps {
  src: string;
  rating: number;
}

const EReadersCard = ({ src, rating }) => {
  return (
    <div className={styles.cardView}>
      <Image src={src} width="160px" height="161" alt="" />
      <Text textLabel={Strings.decs} className={styles.titleView} />
      <div>
        <Text textLabel={Strings.brand} className={styles.siteName} />
      </div>
      <div className={styles.costView}>
        <Text textLabel={Strings.rupeesSymbol} className={styles.rupeesSymbol} />
        <Text textLabel={Strings.cost} className={styles.rupees} />
        <Text textLabel={Strings.paisa} className={styles.paisa} />
      </div>
      <div className={styles.ratingView}>
        <Rating rating={rating} />
        <Text textLabel={Strings.ratingCount} />
      </div>
      <Image src={Images.prime} width="80px" height="32px" alt="" />
    </div>
  )
}

export default EReadersCard

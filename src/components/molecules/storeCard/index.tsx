import React from 'react'
import Image from '../../atoms/image'
import styles from './style.css'
import { HeaderFive, Text } from '../../atoms/typography'
import Strings from '../../assets/strings'
import Rating from '../rating'

export interface storeCardProps {
  src: string;
  author: string;
  title: string;
  rating: number;
}

const StoreCard = ({ src, author, title, rating }: storeCardProps) => {
  return (
    <div>
      <div className={styles.cardView}>
        <div>
          <Image src={src} width="200px" height="218px" alt="" />
        </div>
        <div className={styles.textView}>
          <div className={styles.cardView}>
            <div>
              <div className={styles.titleView}>
                <Text textLabel={title} className={styles.titleText} />
                <Text textLabel={Strings.date} className={styles.descText} />
                <Text textLabel={'|'} className={styles.descText} />
                <Text textLabel={Strings.type} className={styles.descText} />
              </div>
              {/* <div className={styles.titleView}> */}

              <div className={styles.textView}>
                <div className={styles.by}>
                  by <span className={styles.author}>{author}</span>
                </div>
              </div>
              <div style={{ paddingTop: '20px' }}>
                <Text textLabel={Strings.kindleEdition} className={styles.edition} />
                <div className={styles.rupees}>
                  ₹0 <span className={styles.kindle}>{Strings.kindle}</span>
                  <span className={styles.by}>{Strings.unlimited}</span>
                </div>
              </div>
              <div className={styles.rate}>
                ₹99 <span className={styles.toBuy}>{Strings.toBuy}</span>
              </div>
              <Text textLabel={Strings.AvailableForDownload} className={styles.by} />
            </div>
            <div className={styles.ratingView}>
              <Rating rating={rating} />
              <Text textLabel={Strings.ratingCount} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.border} />
    </div>
  )
}

export default StoreCard

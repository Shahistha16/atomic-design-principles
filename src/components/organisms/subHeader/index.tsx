import React from 'react'
import styles from './style.css'
import Button from '../../atoms/button'
import TextComponent from '../../molecules/textComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import Strings from '../../assets/strings'
import { Text } from '../../atoms/typography'
import Image from '../../atoms/image'

const SubHeader = () => {
  return (
    <div className={styles.subHeaderView}>
      <Button className={styles.locationView}>
        <FontAwesomeIcon icon={faMapMarker} color="white" />
      </Button>
      <div className={styles.textView}>
        <TextComponent
          upperClassName={styles.textColor}
          upperText={Strings.hello}
          lowerText={Strings.selectAddress}
        />
      </div>
      <Text textLabel={Strings.mobiles} className={styles.textStyle} />
      <Text textLabel={Strings.bestSellers} className={styles.textStyle} />
      <Text textLabel={Strings.computers} className={styles.textStyle} />
      <Text textLabel={Strings.pantry} className={styles.textStyle} />
      <Text textLabel={Strings.amazonPay} className={styles.textStyle} />
      <Text textLabel={Strings.books} className={styles.textStyle} />
      <Text textLabel={Strings.newReleases} className={styles.textStyle} />
      <Text textLabel={Strings.customerService} className={styles.textStyle} />
      <Text textLabel={Strings.sell} className={styles.textStyle} />
      <Text textLabel={Strings.giftIdeas} className={styles.textStyle} />
      <Text textLabel={Strings.baby} className={styles.textStyle} />
      <Text textLabel={Strings.amazonBasics} className={styles.textStyle} />
      <Text textLabel={Strings.coupons} className={styles.textStyle} />
      {/* <div className={styles.imageView}>
        <Image
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/June/gaming-swm._CB430661085_.jpg"
          width="400px"
          height="39px"
          alt=""
        />
      </div> */}
    </div>
  )
}

export default SubHeader

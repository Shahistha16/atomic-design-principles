import React from 'react'
import styles from './style.css'
import Button from '../../atoms/button'
import { Text, HeaderFour } from '../../atoms/typography'
import Strings from '../../assets/strings'
import Images from '../../assets/images'
import Image from '../../atoms/image'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  const scrollTop = () => {
    console.log('object')
    window.scrollTo(0, 0)
  }
  return (
    <div className={styles.view}>
      <Button className={styles.buttonView}>
        <Text textLabel={Strings.backToTop} className={styles.text} />
      </Button>
      <div className={styles.subView}>
        <div className={styles.tableView}>
          <div className={styles.column}>
            <a href="">
              <HeaderFour textLabel={Strings.getToKnowUs} />
            </a>
            <a href="">
              <Text textLabel={Strings.aboutUs} className={styles.text} />
            </a>
            <a href="">
              <Text textLabel={Strings.careers} className={styles.text} />
            </a>
            <a href="">
              <Text textLabel={Strings.pressReleases} className={styles.text} />
            </a>
            <a href="">
              <Text textLabel={Strings.amazonCares} className={styles.text} />
            </a>
            <a href="">
              <Text textLabel={Strings.giftASmile} className={styles.text} />
            </a>
          </div>
          <div className={styles.column}>
            <a href="">
              <HeaderFour textLabel={Strings.connectWithUs} />
            </a>
            <a href="">
              <Text textLabel={Strings.facebook} className={styles.text} />
            </a>
            <a href="">
              <Text textLabel={Strings.twitter} className={styles.text} />
            </a>
            <a href="">
              <Text textLabel={Strings.instagram} className={styles.text} />
            </a>
          </div>
          <div className={styles.column}>
            <a href="">
              <HeaderFour textLabel={Strings.makeMoneyWithUs} />
            </a>
            <a href="">
              <Text textLabel={Strings.sellOnAmazon} className={styles.text} />
            </a>
            <a href="">
              <Text textLabel={Strings.sellUnderAmazonAccelerator} className={styles.text} />
            </a>
            <a href="">
              <Text textLabel={Strings.becomeAnAffiliate} className={styles.text} />
            </a>
            <a href="">
              <Text textLabel={Strings.fulfilmentByAmazon} className={styles.text} />
            </a>
            <a href="">
              <Text textLabel={Strings.advertiseYourProducts} className={styles.text} />
            </a>
            <a href="">
              <Text textLabel={Strings.amazonPayOnMerchants} className={styles.text} />
            </a>
          </div>
          <div className={styles.column}>
            <a href="">
              <HeaderFour textLabel={Strings.letUsHelpYou} />
            </a>
            <a href="">
              <Text textLabel={Strings.COVID19AndAmazon} className={styles.text} />
            </a>
            <a href="">
              <Text textLabel={Strings.yourAccount} className={styles.text} />
            </a>
            <a href="">
              <Text textLabel={Strings.returnsCentre} className={styles.text} />
            </a>
            <a href="">
              <Text textLabel={Strings.purchaseProtection} className={styles.text} />
            </a>
            <a href="">
              <Text textLabel={Strings.pmazonAppDownload} className={styles.text} />
            </a>
            <a href="">
              <Text textLabel={Strings.amazonAssistantDownload} className={styles.text} />
            </a>
            <a href="">
              <Text textLabel={Strings.help} className={styles.text} />
            </a>
          </div>
        </div>
        <div className={styles.border} />
        <div className={styles.langContainer}>
          <div className={styles.imgView}>
            <Image src={Images.logo} width="76px" height="25px" alt="" />
          </div>
          <div className={styles.langView}>
            <FontAwesomeIcon icon={faGlobe} color="#ffffff" />
            <Text textLabel={Strings.english} className={styles.language} />
          </div>
        </div>
        <div className={styles.countryView}>
          <a href="">
            <Text textLabel={Strings.australia} className={styles.countryText} />
          </a>
          <a href="">
            <Text textLabel={Strings.brazil} className={styles.countryText} />
          </a>
          <a href="">
            <Text textLabel={Strings.canada} className={styles.countryText} />
          </a>
          <a href="">
            <Text textLabel={Strings.china} className={styles.countryText} />
          </a>
          <a href="">
            <Text textLabel={Strings.france} className={styles.countryText} />
          </a>
          <a href="">
            <Text textLabel={Strings.germany} className={styles.countryText} />
          </a>
          <a href="">
            <Text textLabel={Strings.italy} className={styles.countryText} />
          </a>
          <a href="">
            <Text textLabel={Strings.japan} className={styles.countryText} />
          </a>
          <a href="">
            <Text textLabel={Strings.mexico} className={styles.countryText} />
          </a>
          <a href="">
            <Text textLabel={Strings.netherlands} className={styles.countryText} />
          </a>
          <a href="">
            <Text textLabel={Strings.singapore} className={styles.countryText} />
          </a>
          <a href="">
            <Text textLabel={Strings.spain} className={styles.countryText} />
          </a>
          <a href="">
            <Text textLabel={Strings.unitedArabEmirates} className={styles.countryText} />
          </a>
          <a href="">
            <Text textLabel={Strings.unitedKingdom} className={styles.countryText} />
          </a>
          <a href="">
            <Text textLabel={Strings.unitedStates} className={styles.countryText} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer

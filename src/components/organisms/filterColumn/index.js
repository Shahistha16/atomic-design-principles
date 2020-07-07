import React from 'react'
import styles from './style.css'
import { HeaderFour, SubTitle, Text, Typography } from '../../atoms/typography'
import Strings from '../../assets/strings'
import Rating from '../../molecules/rating'
import { kindleUnlimited, primeReading, wordWise, Deals } from '../../constants'
import CheckBox from '../../atoms/checkBox'
import TextBox from '../../atoms/textBox'
import Button from '../../atoms/button'

const FilterColumn = () => {
  return (
    <div className={styles.filterView}>
      <SubTitle textLabel={Strings.showResultsfor} className={styles.header} />
      <HeaderFour textLabel={Strings.kindleStore} className={styles.subHeader} />
      <Typography
        textLabel={Strings.kindleEReader}
        className={`${styles.text} ${styles.paddingLeft}`}
      />
      <div className={styles.border}></div>
      <SubTitle textLabel={Strings.refinebBy} className={styles.header} />
      <HeaderFour textLabel={Strings.newArrivals} className={styles.subHeader} />
      <Typography textLabel={Strings.Last30days} className={styles.text} />
      <Typography textLabel={Strings.Last90days} className={styles.text} />
      <Typography textLabel={Strings.comingSoon} className={styles.text} />
      <HeaderFour textLabel={Strings.kindleUnlimited} className={styles.subHeader} />
      <div className={styles.checkBoxView}>
        <CheckBox checkBoxData={kindleUnlimited} labelStyle={styles.text} />
      </div>
      <HeaderFour textLabel={Strings.primeReading} className={styles.subHeader} />
      <CheckBox checkBoxData={primeReading} labelStyle={styles.text} />
      <HeaderFour textLabel={Strings.wordWise} className={styles.subHeader} />
      <CheckBox checkBoxData={wordWise} labelStyle={styles.text} />
      <HeaderFour textLabel={Strings.avgCustomerReview} className={styles.subHeader} />
      <div className={styles.ratingView}>
        <Rating rating={4} />
        <Typography textLabel={Strings.andUp} className={styles.text} />
      </div>
      <div className={styles.ratingView}>
        <Rating rating={3} />
        <Typography textLabel={Strings.andUp} className={styles.text} />
      </div>
      <div className={styles.ratingView}>
        <Rating rating={2} />
        <Typography textLabel={Strings.andUp} className={styles.text} />
      </div>
      <div className={styles.ratingView}>
        <Rating rating={1} />
        <Typography textLabel={Strings.andUp} className={styles.text} />
      </div>
      <HeaderFour textLabel={Strings.Price} className={styles.subHeader} />
      <Typography textLabel={Strings.Under50} className={styles.text} />
      <Typography textLabel={Strings.R50_100} className={styles.text} />
      <Typography textLabel={Strings.R100_200} className={styles.text} />
      <Typography textLabel={Strings.R200_500} className={styles.text} />
      <Typography textLabel={Strings.R500_Above} className={styles.text} />
      <div className={styles.priceRangeView}>
        <TextBox className={styles.boxView} placeholder={'Min'} />
        <TextBox className={styles.boxView} placeholder={'Max'} />
        <Button className={styles.buttonView}>
          <Typography textLabel={Strings.Go} className={styles.buttonText} />
        </Button>
      </div>
      <HeaderFour textLabel={Strings.Deals} className={styles.subHeader} />
      <CheckBox checkBoxData={Deals} labelStyle={styles.text} />
      <HeaderFour textLabel={Strings.Discount} className={styles.subHeader} />
      <Typography textLabel={Strings.OffOrMore10} className={styles.text} />
      <Typography textLabel={Strings.OffOrMore25} className={styles.text} />
      <Typography textLabel={Strings.OffOrMore35} className={styles.text} />
      <Typography textLabel={Strings.OffOrMore50} className={styles.text} />
    </div>
  )
}

export default FilterColumn

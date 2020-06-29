/* @flow */

import * as React from 'react'
import Button from '../../atoms/button'
import Images from '../../assets/images'
import Strings from '../../assets/strings'
import TextBox from '../../atoms/textBox'
// import typography from '../../atoms/typography/style.css'
import './searchBarStyle.css'

const SearchBar = className => {
  const onClick = () => {}
  return (
    <div className={className} style={{ display: 'flex' }}>
      <Button
        isText={true}
        type="button"
        title={Strings.kindleStore}
        className="text-button"
        onClick={onClick()}
      />
      <TextBox />
      <Button
        isText={false}
        width="30"
        height="30"
        src={Images.search}
        alt=""
        onClick={onClick()}
      />
    </div>
  )
}

export default SearchBar

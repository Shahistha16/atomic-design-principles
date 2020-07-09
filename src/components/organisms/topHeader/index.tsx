/* @flow */
import * as React from "react";
import Image from "../../atoms/image";
import Button from "../../atoms/button";
import SearchBar from "../../molecules/searchBar";
// import Text from '../../atoms/text'
import styles from "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Strings from "../../assets/strings";
import TextComponent from "../../molecules/textComponent";
import logo from "../../assets/images/amazonLogo.jpg";
import flag from "../../assets/images/flag.png";

const TopHeader = () => {
  return (
    <div className={styles.topheaderView}>
      <Button className={styles.menuView}>
        <FontAwesomeIcon icon={faBars} color="white" />
      </Button>
      <div className={styles.logoView}>
        <Image src={logo} width="140px" height="40px" alt="" />
      </div>
      <SearchBar />
      <Button className={styles.menuView}>
        <Image src={flag} width="24px" height="18px" alt="" />
      </Button>
      <TextComponent
        upperText={Strings.helloSignIn}
        lowerText={Strings.accountsLists}
      />
      <TextComponent upperText={Strings.returns} lowerText={Strings.orders} />
      <TextComponent upperText={Strings.try} lowerText={Strings.prime} />
      <Button className={styles.cartView}>
        <FontAwesomeIcon icon={faCartPlus} color="white" />
      </Button>
    </div>
  );
};

export default TopHeader;

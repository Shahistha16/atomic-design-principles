import React from "react";
import {
  HeaderSix,
  Title,
  HeaderFour,
  HeaderFive,
} from "../../atoms/typography";
import Strings from "../../assets/strings";
import styles from "./styles.css";
import BestSellerCard from "../../molecules/bestSellerCard";
import Image from "../../atoms/image";

const RelatedBooks = () => {
  return (
    <div className={styles.view}>
      <div className={styles.border} />
      <div className={styles.titleView}>
        <Title textLabel={Strings.bextSellerEbooks} />
        <HeaderSix textLabel={"Page 1 of 6"} />
      </div>
      <div className={styles.cardView}>
        <BestSellerCard
          src={
            "https://images-eu.ssl-images-amazon.com/images/I/816dOlxU5qL.__BG0,0,0,0_FMpng_AC_UL270_SR174,270_.jpg"
          }
          width="87"
          height="135"
          title={"Man`s Search For Meaning: The classic tribute to…"}
          author={"Viktor E Frankl"}
          rating={3}
        />
        <BestSellerCard
          src={
            "https://images-eu.ssl-images-amazon.com/images/I/71-V6LEZU8L.__BG0,0,0,0_FMpng_AC_UL270_SR174,270_.jpg"
          }
          width="87"
          height="135"
          title={"How to Win Friends and Influence People"}
          author={"Dale Carnegie"}
          rating={4}
        />
        <BestSellerCard
          src={
            "https://images-eu.ssl-images-amazon.com/images/I/816dOlxU5qL.__BG0,0,0,0_FMpng_AC_UL270_SR174,270_.jpg"
          }
          width="87"
          height="135"
          title={"Man`s Search For Meaning: The classic tribute to…"}
          author={"Viktor E Frankl"}
          rating={3}
        />
        <BestSellerCard
          src={
            "https://images-eu.ssl-images-amazon.com/images/I/71-V6LEZU8L.__BG0,0,0,0_FMpng_AC_UL270_SR174,270_.jpg"
          }
          width="87"
          height="135"
          title={"How to Win Friends and Influence People"}
          author={"Dale Carnegie"}
          rating={4}
        />
        <BestSellerCard
          src={
            "https://images-eu.ssl-images-amazon.com/images/I/816dOlxU5qL.__BG0,0,0,0_FMpng_AC_UL270_SR174,270_.jpg"
          }
          width="87"
          height="135"
          title={"Man`s Search For Meaning: The classic tribute to…"}
          author={"Viktor E Frankl"}
          rating={3}
        />
        <BestSellerCard
          src={
            "https://images-eu.ssl-images-amazon.com/images/I/71-V6LEZU8L.__BG0,0,0,0_FMpng_AC_UL270_SR174,270_.jpg"
          }
          width="87"
          height="135"
          title={"How to Win Friends and Influence People"}
          author={"Dale Carnegie"}
          rating={4}
        />
        <BestSellerCard
          src={
            "https://images-eu.ssl-images-amazon.com/images/I/816dOlxU5qL.__BG0,0,0,0_FMpng_AC_UL270_SR174,270_.jpg"
          }
          width="87"
          height="135"
          title={"Man`s Search For Meaning: The classic tribute to…"}
          author={"Viktor E Frankl"}
          rating={3}
        />
        <BestSellerCard
          src={
            "https://images-eu.ssl-images-amazon.com/images/I/71-V6LEZU8L.__BG0,0,0,0_FMpng_AC_UL270_SR174,270_.jpg"
          }
          width="87"
          height="135"
          title={"How to Win Friends and Influence People"}
          author={"Dale Carnegie"}
          rating={4}
        />
        <BestSellerCard
          src={
            "https://images-eu.ssl-images-amazon.com/images/I/816dOlxU5qL.__BG0,0,0,0_FMpng_AC_UL270_SR174,270_.jpg"
          }
          width="87"
          height="135"
          title={"Man`s Search For Meaning: The classic tribute to…"}
          author={"Viktor E Frankl"}
          rating={3}
        />
      </div>
      <div className={styles.titleView}>
        <Title textLabel={Strings.topSubscriptionApps} />
        <HeaderSix textLabel={"Page 1 of 2"} />
      </div>
      <div className={styles.cardView}>
        <BestSellerCard
          src={
            "https://images-eu.ssl-images-amazon.com/images/I/618QebNS6FL._AC_UL270_SR270,270_.png"
          }
          width="135"
          height="135"
          title={"AirScreen - AirPlay & Google Cast & Miracast & DLNA"}
          author={"重庆爱奥尼科技有限公司"}
          rating={4}
        />
        <BestSellerCard
          src={
            "https://images-eu.ssl-images-amazon.com/images/I/41nv5NXCX-L._AC_UL270_SR270,270_.png"
          }
          width="135"
          height="135"
          title={"How to Win Friends and Influence People"}
          author={"Simplona Tools"}
          rating={4.5}
        />
        <BestSellerCard
          src={
            "https://images-eu.ssl-images-amazon.com/images/I/618QebNS6FL._AC_UL270_SR270,270_.png"
          }
          width="135"
          height="135"
          title={"AirScreen - AirPlay & Google Cast & Miracast & DLNA"}
          author={"重庆爱奥尼科技有限公司"}
          rating={4}
        />
        <BestSellerCard
          src={
            "https://images-eu.ssl-images-amazon.com/images/I/41nv5NXCX-L._AC_UL270_SR270,270_.png"
          }
          width="135"
          height="135"
          title={"How to Win Friends and Influence People"}
          author={"Simplona Tools"}
          rating={4.5}
        />
        <BestSellerCard
          src={
            "https://images-eu.ssl-images-amazon.com/images/I/618QebNS6FL._AC_UL270_SR270,270_.png"
          }
          width="135"
          height="135"
          title={"AirScreen - AirPlay & Google Cast & Miracast & DLNA"}
          author={"重庆爱奥尼科技有限公司"}
          rating={4}
        />
        <BestSellerCard
          src={
            "https://images-eu.ssl-images-amazon.com/images/I/41nv5NXCX-L._AC_UL270_SR270,270_.png"
          }
          width="135"
          height="135"
          title={"How to Win Friends and Influence People"}
          author={"Simplona Tools"}
          rating={4.5}
        />
        <BestSellerCard
          src={
            "https://images-eu.ssl-images-amazon.com/images/I/618QebNS6FL._AC_UL270_SR270,270_.png"
          }
          width="135"
          height="135"
          title={"AirScreen - AirPlay & Google Cast & Miracast & DLNA"}
          author={"重庆爱奥尼科技有限公司"}
          rating={4}
        />
        <BestSellerCard
          src={
            "https://images-eu.ssl-images-amazon.com/images/I/41nv5NXCX-L._AC_UL270_SR270,270_.png"
          }
          width="135"
          height="135"
          title={"How to Win Friends and Influence People"}
          author={"Simplona Tools"}
          rating={4.5}
        />
        <BestSellerCard
          src={
            "https://images-eu.ssl-images-amazon.com/images/I/618QebNS6FL._AC_UL270_SR270,270_.png"
          }
          width="135"
          height="135"
          title={"AirScreen - AirPlay & Google Cast & Miracast & DLNA"}
          author={"重庆爱奥尼科技有限公司"}
          rating={4}
        />
      </div>
      <div className={styles.border} />
      <div className={styles.historyView}>
        <Title textLabel={Strings.browsingHistory} />
        <HeaderFive textLabel={Strings.viewEditBrowsingHistory} />
      </div>
      <div className={styles.historyImgs}>
        <div className={styles.imgView}>
          <Image
            src={
              "https://images-eu.ssl-images-amazon.com/images/I/61CFdAd2H%2BL._AC_UL100_SR100,100_.jpg"
            }
            width="100px"
            height="100px"
            alt=""
          />
        </div>
        <div className={styles.imgView}>
          <Image
            src={
              "https://images-eu.ssl-images-amazon.com/images/I/51RJF1V23zL._AC_UL100_SR100,100_.jpg"
            }
            width="100px"
            height="100px"
            alt=""
          />
        </div>
        <div className={styles.imgView}>
          <Image
            src={
              "https://images-eu.ssl-images-amazon.com/images/I/61NjJ4LjFFL._AC_UL100_SR100,100_.jpg"
            }
            width="100px"
            height="100px"
            alt=""
          />
        </div>
        <div className={styles.imgView}>
          <Image
            src={
              "https://images-eu.ssl-images-amazon.com/images/I/41aTw6F6DDL._AC_UL100_SR100,100_.jpg"
            }
            width="100px"
            height="100px"
            alt=""
          />
        </div>
        <div className={styles.imgView}></div>
      </div>
    </div>
  );
};

export default RelatedBooks;

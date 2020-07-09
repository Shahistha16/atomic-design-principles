import * as React from "react";
import TopHeader from "../../organisms/topHeader";
import SubHeader from "../../organisms/subHeader";
import KindleHeader from "../../organisms/kindleHeader";
import FilterColumn from "../../organisms/filterColumn";
import EReaderBooks from "../../organisms/eReaderBooks";
import KindleDescription from "../../molecules/kindleDescription";
import RelatedBooks from "../../organisms/relatedBooks";
import Footer from "../../organisms/footer";
import styles from "./style.css";

const Home = () => {
  return (
    <div>
      <TopHeader />
      <SubHeader />
      <KindleHeader />
      <div className={styles.bodyView}>
        <div className={styles.filterView}>
          <FilterColumn />
        </div>
        <div className={styles.diaplayView}>
          <EReaderBooks />
          <KindleDescription />
        </div>
      </div>
      <RelatedBooks />
      <Footer />
    </div>
  );
};

export default Home;

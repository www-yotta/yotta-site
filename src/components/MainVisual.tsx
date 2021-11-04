import React, { NextPage } from "next";
import Image from "next/image";
import mv from "images/mv_bg.png";
import yotta from "images/yotta_up.png";
import styles from "./MainVisual.module.scss";

const MainVisual: NextPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.loopSlide}>
        <Image
          src={mv}
          width={1920}
          height={500}
          alt="三波ヨタオフィシャルサイトのメインヴィジュアル1"
        />
        <Image
          src={mv}
          width={1920}
          height={500}
          alt="三波ヨタオフィシャルサイトのメインヴィジュアル2"
        />
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Virtual
          <br />
          Web
          <br />
          Engineer
        </h1>
        <Image
          src={yotta}
          width={400}
          height={450}
          alt="三波ヨタバストアップ"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default MainVisual;

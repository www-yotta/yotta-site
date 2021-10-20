import { NextPage } from "next";
import Image from "next/image";
import mv from "images/mv.png";
import styles from "./MainVisual.module.scss";

const MainVisual: NextPage = () => {
  return (
    <div className={styles.root}>
      <Image src={mv} alt="三波ヨタオフィシャルサイトのメインヴィジュアル" />
    </div>
  );
};

export default MainVisual;

import { NextPage } from "next";
import styles from "./Footer.module.scss";

const Footer: NextPage = () => {
  return (
    <footer className={styles.root}>
      <p className={styles.copyright}>&copy;www.yotta</p>
    </footer>
  );
};

export default Footer;

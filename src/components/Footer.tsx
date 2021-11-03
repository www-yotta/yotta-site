import React, { FC } from "react";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.root}>
      <p className={styles.copyright}>&copy;www.yotta</p>
    </footer>
  );
};

export default Footer;

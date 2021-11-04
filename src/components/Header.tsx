import React, { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "images/logo.png";
import clsx from "clsx";
import { FaBars } from "react-icons/fa";

const Header: FC = () => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  return (
    <header className={clsx(styles.root, menuToggle && styles.rootOpen)}>
      <div className={styles.inner}>
        <div className={styles.innerLeft}>
          <Link href="/">
            <a>
              <Image src={logo} height={40} objectFit="contain" alt="ロゴ" />
            </a>
          </Link>
          <div
            className={styles.menuButton}
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <FaBars size={25} />
          </div>
        </div>
        <nav className={clsx(styles.nav)}>
          <ul className={clsx(styles.menu)}>
            <li>
              <Link href="/#profile">
                <a>プロフィール</a>
              </Link>
            </li>
            <li>
              <Link href="/#youtube">
                <a>YouTube</a>
              </Link>
            </li>
            <li>
              <Link href="/#work">
                <a>仕事</a>
              </Link>
            </li>
            <li>
              <Link href="/#blog">
                <a>ブログ</a>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <a>お問い合わせ</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

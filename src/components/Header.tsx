import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "images/logo.png";

const Header: NextPage = () => {
  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <Link href="/">
          <a>
            <Image src={logo} height={40} objectFit="contain" alt="ロゴ" />
          </a>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li>
              <Link href="#profile">
                <a>プロフィール</a>
              </Link>
            </li>
            <li>
              <Link href="#youtube">
                <a>YouTube</a>
              </Link>
            </li>
            <li>
              <Link href="#work">
                <a>仕事</a>
              </Link>
            </li>
            <li>
              <Link href="#blog">
                <a>ブログ</a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
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

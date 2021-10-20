import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

const Header: NextPage = () => {
  return (
    <header className={styles.root}>
      <Image src="/" alt="ロゴ" width={100} height={40} />
      <nav>
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
    </header>
  );
};

export default Header;

import React, { FC, useState, ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "images/logo.png";
import clsx from "clsx";
import { FaBars, FaTimes } from "react-icons/fa";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";

type ResponsiveMenuProps = {
  open: boolean;
  onClose: () => void;
  children: ReactElement;
};
const ResponsiveMenu: FC<ResponsiveMenuProps> = ({
  open,
  children,
  onClose,
}) => {
  const matches = useMediaQuery("(max-width:991px)");

  return matches ? (
    <Drawer open={open} anchor="right" onClose={onClose}>
      <div className={styles.drawerHeader}>
        <FaTimes size={30} onClick={onClose} />
      </div>
      {children}
    </Drawer>
  ) : (
    children
  );
};

const Header: FC = () => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  return (
    <header className={clsx(styles.root)}>
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
        <ResponsiveMenu open={menuToggle} onClose={() => setMenuToggle(false)}>
          <nav className={clsx(styles.nav)}>
            <ul className={clsx(styles.menu)}>
              <li onClick={() => setMenuToggle(false)}>
                <Link href="/#profile">
                  <a>プロフィール</a>
                </Link>
              </li>
              <li onClick={() => setMenuToggle(false)}>
                <Link href="/#youtube">
                  <a>YouTube</a>
                </Link>
              </li>
              <li onClick={() => setMenuToggle(false)}>
                <Link href="/#work">
                  <a>仕事</a>
                </Link>
              </li>
              <li onClick={() => setMenuToggle(false)}>
                <Link href="/#blog">
                  <a>ブログ</a>
                </Link>
              </li>
              <li onClick={() => setMenuToggle(false)}>
                <Link href="/#contact">
                  <a>お問い合わせ</a>
                </Link>
              </li>
            </ul>
          </nav>
        </ResponsiveMenu>
      </div>
    </header>
  );
};

export default Header;

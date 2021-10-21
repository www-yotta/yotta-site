import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./BlogSection.module.scss";

const BlogSection: NextPage = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>ブログ</h2>
      <p>気になったことを書きます。</p>
      <div className={styles.blog}>
        <div className={styles.blogItem}>
          <div className={styles.blogItemImage}>
            <Image
              src="/src/images/320x180.png"
              width={320}
              height={180}
              alt="ブログのサムネイル"
            />
          </div>
          <div className={styles.blogItemContent}>
            <h3 className={styles.blogItemTitle}>ブログタイトル</h3>
            <p className={styles.blogItemText}>
              ここにブログの内容がここに3行ぐらい入ります。ここにブログの内容がここに3行ぐらい入ります。ここにブログの内容がここに3行ぐらい入ります。
            </p>
            <div className={styles.blogItemFooter}>
              <Link href="">
                <a className={styles.blogItemLink}>詳細を見る</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.blogItem}>
          <div className={styles.blogItemImage}>
            <Image
              src="/src/images/320x180.png"
              width={320}
              height={180}
              alt="ブログのサムネイル"
            />
          </div>
          <div className={styles.blogItemContent}>
            <h3 className={styles.blogItemTitle}>ブログタイトル</h3>
            <p className={styles.blogItemText}>
              ここにブログの内容がここに3行ぐらい入ります。ここにブログの内容がここに3行ぐらい入ります。ここにブログの内容がここに3行ぐらい入ります。
            </p>
            <div className={styles.blogItemFooter}>
              <Link href="">
                <a className={styles.blogItemLink}>詳細を見る</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.blogItem}>
          <div className={styles.blogItemImage}>
            <Image
              src="/src/images/320x180.png"
              width={320}
              height={180}
              alt="ブログのサムネイル"
            />
          </div>
          <div className={styles.blogItemContent}>
            <h3 className={styles.blogItemTitle}>ブログタイトル</h3>
            <p className={styles.blogItemText}>
              ここにブログの内容がここに3行ぐらい入ります。ここにブログの内容がここに3行ぐらい入ります。ここにブログの内容がここに3行ぐらい入ります。
            </p>
            <div className={styles.blogItemFooter}>
              <Link href="">
                <a className={styles.blogItemLink}>詳細を見る</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link href="">
        <a className={styles.blogListLink}>全て見る</a>
      </Link>
    </section>
  );
};

export default BlogSection;

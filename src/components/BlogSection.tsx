import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./BlogSection.module.scss";
import { BlogData } from "types/api";
import Button from "@mui/material/Button";

type BLogSectionProps = {
  id: string;
  data: BlogData[];
};
const BlogSection: FC<BLogSectionProps> = ({ data, ...props }) => {
  return (
    <section className={styles.root} {...props}>
      <div className="inner">
        <h2 className="title">ブログ</h2>
        <p className="description">気になったことを書きます。</p>
        <div className={styles.blog}>
          {data?.map((item) => {
            return (
              <div className={styles.blogItem} key={item.id}>
                <div className={styles.blogItemImage}>
                  <Image
                    src={item.image.url}
                    width={320}
                    height={180}
                    alt="ブログのサムネイル"
                    objectFit="cover"
                  />
                </div>
                <div className={styles.blogItemContent}>
                  <h3 className={styles.blogItemTitle}>{item.title}</h3>
                  <div
                    className={styles.blogItemText}
                    dangerouslySetInnerHTML={{
                      __html: `${item.body}`,
                    }}
                  ></div>
                  <div className={styles.blogItemFooter}>
                    <Link href={`/blog/${item.id}`} passHref>
                      <Button
                        variant="outlined"
                        className={styles.blogItemLink}
                      >
                        詳細を見る
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Link href="/blog/page/1" passHref>
          <Button variant="outlined" className={styles.blogListLink}>
            詳細を見る
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;

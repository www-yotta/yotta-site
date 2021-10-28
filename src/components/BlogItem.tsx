import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./BlogItem.module.scss";
import { BlogData } from "types/api";
import Button from "@mui/material/Button";

type BlogItemProps = {
  item: BlogData;
};
const BlogItem: FC<BlogItemProps> = ({ item }) => {
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
            <Button variant="outlined" className={styles.blogItemLink}>
              詳細を見る
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;

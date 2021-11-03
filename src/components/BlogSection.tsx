import React, { FC } from "react";
import Link from "next/link";
import styles from "./BlogSection.module.scss";
import { BlogData } from "types/api";
import Button from "@mui/material/Button";
import BlogItem from "components/BlogItem";

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
            return <BlogItem item={item} key={item.id} />;
          })}
        </div>
        <Link href="/blog/page/1" passHref>
          <Button variant="outlined" className={styles.blogListLink}>
            全て見る
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;

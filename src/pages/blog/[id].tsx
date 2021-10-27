import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { fetcher } from "utils/fetcher";
import { BlogData } from "types/api";
import Image from "next/image";
import Link from "next/link";
import Header from "components/Header";
import styles from "./detail.module.scss";

type BlogDetailProps = {
  blogData: BlogData;
};
const BlogDetail: NextPage<BlogDetailProps> = ({ blogData }) => {
  return (
    <main className={styles.root}>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>{blogData.title}</h1>
        <div className={styles.work}>
          <div className={styles.workImage}>
            <Image
              src={blogData.image.url}
              width={320}
              height={180}
              alt="ブログのサムネイル"
              objectFit="cover"
            />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blogData.body}`,
            }}
            className={styles.workDetail}
          ></div>
        </div>
      </div>
      <Link href="/">
        <a className={styles.topLink}>トップに戻る</a>
      </Link>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogData = await fetcher("/blog");
  const paths = blogData.contents.map((item: BlogData) => `/blog/${item.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogData = await fetcher(`/blog/${context.params?.id}`);
  return {
    props: {
      blogData,
    },
  };
};

export default BlogDetail;

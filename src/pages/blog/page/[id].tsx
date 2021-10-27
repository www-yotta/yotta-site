import { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { fetcher } from "utils/fetcher";
import Pagination from "@mui/material/Pagination";
import { BlogData } from "types/api";
import Router from "next/router";
import styles from "../../Home.module.scss";
import detailStyles from "./detail.module.scss";
import blogStyles from "../../../components/BlogSection.module.scss";
import Header from "components/Header";
import Footer from "components/Footer";

const PER_PAGE = 9;
const PAGE_NAME = "blog";

type BlogPageIdProps = {
  blog: BlogData[];
  totalCount: number;
  id: number;
  count: number;
};

const BlogPageId: FC<BlogPageIdProps> = ({ blog, id, count }) => {
  // TODO: 外出しにする
  const handleClick = (_: { preventDefault: () => void }, page: number) => {
    Router.push(`/${PAGE_NAME}/page/${page}`);
  };

  return (
    <div className={styles.root}>
      <Head>
        <title>三波ヨタ|ブログ {id} ページ目</title>
        <meta name="description" content="三波ヨタのブログです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className={detailStyles.container}>
          <h1 className={detailStyles.title}>三波ヨタのブログ</h1>
          <div className={blogStyles.blog}>
            {blog.map((item: any) => (
              <div className={blogStyles.blogItem} key={item.id}>
                <div className={blogStyles.blogItemImage}>
                  <Image
                    src={item.image.url}
                    width={320}
                    height={180}
                    alt="ブログのサムネイル"
                    objectFit="cover"
                  />
                </div>
                <div className={blogStyles.blogItemContent}>
                  <h3 className={blogStyles.blogItemTitle}>{item.title}</h3>
                  <div
                    className={blogStyles.blogItemText}
                    dangerouslySetInnerHTML={{
                      __html: `${item.body}`,
                    }}
                  ></div>
                  <div className={blogStyles.blogItemFooter}>
                    <Link href={`/${PAGE_NAME}/${item.id}`}>
                      <a className={blogStyles.blogItemLink}>詳細を見る</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            count={count}
            page={Number(id)}
            onChange={handleClick}
            showFirstButton
            showLastButton
            className={styles.pagination}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPageId;

// TODO: 中身を汎用化したい
// 動的なページを作成
export const getStaticPaths = async () => {
  const repos = await fetcher(`/${PAGE_NAME}`);

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/${PAGE_NAME}/page/${repo}`
  );

  return { paths, fallback: false };
};

// TODO: 中身を汎用化したい
// データを取得
export const getStaticProps = async (context: { params: { id: number } }) => {
  const id = context.params.id;
  const option = {
    offset: (id - 1) * PER_PAGE,
    limit: PER_PAGE,
  };
  const data = await fetcher(`/${PAGE_NAME}`, option);
  const count = Math.ceil(data.totalCount / PER_PAGE);

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      id,
      count,
    },
  };
};

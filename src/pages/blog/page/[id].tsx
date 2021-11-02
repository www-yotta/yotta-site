import { FC } from "react";
import Head from "next/head";
import { fetcher } from "utils/fetcher";
import Pagination from "@mui/material/Pagination";
import { BlogData, SeoData, ImageProps } from "types/api";
import Router from "next/router";
import styles from "../../Home.module.scss";
import detailStyles from "./detail.module.scss";
import blogStyles from "../../../components/BlogSection.module.scss";
import Header from "components/Header";
import Footer from "components/Footer";
import BlogItem from "components/BlogItem";
import { MicroCMSContents } from "types/microcms";
import Seo from "components/Seo";

const PER_PAGE = 9;
const PAGE_NAME = "blog";

type BlogPageIdProps = {
  blog: BlogData[];
  totalCount: number;
  id: number;
  count: number;
  seoImage: ImageProps;
  seoUrl: string;
};

const BlogPageId: FC<BlogPageIdProps> = ({
  blog,
  id,
  count,
  seoUrl,
  seoImage,
}) => {
  const endpoint = `${seoUrl}/${PAGE_NAME}/page`;
  const seoData: SeoData = {
    url: `${endpoint}/${id}`,
    image: seoImage,
    title: `三波ヨタのブログ | ${id}ページ目`,
    description: "三波ヨタのブログです。",
  };
  // TODO: 外出しにする
  const handleClick = (_: { preventDefault: () => void }, page: number) => {
    Router.push(`/${PAGE_NAME}/page/${page}`);
  };

  return (
    <div className={styles.root}>
      <Seo data={seoData} />
      <main>
        <Header />
        <div className="inner">
          <h1 className={detailStyles.title}>三波ヨタのブログ</h1>
          <div className={blogStyles.blog}>
            {blog.map((item) => (
              <BlogItem item={item} key={item.id} />
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
  const repos = await fetcher<MicroCMSContents<BlogData>>(`/${PAGE_NAME}`);

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
  const data = await fetcher<MicroCMSContents<BlogData>>(
    `/${PAGE_NAME}`,
    option
  );
  const { image: seoImage, url: seoUrl } = await fetcher<SeoData>("/seo");
  const count = Math.ceil(data.totalCount / PER_PAGE);

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      id,
      count,
      seoImage,
      seoUrl,
    },
  };
};

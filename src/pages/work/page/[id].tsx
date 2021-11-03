import { FC } from "react";
import { fetcher } from "utils/fetcher";
import Pagination from "@mui/material/Pagination";
import { WorkData, SeoData, ImageProps } from "types/api";
import Router from "next/router";
import styles from "../../Home.module.scss";
import workStyles from "../../../components/WorkSection.module.scss";
import Header from "components/Header";
import Footer from "components/Footer";
import detailStyles from "./detail.module.scss";
import WorkItem from "components/WorkItem";
import { MicroCMSContents } from "types/microcms";
import Seo from "components/Seo";

const PER_PAGE = 9;
const PAGE_NAME = "work";

type WorkPageIdProps = {
  blog: WorkData[];
  id: number;
  count: number;
  seoImage: ImageProps;
  seoUrl: string;
};
const WorkPageId: FC<WorkPageIdProps> = ({
  blog,
  count,
  id,
  seoImage,
  seoUrl,
}) => {
  const endpoint = `${seoUrl}/${PAGE_NAME}/page`;
  const seoData: SeoData = {
    url: `${endpoint}/${id}`,
    image: seoImage,
    title: `三波ヨタのポートフォリオ | ${id}ページ目`,
    description: "三波ヨタのポートフォリオです。",
  };
  const handleClick = (_: { preventDefault: () => void }, page: number) => {
    Router.push(`${endpoint}/${page}`);
  };
  return (
    <div className={styles.root}>
      <Seo data={seoData} />
      <main>
        <Header />
        <div className="inner">
          <h1 className={detailStyles.title}>お仕事ポートフォリオ</h1>
          <div className={workStyles.work}>
            {blog.map((item: any) => (
              <WorkItem item={item} key={item.id} />
            ))}
          </div>
          <Pagination
            count={count}
            page={Number(id)}
            showFirstButton
            showLastButton
            onChange={handleClick}
            className={styles.pagination}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkPageId;

// 動的なページを作成
export const getStaticPaths = async () => {
  const repos = await fetcher<MicroCMSContents<WorkData>>(`/${PAGE_NAME}`);
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/${PAGE_NAME}/page/${repo}`
  );

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context: { params: { id: number } }) => {
  const id = context.params.id;
  const option = {
    offset: (id - 1) * PER_PAGE,
    limit: PER_PAGE,
  };
  const data = await fetcher<MicroCMSContents<WorkData>>(
    `/${PAGE_NAME}`,
    option
  );
  const { image: seoImage, url: seoUrl } = await fetcher<SeoData>("/seo");
  const count = Math.ceil(data.totalCount / PER_PAGE);

  return {
    props: {
      blog: data.contents,
      id,
      count,
      seoImage,
      seoUrl,
    },
  };
};

import { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { fetcher } from "utils/fetcher";
import Pagination from "@mui/material/Pagination";
import { WorkData } from "types/api";
import Router from "next/router";
import styles from "../../Home.module.scss";
import workStyles from "../../../components/WorkSection.module.scss";
import Header from "components/Header";
import Footer from "components/Footer";

const PER_PAGE = 9;
const PAGE_NAME = "work";

type WorkPageIdProps = {
  blog: WorkData[];
  totalCount: number;
  id: number;
  count: number;
};
const WorkPageId: FC<WorkPageIdProps> = ({ blog, count, id }: any) => {
  const handleClick = (_: { preventDefault: () => void }, page: number) => {
    Router.push(`/${PAGE_NAME}/page/${page}`);
  };
  return (
    <div className={styles.root}>
      <Head>
        <title>三波ヨタ|ポートフォリオ {id} ページ目</title>
        <meta name="description" content="三波ヨタのポートフォリオです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <h1>お仕事ポートフォリオ</h1>
        <div className={workStyles.work}>
          {blog.map((item: any) => (
            <div className={workStyles.workItem} key={item.id}>
              <Image
                src={item.image.url}
                width={320}
                height={320}
                alt={item.title}
                objectFit="cover"
              />
              <div className={workStyles.workItemDescription}>
                <h3 className={workStyles.workItemTitle}>{item.title}</h3>
                <p>{item.description}</p>
                <div className={workStyles.workItemLink}>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      className={workStyles.workItemLink}
                      rel="noreferrer"
                    >
                      作品を見る
                    </a>
                  )}
                  <Link href={`/${PAGE_NAME}/${item.id}`}>
                    <a className={workStyles.workItemLink}>詳細を見る</a>
                  </Link>
                </div>
              </div>
            </div>
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
        <Link href="/">
          <a>トップに戻る</a>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default WorkPageId;

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

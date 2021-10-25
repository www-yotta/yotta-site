import { FC } from "react";
import Link from "next/link";
import { fetcher } from "utils/fetcher";
import Pagination from "@mui/material/Pagination";
import { WorkData } from "types/api";
import Router from "next/router";

const PER_PAGE = 1;
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
    <div>
      <ul>
        {blog.map((blog: any) => (
          <li key={blog.id}>
            <Link href={`/${PAGE_NAME}/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        count={count}
        page={Number(id)}
        showFirstButton
        showLastButton
        onChange={handleClick}
      />
      <Link href="/">
        <a>トップに戻る</a>
      </Link>
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

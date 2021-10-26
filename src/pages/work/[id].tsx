import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { fetcher } from "utils/fetcher";
import { WorkData } from "types/api";
import Image from "next/image";
import Link from "next/link";
import styles from "./detail.module.scss";

type WorkDetailProps = {
  workData: WorkData;
};
const WorkDetail: NextPage<WorkDetailProps> = ({ workData }) => {
  return (
    <main className={styles.root}>
      <h1>{workData.title}</h1>
      <div className={styles.work}>
        <Image
          src={workData.image.url}
          width={500}
          height={500}
          alt={workData.title}
          objectFit="cover"
          layout="responsive"
        />
        <div>
          <div className={styles.text}>{workData.description}</div>
          <p>サイト{workData.url}</p>
        </div>
      </div>
      <Link href="/">
        <a>トップに戻る</a>
      </Link>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const workData = await fetcher("/work");
  const paths = workData.contents.map((item: WorkData) => `/work/${item.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const workData = await fetcher(`/work/${context.params?.id}`);
  return {
    props: {
      workData,
    },
  };
};

export default WorkDetail;

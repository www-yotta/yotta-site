import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { fetcher } from "utils/fetcher";
import { WorkData } from "types/api";
import Image from "next/image";
import Link from "next/link";
import styles from "./detail.module.scss";
import Header from "components/Header";

type WorkDetailProps = {
  workData: WorkData;
};
const WorkDetail: NextPage<WorkDetailProps> = ({ workData }) => {
  return (
    <main className={styles.root}>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>{workData.title}</h1>
        <div className={styles.work}>
          <div className={styles.workImage}>
            <Image
              src={workData.image.url}
              width={500}
              height={500}
              alt={workData.title}
              objectFit="cover"
            />
          </div>
          <div className={styles.workDetail}>
            <p className={styles.text}>{workData.description}</p>
            <p className={styles.workUrl}>
              サイト：
              {workData.url && (
                <Link href={workData.url}>
                  <a>{workData.url}</a>
                </Link>
              )}
            </p>
          </div>
        </div>
        <Link href="/">
          <a className={styles.topLink}>トップに戻る</a>
        </Link>
      </div>
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

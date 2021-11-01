import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { fetcher } from "utils/fetcher";
import { WorkData, SeoData } from "types/api";
import Image from "next/image";
import Link from "next/link";
import styles from "./detail.module.scss";
import Header from "components/Header";
import Footer from "components/Footer";
import Seo from "components/Seo";
import { MicroCMSContents } from "types/microcms";

type WorkDetailProps = {
  workData: WorkData;
  seoData: SeoData;
};
const WorkDetail: NextPage<WorkDetailProps> = ({ workData, seoData }) => {
  return (
    <main className={styles.root}>
      <Seo data={seoData} />
      <Header />
      <div className="inner">
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
        <Link href="/work/page/1">
          <a className={styles.topLink}>一覧に戻る</a>
        </Link>
        <Footer />
      </div>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const workData = await fetcher<MicroCMSContents<WorkData>>("/work", {
    limit: 1000,
  });
  const paths = workData.contents.map((item) => `/work/${item.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const endpoint = `/work/${context.params?.id}`;
  const workData = await fetcher<WorkData>(endpoint);
  const { image: seoImage, url: seoUrl } = await fetcher<SeoData>("/seo");
  const seoData: SeoData = {
    title: `三波ヨタのポートフォリオ | ${workData.title}`,
    description: workData.description,
    url: seoUrl + endpoint,
    image: seoImage,
  };
  return {
    props: {
      workData,
      seoData,
    },
  };
};

export default WorkDetail;

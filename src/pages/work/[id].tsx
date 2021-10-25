import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { fetcher } from "utils/fetcher";
import { BlogData } from "types/api";
import Image from "next/image";
import Link from "next/link";

type WorkDetailProps = {
  workData: BlogData;
};
const WorkDetail: NextPage<WorkDetailProps> = ({ workData }) => {
  return (
    <main>
      <h1>{workData.title}</h1>
      <Image
        src={workData.image.url}
        width={320}
        height={180}
        alt="ブログのサムネイル"
        objectFit="cover"
      />
      <div
        dangerouslySetInnerHTML={{
          __html: `${workData.body}`,
        }}
      ></div>
      <Link href="/">
        <a>トップに戻る</a>
      </Link>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const workData = await fetcher("/work");
  const paths = workData.contents.map((item: BlogData) => `/work/${item.id}`);
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

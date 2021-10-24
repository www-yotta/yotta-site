import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { fetcher } from "utils/fetcher";
import { BlogData } from "types/api";
import Image from "next/image";
import Link from "next/link";

type BlogDetailProps = {
  blogData: BlogData;
};
const BlogDetail: NextPage<BlogDetailProps> = ({ blogData }) => {
  return (
    <main>
      <h1>{blogData.title}</h1>
      <Image
        src={blogData.image.url}
        width={320}
        height={180}
        alt="ブログのサムネイル"
        objectFit="cover"
      />
      <div
        dangerouslySetInnerHTML={{
          __html: `${blogData.body}`,
        }}
      ></div>
      <Link href="/">
        <a>トップに戻る</a>
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

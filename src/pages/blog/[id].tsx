import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { fetcher } from "utils/fetcher";
import { BlogData, SeoData } from "types/api";
import Image from "next/image";
import Link from "next/link";
import Header from "components/Header";
import styles from "./detail.module.scss";
import Footer from "components/Footer";
import Seo from "components/Seo";
import { MicroCMSContents } from "types/microcms";

type BlogDetailProps = {
  blogData: BlogData;
  seoData: SeoData;
};
const BlogDetail: NextPage<BlogDetailProps> = ({ blogData, seoData }) => {
  return (
    <main className={styles.root}>
      <Seo data={seoData} />
      <Header />
      <div className="inner">
        <h1 className={styles.title}>{blogData.title}</h1>
        <div className={styles.work}>
          <div className={styles.workImage}>
            <Image
              src={blogData.image.url}
              width={320}
              height={180}
              alt="ブログのサムネイル"
              objectFit="cover"
            />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blogData.body}`,
            }}
            className={styles.workDetail}
          ></div>
        </div>
      </div>
      <Link href="/blog/page/1">
        <a className={styles.topLink}>一覧に戻る</a>
      </Link>
      <Footer />
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // TODO: limitの数を大きくするといつか5MGの制限を超えるので分割して全件取得に変えたい
  const blogData = await fetcher<MicroCMSContents<BlogData>>("/blog", {
    limit: 1000,
  });
  const paths = blogData.contents.map((item: BlogData) => `/blog/${item.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const endpoint = `/blog/${context.params?.id}`;
  const blogData = await fetcher<BlogData>(endpoint);
  const { url: seoUrl } = await fetcher<SeoData>("/seo");
  // NOTE: SEOの文字列として表示するためiframeを削除した後にタグを削除
  const seoDescription = blogData.body
    .replace(/<iframe.*<\/iframe>/, "")
    .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");

  const seoData: SeoData = {
    title: `${blogData.title} | 三波ヨタのブログ`,
    description: seoDescription,
    url: seoUrl + endpoint,
    image: blogData.image,
  };
  return {
    props: {
      blogData,
      seoData,
    },
  };
};

export default BlogDetail;

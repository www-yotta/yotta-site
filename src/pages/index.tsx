import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import styles from "./Home.module.scss";
import Header from "components/Header";
import MainVisual from "components/MainVisual";
import ProfileSection from "components/ProfileSection";
import YouTubeSection from "components/YouTubeSection";
import WorkSection from "components/WorkSection";
import BlogSection from "components/BlogSection";
import ContactSection from "components/ContactSection";
import Footer from "components/Footer";
import { BlogData, PortfolioData, YoutubeData } from "types/api";
import { MicroCMSContents } from "types/microcms";

export type HomeProps = {
  blogData: MicroCMSContents<BlogData>;
  portfolioData: MicroCMSContents<PortfolioData>;
  youtubeData: MicroCMSContents<YoutubeData>;
};
const Home: NextPage<HomeProps> = ({
  blogData,
  portfolioData,
  youtubeData,
}) => {
  return (
    <div className={styles.root}>
      <Head>
        <title>三波ヨタ|オフィシャルサイト</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <MainVisual />
        <ProfileSection />
        <YouTubeSection data={youtubeData.contents} />
        <WorkSection data={portfolioData.contents} />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

const fetcher = (content: string, limit?: number) => {
  const WRITE_API_KEY = process.env.NEXT_PUBLIC_GET_BLOG_API_KEY
    ? process.env.NEXT_PUBLIC_GET_BLOG_API_KEY
    : "";
  const data = fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}${content}?limit=${limit}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": WRITE_API_KEY,
      },
    }
  ).then((r) => r.json());
  return data;
};

export const getStaticProps: GetStaticProps = async () => {
  const blogData = await fetcher("/blog", 3);
  const portfolioData = await fetcher("/works", 3);
  const youtubeData = await fetcher("/youtube", 6);

  return {
    props: { blogData, portfolioData, youtubeData },
  };
};

export default Home;

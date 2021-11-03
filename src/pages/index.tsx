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
import Seo from "components/Seo";
import { BlogData, WorkData, YoutubeData, SeoData } from "types/api";
import { MicroCMSContents } from "types/microcms";
import { fetcher } from "utils/fetcher";

export type HomeProps = {
  blogData: MicroCMSContents<BlogData>;
  workData: MicroCMSContents<WorkData>;
  youtubeData: MicroCMSContents<YoutubeData>;
  seoData: SeoData;
};
const Home: NextPage<HomeProps> = ({
  blogData,
  workData,
  youtubeData,
  seoData,
}) => {
  return (
    <main className={styles.root}>
      <Head>
        <title>三波ヨタ|オフィシャルサイト</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Seo data={seoData} />
      <Header />
      <MainVisual />
      <ProfileSection id="profile" />
      <YouTubeSection id="youtube" data={youtubeData.contents} />
      <WorkSection id="work" data={workData.contents} />
      <BlogSection id="blog" data={blogData.contents} />
      <ContactSection id="contact" />
      <Footer />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogData = await fetcher("/blog", { limit: 3 });
  const workData = await fetcher("/work", { limit: 3 });
  const youtubeData = await fetcher("/youtube", { limit: 6 });
  const seoData = await fetcher("/seo");

  return {
    props: { blogData, workData, youtubeData, seoData },
  };
};

export default Home;

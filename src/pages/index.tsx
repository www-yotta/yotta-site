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
import { MicroCMSContents } from "types/microcms";

type HomeProps = {
  blogData: MicroCMSContents<{
    title: string;
    body: string;
    image?: {
      height: number;
      width: number;
      url: string;
    };
  }>;
};
const Home: NextPage<HomeProps> = ({ blogData }) => {
  console.log("blogData", blogData);
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
        <YouTubeSection />
        <WorkSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const WRITE_API_KEY = process.env.NEXT_PUBLIC_GET_BLOG_API_KEY
    ? process.env.NEXT_PUBLIC_GET_BLOG_API_KEY
    : "";
  const blogData = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/blog`, {
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": WRITE_API_KEY,
    },
  }).then((r) => r.json());
  return {
    props: { blogData },
  };
};

export default Home;

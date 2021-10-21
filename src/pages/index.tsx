import type { NextPage } from "next";
import Head from "next/head";
import styles from "./Home.module.scss";
import Header from "components/Header";
import MainVisual from "components/MainVisual";
import ProfileSection from "components/ProfileSection";
import YouTubeSection from "components/YouTubeSection";
import WorkSection from "components/WorkSection";
import BlogSection from "components/BlogSection";

const Home: NextPage = () => {
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
      </main>
    </div>
  );
};

export default Home;

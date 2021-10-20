import { NextPage } from "next";
import Link from "next/link";
import styles from "./WorkSection.module.scss";

const WorkSection: NextPage = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>お仕事</h2>
      <p>
        お仕事としてフロントエンドエンジニアもしています。
        得意な言語は、HTML/CSS,JavaScript,jQuery,React,TypeScript,Next.jsなど。
        個人開発で作成したものの一部を載せておきます。
      </p>
      <div className={styles.workContent}>
        <div className={styles.workItem}></div>
        <div className={styles.workItem}></div>
        <div className={styles.workItem}></div>
      </div>
      <Link href="">
        <a className={styles.workLink}>全て見る</a>
      </Link>
    </section>
  );
};

export default WorkSection;

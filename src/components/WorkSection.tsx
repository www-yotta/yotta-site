import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./WorkSection.module.scss";
import { PortfolioData } from "types/api";

type WorkSection = {
  id: string;
  data: PortfolioData[];
};
const WorkSection: FC<WorkSection> = ({ data, ...props }) => {
  return (
    <section className={styles.root} {...props}>
      <h2 className={styles.title}>お仕事</h2>
      <p className={styles.description}>
        お仕事としてフロントエンドエンジニアもしています。
        得意な言語は、HTML/CSS,JavaScript,jQuery,React,TypeScript,Next.jsなど。
        個人開発で作成したものの一部を載せておきます。
      </p>
      <div className={styles.work}>
        {data?.map((item) => {
          return (
            <>
              <div className={styles.workItem} key={item.id}>
                <Image
                  src={item.image.url}
                  width={320}
                  height={320}
                  alt="カスタムオーディオパネルの作品画像"
                  objectFit="cover"
                />
                <div className={styles.workItemDescription}>
                  <h3 className={styles.workItemTitle}>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className={styles.workItemLink}>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        className={styles.workItemLink}
                        rel="noreferrer"
                      >
                        作品を見る
                      </a>
                    )}
                    <Link href="">
                      <a className={styles.workItemLink}>詳細を見る</a>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Link href="">
        <a className={styles.allViewLink}>全て見る</a>
      </Link>
    </section>
  );
};

export default WorkSection;

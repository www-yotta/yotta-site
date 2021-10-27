import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./WorkSection.module.scss";
import { WorkData } from "types/api";
import Button from "@mui/material/Button";

type WorkSection = {
  id: string;
  data: WorkData[];
};
const WorkSection: FC<WorkSection> = ({ data, ...props }) => {
  return (
    <section className={styles.root} {...props}>
      <div className="inner">
        <h2 className="title">お仕事</h2>
        <p className="description">
          お仕事としてフロントエンドエンジニアもしています。
          得意な言語は、HTML/CSS,JavaScript,jQuery,React,TypeScript,Next.jsなど。
          個人開発で作成したものの一部を載せておきます。
        </p>
        <div className={styles.work}>
          {data?.map((item) => {
            return (
              <div className={styles.workItem} key={item.id}>
                <div className={styles.workItemImage}>
                  <Image
                    src={item.image.url}
                    width={320}
                    height={320}
                    alt="カスタムオーディオパネルの作品画像"
                    objectFit="cover"
                  />
                </div>
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
                    <Link href={`/work/${item.id}`}>
                      <a className={styles.workItemLink}>詳細を見る</a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Link href="/work/page/1" passHref>
          <Button variant="outlined" className={styles.allViewLink}>
            全て見る
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default WorkSection;

import { FC } from "react";
import Link from "next/link";
import styles from "./WorkSection.module.scss";
import { WorkData } from "types/api";
import Button from "@mui/material/Button";
import WorkItem from "components/WorkItem";

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
            return <WorkItem item={item} key={item.id} />;
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

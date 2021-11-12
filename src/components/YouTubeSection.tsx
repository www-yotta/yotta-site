import React, { FC } from "react";
import styles from "./YouTubeSection.module.scss";
import { YoutubeData } from "types/api";
import Button from "@mui/material/Button";
import { YoutubeItem } from "components/YouTubeItem";

type YoutubeSectionProps = {
  id: string;
  data: YoutubeData[];
};
const YoutubeSection: FC<YoutubeSectionProps> = ({ data, ...props }) => {
  return (
    <section className={styles.root} {...props}>
      <div className="inner">
        <h2 className="title">YouTube</h2>
        <p className="description">
          ゲーム実況をメインで活動しており、2Dゲームを中心に配信しています。3D酔いをしてしまうので、
          最近のゲームは中々できませんが、FallsGuysだけは何故かできます。
          プログラミングの情報を発信しているチャンネルもあり、不定期で更新しています。
        </p>
        <div className={styles.youtubeContent}>
          {data?.map((item) => {
            return <YoutubeItem item={item} key={item.id} />;
          })}
        </div>
        <div className={styles.linkWrap}>
          <Button
            variant="outlined"
            href="https://www.youtube.com/channel/UCM-J1WxoJMwcxB7H_Xw-8hg"
            className={styles.youtubeLink}
            target="_blank"
            rel="noreferrer"
            color="primary"
          >
            ゲーム実況を見る
          </Button>
          <Button
            variant="outlined"
            href="https://www.youtube.com/channel/UCoaukyqwW85pfMW9RxXeQRw"
            className={styles.youtubeLink}
            target="_blank"
            rel="noreferrer"
          >
            プログラミングを学んでみる
          </Button>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;

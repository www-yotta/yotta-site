import { FC } from "react";
import styles from "./YouTubeSection.module.scss";
import { YoutubeData } from "types/api";

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
            return (
              <div className={styles.youtubeItem} key={item.id}>
                <iframe
                  width={320}
                  height={180}
                  src={`https://www.youtube.com/embed/${item.movieId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            );
          })}
        </div>
        <div className={styles.linkWrap}>
          <a
            href="https://www.youtube.com/channel/UCM-J1WxoJMwcxB7H_Xw-8hg"
            className={styles.youtubeLink}
            target="_blank"
            rel="noreferrer"
          >
            ゲーム実況を見る
          </a>
          <a
            href="https://www.youtube.com/channel/UCoaukyqwW85pfMW9RxXeQRw"
            className={styles.youtubeLink}
            target="_blank"
            rel="noreferrer"
          >
            プログラミングを学んでみる
          </a>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;

import { NextPage } from "next";
import Link from "next/link";
import yottaStand from "images/yotta_stand.png";
import styles from "./YouTubeSection.module.scss";

const Profile: NextPage = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>YouTube</h2>
      <p>
        ゲーム実況をメインで活動しており、2Dゲームを中心に配信しています。3D酔いをしてしまうので、
        最近のゲームは中々できませんが、FallsGuysだけは何故かできます。
        プログラミングの情報を発信しているチャンネルもあり、不定期で更新しています。
      </p>
      <div className={styles.youtubeContent}>
        <div className={styles.youtubeItem}>
          <iframe
            width={320}
            height={180}
            src="https://www.youtube.com/embed/yYM_NBm5wPk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.youtubeItem}>
          <iframe
            width={320}
            height={180}
            src="https://www.youtube.com/embed/yYM_NBm5wPk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.youtubeItem}>
          <iframe
            width={320}
            height={180}
            src="https://www.youtube.com/embed/yYM_NBm5wPk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.youtubeItem}>
          <iframe
            width={320}
            height={180}
            src="https://www.youtube.com/embed/yYM_NBm5wPk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.youtubeItem}>
          <iframe
            width={320}
            height={180}
            src="https://www.youtube.com/embed/yYM_NBm5wPk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.youtubeItem}>
          <iframe
            width={320}
            height={180}
            src="https://www.youtube.com/embed/yYM_NBm5wPk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className={styles.linkWrap}>
        <Link href="https://www.youtube.com/channel/UCM-J1WxoJMwcxB7H_Xw-8hg">
          <a className={styles.youtubeLink}>ゲーム実況を見る</a>
        </Link>
        <Link href="https://www.youtube.com/channel/UCoaukyqwW85pfMW9RxXeQRw">
          <a className={styles.youtubeLink}>プログラミングを学んでみる</a>
        </Link>
      </div>
    </section>
  );
};

export default Profile;

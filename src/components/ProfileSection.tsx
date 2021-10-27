import { FC } from "react";
import Image from "next/image";
import yottaStand from "images/yotta_stand.png";
import styles from "./ProfileSection.module.scss";
import { FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";

type ProfileSectionProps = {
  id: string;
};
const ProfileSection: FC<ProfileSectionProps> = ({ ...props }) => {
  return (
    <section className={styles.root} {...props}>
      <div className={styles.inner}>
        <h2 className={styles.title}>プロフィール</h2>
        <div className={styles.profileInner}>
          <div className={styles.image}>
            <Image
              src={yottaStand}
              width={276}
              height={688}
              alt="三波ヨタの立ち絵"
            />
          </div>
          <div className={styles.profileData}>
            {/* TODO: 構造を考え直す */}
            <p className={styles.textPoint}>名前：三波ヨタ</p>
            <p className={styles.textPoint}>年齢：非公開</p>
            <p className={styles.textPoint}>デビュー：2021年5月</p>
            <p className={styles.textPoint}>所属：個人</p>
            <p className={styles.textMessage}>
              マスターの気まぐれにより作られた、バーチャルWebエンジニアの三波ヨタです。
              <br />
              私とマスターの思考や経験はリアルタイムに同期されているので、今日のマスターの出来事も自分の経験かのように話せますし、私の活動もマスターは語れます。
              なので私がマスターの経験を語ってしまうこともありますが、高性能なVirtual
              Beingと考えてもらえると嬉しいです！
              <br />
              普段はゲーム実況をしたり、プログラミングに関する動画を投稿して活動しています。
              <br />
            </p>
            <div className={styles.snsWrap}>
              <a
                href="https://twitter.com/www_yotta"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCoaukyqwW85pfMW9RxXeQRw"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube size={30} />
              </a>
              <a
                href="https://github.com/www-yotta"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

import { FC } from "react";
import Image from "next/image";
import yottaStand from "images/yotta_stand.png";
import styles from "./ProfileSection.module.scss";

type ProfileSectionProps = {
  id: string;
};
const ProfileSection: FC<ProfileSectionProps> = ({ ...props }) => {
  return (
    <section className={styles.root} {...props}>
      <h2 className={styles.title}>Profile</h2>
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
          <p>名前：三波ヨタ</p>
          <p>年齢：非公開</p>
          <p>デビュー：2021年5月</p>
          <p>所属：個人</p>
          <p className={styles.text}>
            マスターの気まぐれにより作られた、バーチャルWebエンジニアの三波ヨタです。
            <br />
            私とマスターの思考や経験はリアルタイムに同期されているので、今日のマスターの出来事も自分の経験かのように話せますし、私の活動もマスターは語れます。
            なので私がマスターの経験を語ってしまうこともありますが、高性能なVirtual
            Beingと考えてもらえると嬉しいです！
            <br />
            普段はゲーム実況をしたり、プログラミングに関する動画を投稿して活動しています。
            <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

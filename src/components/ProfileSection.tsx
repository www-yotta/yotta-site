import { NextPage } from "next";
import Image from "next/image";
import yottaStand from "images/yotta_stand.png";
import styles from "./ProfileSection.module.scss";

const Profile: NextPage = () => {
  return (
    <section className={styles.root}>
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
          <p>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            この文章はダミーです。文字の大きさ、この文章はダミーです。文
            字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。
            文字の大きさ、量、字間、行間等を確認するために入れています。
            この文章はダミーです。文字の大きさ、
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;

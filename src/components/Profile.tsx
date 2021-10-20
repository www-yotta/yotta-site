import { NextPage } from "next";
import Image from "next/image";
import mv from "images/mv.png";
import styles from "./Profile.module.scss";

const Profile: NextPage = () => {
  return (
    <section className={styles.root}>
      <h2>Profile</h2>
      <div className={styles.profileInner}>
        <Image src={mv} alt="三波ヨタオフィシャルサイトのメインヴィジュアル" />
      </div>
    </section>
  );
};

export default Profile;

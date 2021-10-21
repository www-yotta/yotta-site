import { NextPage } from "next";
import styles from "./ContactSection.module.scss";
import { useForm } from "react-hook-form";

const ContactSection: NextPage = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleRequset = (forms: any) => {
    const WRITE_API_KEY = process.env.NEXT_PUBLIC_WRITE_API_KEY
      ? process.env.NEXT_PUBLIC_WRITE_API_KEY
      : "";
    const data = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "X-WRITE-API-KEY": WRITE_API_KEY,
      },
      body: JSON.stringify(forms),
    };

    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/contact`, data)
      .then((response) => {
        if (!response.ok) {
          console.error("サーバーエラー");
          return;
        }
        // formをリセット
        reset({
          name: "",
          email: "",
          body: "",
        });
      })
      .catch((error) => {
        console.error("通信に失敗しました", error);
      });
  };

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>お問い合わせ</h2>
      <p className={styles.sub}>
        お仕事の依頼などありましたら下記フォームからご連絡ください。
      </p>
      <div className={styles.contact}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">お名前</label>
          <input id="name" type="text" {...register("name")} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">メールアドレス</label>
          <input id="email" type="text" {...register("email")} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="body">内容</label>
          <textarea id="body" {...register("body")}></textarea>
        </div>
        <div onClick={handleSubmit(handleRequset)}>
          <span>送信</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
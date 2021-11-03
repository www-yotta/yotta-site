import React, { FC, useState } from "react";
import styles from "./ContactSection.module.scss";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";

type ContactSectionProps = {
  id: string;
};
const ContactSection: FC<ContactSectionProps> = ({ ...props }) => {
  const [isContact, setIsContact] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleRequset = (forms: {
    name: string;
    email: string;
    body: string;
  }) => {
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
          // eslint-disable-next-line no-console
          console.error("サーバーエラー");
          return;
        }
        // formをリセット
        reset({
          name: "",
          email: "",
          body: "",
        });
        setIsContact(true);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("通信に失敗しました", error);
      });
  };

  return (
    <section className={styles.root} {...props}>
      <div className="inner">
        <h2 className="title">お問い合わせ</h2>
        <p className="description">
          何かありましたら下記フォームからご連絡ください。
        </p>
        <div className={styles.contact}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">
              お名前<span className="errorText">*</span>
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && (
              <p className="errorText">入力必須です。</p>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">
              メールアドレス<span className="errorText">*</span>
            </label>
            <input
              id="email"
              type="text"
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
              })}
            />
            {errors.email?.type === "required" && (
              <p className="errorText">入力必須です。</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="errorText">
                メールアドレスの形式で入力してください。
              </p>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="body">
              内容<span className="errorText">*</span>
            </label>
            <textarea
              id="body"
              {...register("body", { required: true })}
              rows={10}
            ></textarea>
            {errors.body?.type === "required" && (
              <p className="errorText">入力必須です。</p>
            )}
          </div>
          <Button
            variant="outlined"
            className={styles.contactSubmit}
            onClick={handleSubmit(handleRequset)}
          >
            送信
          </Button>
          {isContact && (
            <p className={styles.completeMessage}>
              送信が完了しました。
              <br />
              お問い合わせありがとうございます。
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./WorkItem.module.scss";
import { WorkData } from "types/api";

type WorkSection = {
  item: WorkData;
};
const WorkSection: FC<WorkSection> = ({ item }) => {
  return (
    <div className={styles.workItem} key={item.id}>
      <div className={styles.workItemImage}>
        <Image
          src={item.image.url}
          width={320}
          height={320}
          alt={item.title}
          objectFit="cover"
        />
      </div>
      <div className={styles.workItemDescription}>
        <h3 className={styles.workItemTitle}>{item.title}</h3>
        <p>{item.description}</p>
        <div className={styles.workItemLink}>
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              className={styles.workItemLink}
              rel="noreferrer"
            >
              作品を見る
            </a>
          )}
          <Link href={`/work/${item.id}`}>
            <a className={styles.workItemLink}>詳細を見る</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;

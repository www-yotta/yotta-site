import React, { FC, useState } from "react";
import styles from "./YouTubeSection.module.scss";
import { YoutubeData } from "types/api";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";

type YoutubeItemProps = {
  item: YoutubeData;
};
export const YoutubeItem: FC<YoutubeItemProps> = ({ item }) => {
  const [isThumbnail, setIsThumbnail] = useState<boolean>(true);

  return (
    <div className={styles.youtubeItem}>
      <div className={styles.youtubeItemRectangle}>
        {isThumbnail ? (
          <div
            className={styles.youtubeImage}
            onClick={() => setIsThumbnail(false)}
            data-testid="youtubeThumbnail"
          >
            <Image
              width={320}
              height={180}
              src={`https://img.youtube.com/vi/${item.movieId}/maxresdefault.jpg`}
              alt="動画のサムネイル"
              layout="responsive"
            />
            <div className={styles.youtubeIcon}>
              <div className={styles.youtubeCenterWhite}></div>
              <FaYoutube size={68} className={styles.youtubeIconFa} />
            </div>
          </div>
        ) : (
          <iframe
            width={320}
            height={180}
            src={`https://www.youtube.com/embed/${item.movieId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            data-testid="youtubeFrame"
          ></iframe>
        )}
      </div>
    </div>
  );
};

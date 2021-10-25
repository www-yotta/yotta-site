import { NextApiRequest, NextApiResponse } from "next";
import { YoutubeData } from "types/api";
import { Result } from "types/microcms";

export type Mock = YoutubeData & Result;
export const youtubeMock: Mock[] = [
  {
    id: "o5cjk6tc8tl",
    createdAt: "2021-10-24T05:51:42.047Z",
    updatedAt: "2021-10-24T05:51:42.047Z",
    publishedAt: "2021-10-24T05:51:42.047Z",
    revisedAt: "2021-10-24T05:51:42.047Z",
    movieId: "xg91HhI7xao",
    memo: "消してしまったタブを一発で復元する方法【エンジニアじゃなくても使えるTips】",
  },
  {
    id: "0o9akz-z-h",
    createdAt: "2021-10-24T05:51:23.581Z",
    updatedAt: "2021-10-24T05:51:23.581Z",
    publishedAt: "2021-10-24T05:51:23.581Z",
    revisedAt: "2021-10-24T05:51:23.581Z",
    movieId: "NoBSDwSHylw",
    memo: "【React】プログラミングをしながら雑談 9/15",
  },
  {
    id: "0kf60idad8br",
    createdAt: "2021-10-24T05:50:07.035Z",
    updatedAt: "2021-10-24T05:50:07.035Z",
    publishedAt: "2021-10-24T05:50:07.035Z",
    revisedAt: "2021-10-24T05:50:07.035Z",
    movieId: "vCk3tppasQg",
    memo: "ショートカット実践動画",
  },
  {
    id: "5od6q_bk36ah",
    createdAt: "2021-10-24T05:49:21.439Z",
    updatedAt: "2021-10-24T05:49:21.439Z",
    publishedAt: "2021-10-24T05:49:21.439Z",
    revisedAt: "2021-10-24T05:49:21.439Z",
    movieId: "OSCXHnEcNJM",
    memo: "FallFuys配信10/24 晩酌のやつ",
  },
  {
    id: "0y0cvgssb7y",
    createdAt: "2021-10-24T05:48:33.914Z",
    updatedAt: "2021-10-24T05:48:33.914Z",
    publishedAt: "2021-10-24T05:48:33.914Z",
    revisedAt: "2021-10-24T05:48:33.914Z",
    movieId: "yYM_NBm5wPk",
    memo: "麻雀配信10/18",
  },
  {
    id: "arga0cwja50",
    createdAt: "2021-10-24T05:47:29.065Z",
    updatedAt: "2021-10-24T05:47:29.065Z",
    publishedAt: "2021-10-24T05:47:29.065Z",
    revisedAt: "2021-10-24T05:47:29.065Z",
    movieId: "P8H0VRqJeGs",
    memo: "ホロウナイトのパート1",
  },
];

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    contents: youtubeMock,
    totalCount: youtubeMock.length,
    offset: 0,
    limit: 10, // microCMSのデフォルト
  });
}

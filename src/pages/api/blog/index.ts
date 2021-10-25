import { NextApiRequest, NextApiResponse } from "next";
import { BlogData } from "types/api";
import { Result } from "types/microcms";

export type Mock = BlogData & Result;
export const blogMock: Mock[] = [
  {
    id: "1",
    createdAt: "2021-10-21T10:55:23.851Z",
    updatedAt: "2021-10-24T06:32:51.574Z",
    publishedAt: "2021-10-21T10:55:23.851Z",
    revisedAt: "2021-10-24T06:32:51.574Z",
    title: "サンプル2",
    body: "<p>複数投稿の表示をしないといけないので適当に書く。</p>",
    image: {
      url: "https://placehold.jp/320x320.png",
      height: 180,
      width: 320,
    },
  },
  {
    id: "2",
    createdAt: "2021-10-21T10:53:19.968Z",
    updatedAt: "2021-10-24T07:13:44.565Z",
    publishedAt: "2021-10-21T10:53:19.968Z",
    revisedAt: "2021-10-24T07:13:44.565Z",
    title: "サンプルタイトル",
    body: "<p>こんばんは。三波ヨタです。<br>これはサンプルのブログ記事です。<br>めちゃめちゃ長い文を書いたらどんな表示やデータの取得になるかを確認したいので、てきとうな長さの文を今必死で書いています。</p>",
    image: {
      url: "https://placehold.jp/320x320.png",
      height: 180,
      width: 320,
    },
  },
];
export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    contents: blogMock,
    totalCount: blogMock.length,
    offset: 0,
    limit: 10, // microCMSのデフォルト
  });
}

import { NextApiRequest, NextApiResponse } from "next";
import { SeoData } from "types/api";
import { Result } from "types/microcms";

export type Mock = SeoData & Result;
export const seoMock: Mock = {
  id: "0eg1fo_a4i1",
  createdAt: "2021-10-23T15:26:26.302Z",
  updatedAt: "2021-10-24T05:23:12.428Z",
  publishedAt: "2021-10-23T15:26:26.302Z",
  revisedAt: "2021-10-23T15:28:26.938Z",
  title: "ポートフォリオのタイトル",
  description:
    "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、",
  image: {
    url: "https://placehold.jp/320x320.png",
    height: 320,
    width: 320,
  },
  url: "https://elated-spence-b80c1a.netlify.app/",
};

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(seoMock);
}

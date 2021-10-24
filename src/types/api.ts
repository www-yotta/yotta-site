export type ImageProps = {
  height: number;
  width: number;
  url: string;
};
export type BlogData = {
  id: string;
  title: string;
  body: string;
  image?: ImageProps;
};
export type PortfolioData = {
  id: string;
  title: string;
  description: string;
  image: ImageProps;
  url?: string;
};
export type YoutubeData = {
  id: string;
  movieId: string;
  memo: string;
};

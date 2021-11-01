export type ImageProps = {
  height: number;
  width: number;
  url: string;
};
export type BlogData = {
  id: string;
  title: string;
  body: string;
  image: ImageProps;
};
export type WorkData = {
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
export type SeoData = {
  id?: string;
  title: string;
  url: string;
  description: string;
  image: ImageProps;
};

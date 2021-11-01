import { FC } from "react";
import Head from "next/head";
import { SeoData } from "types/api";

const DESCRIPTION_MAX_STR = 100;

type SeoProps = {
  data: SeoData;
};
const Seo: FC<SeoProps> = ({ data }) => {
  const description = data.description.substr(0, DESCRIPTION_MAX_STR) + "...";
  return (
    <Head>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta property="og:title" content={data.title} />
      <meta property="og:url" content={data.url} />
      <meta property="og:site_name" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={data.image.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={data.url} />
      <meta name="twitter:url" content={data.url} />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={data.image.url} />
      <link rel="canonical" href={data.url} />
    </Head>
  );
};

export default Seo;

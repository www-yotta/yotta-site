export const fetcher = (content: string, limit?: number) => {
  const WRITE_API_KEY = process.env.NEXT_PUBLIC_GET_BLOG_API_KEY
    ? process.env.NEXT_PUBLIC_GET_BLOG_API_KEY
    : "";
  const data = fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}${content}?limit=${limit}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": WRITE_API_KEY,
      },
    }
  ).then((r) => r.json());
  return data;
};

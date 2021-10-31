// NOTE: microCMSのプロパティ(必要があれば追加する)
type optionProps = {
  limit?: number | null;
  offset?: number;
};
const initialOption = {
  limit: 9,
  offset: 0,
};
const WRITE_API_KEY = process.env.NEXT_PUBLIC_GET_BLOG_API_KEY
  ? process.env.NEXT_PUBLIC_GET_BLOG_API_KEY
  : "";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT
  ? process.env.NEXT_PUBLIC_API_ENDPOINT
  : "";
export const fetcher = (content: string, option?: optionProps) => {
  const { limit, offset } = option || initialOption;
  const data = fetch(
    `${API_ENDPOINT}${content}?limit=${limit}&offset=${offset}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": WRITE_API_KEY,
      },
    }
  ).then((r) => r.json());
  return data;
};

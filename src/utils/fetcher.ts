import { API_ENDPOINT, GET_API_KEY } from "./constants";

// NOTE: microCMSのプロパティ(必要があれば追加する)
type optionProps = {
  limit?: number | null;
  offset?: number;
};
const initialOption = {
  limit: 9,
  offset: 0,
};

export const fetcher = <T>(
  content: string,
  option?: optionProps
): Promise<T> => {
  const { limit, offset } = option || initialOption;
  return fetch(`${API_ENDPOINT}${content}?limit=${limit}&offset=${offset}`, {
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": GET_API_KEY,
    },
  })
    .then((r) => {
      console.log("r", r);
      if (!r.ok) {
        throw new Error(`Request failed with status ${r.status}`);
      }
      return r.json();
    })
    .catch(() => ({
      contents: [],
      totalCount: 0,
      offset: offset ?? 0,
      limit: limit ?? 9,
    } as T));
};

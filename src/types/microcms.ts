export type MicroCMSContents<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type Result = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

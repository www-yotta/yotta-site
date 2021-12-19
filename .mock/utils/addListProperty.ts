export const addListProperty = (data: any, limit?: any) => ({
  contents: data,
  totalCount: data.length,
  offset: 0,
  limit: limit || 10, // microCMSのデフォルト
});

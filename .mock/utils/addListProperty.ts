export const addListProperty = (data, limit?) => ({
  contents: data,
  totalCount: data.length,
  offset: 0,
  limit: limit || 10, // microCMSのデフォルト
});

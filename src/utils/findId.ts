export const findId = <T extends { id: string }>(
  data: T[],
  id: string
): T | undefined => {
  return data.find((item) => item.id === id);
};

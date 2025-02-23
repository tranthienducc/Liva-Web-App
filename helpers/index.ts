export const truncateString = (string: string, slice?: number) => {
  return string?.slice(0, slice || 30) + "...";
};

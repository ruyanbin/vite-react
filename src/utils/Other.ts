/**
 * 获取[min,max]随机数
 * @return {number}
 * */
export const getRandom = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

/**
 * 数组扁平化 获取最后一级子路由
 * */

import { menuOption } from '#/typings/store/index';

export const FloatMenuList = (MenuList: menuOption[], result: menuOption[] = []): menuOption[] => {
  MenuList.forEach((item: menuOption) => {
    if (item?.children && item?.children.length > 0) {
      FloatMenuList(item.children, result);
    } else {
      result.push(item);
    }
  });
  return result;
};

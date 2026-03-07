/**
 * 数组扁平化 获取最后一级子路由
 * */
import { RouterObj } from '#/typings/router';
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

/**
 *
 */
export const FloatRouterDetail = (routerArr: RouterObj[] = [], result: RouterObj[] = []): RouterObj[] => {
  routerArr.forEach((item: RouterObj) => {
    if (item.children && item.children.length > 0) {
      FloatRouterDetail(item.children, result);
    } else {
      result.push(item);
    }
  });
  return result;
};

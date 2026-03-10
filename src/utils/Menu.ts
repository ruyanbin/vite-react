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

/**
 * 遍历菜单，返回一个对象，key为路由路径，value为父级菜单对象
 */
export const getRouteToParentMap = (menuList: menuOption[]): Record<string, menuOption> => {
  const routeToParentMap: Record<string, menuOption> = {};

  const traverse = (items: menuOption[], parent?: menuOption) => {
    items.forEach((item) => {
      if (item.path && parent) {
        routeToParentMap[item.path] = parent;
      }

      if (item.children && item.children.length > 0) {
        traverse(item.children, item);
      }
    });
  };

  traverse(menuList);
  return routeToParentMap;
};

export function generatePathTitleMap(menuList: menuOption[]) {
  const result: Record<string, menuOption[]> = {};

  /**
   * 遍历菜单项数组，构建路径映射关系
   * @param menuItems - 菜单项数组，每个菜单项包含标题、路径和子菜单等信息
   * @param pathStack - 路径栈，用于记录当前路径的层级关系，默认值为空数组
   */
  function traverse(menuItems: menuOption[], pathStack: menuOption[] = []) {
    // 定义遍历函数，参数为菜单项数组和路径栈，默认值为空数组
    menuItems.forEach((item: menuOption) => {
      // 创建当前路径栈的副本，并将当前菜单项加入栈中
      const currentPathStack = [...pathStack, { ...item }];
      // 如果当前菜单项有路径，则将路径与路径栈的映射关系存入结果对象
      if (item.path) {
        result[item.path] = currentPathStack;
      }
      // 如果当前菜单项有子菜单，则递归调用遍历函数，传入子菜单和当前路径栈
      if (item.children) {
        traverse(item.children, currentPathStack);
      }
    });
  }

  traverse(menuList);
  return result;
}

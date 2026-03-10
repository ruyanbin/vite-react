import { create } from 'zustand';

import type { menuOption } from '#/typings/store/index';

interface MenuState {
  menuList: menuOption[];
  openKeys: string[];
  flatMenuList: menuOption[];
  pathTitleMap: Record<string, menuOption[]>;
  updatePathTitleMap: (pathTitleMap: Record<string, menuOption[]>) => void;
  updateMenulist: (menuList: menuOption[]) => void;
  updateOpenkeys: (openKeys: string[]) => void;
  updateFlatMenuList: (flatMenuList: menuOption[]) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  menuList: [],
  openKeys: [],
  flatMenuList: [],
  pathTitleMap: {},
  updatePathTitleMap: (pathTitleMap) => set({ pathTitleMap }),
  updateMenulist: (menuList) => set({ menuList }),
  updateOpenkeys: (openKeys) => set({ openKeys }),
  updateFlatMenuList: (flatMenuList) => set({ flatMenuList }),
}));

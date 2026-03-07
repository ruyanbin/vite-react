import { create } from 'zustand';

import type { menuOption } from '#/typings/store/index';

interface MenuState {
  menuList: menuOption[];
  openKeys: string[];
  flatMenuList: menuOption[];
  updateMenulist: (menuList: menuOption[]) => void;
  updateOpenkeys: (openKeys: string[]) => void;
  updateFlatMenuList: (flatMenuList: menuOption[]) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  menuList: [],
  openKeys: [],
  flatMenuList: [],
  updateMenulist: (menuList) => set({ menuList }),
  updateOpenkeys: (openKeys) => set({ openKeys }),
  updateFlatMenuList: (flatMenuList) => set({ flatMenuList }),
}));

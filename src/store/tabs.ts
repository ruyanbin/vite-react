import { create } from 'zustand';

import type { menuOption } from '#/typings/store/index';

interface TabsState {
  tabsList: menuOption[];
  addTabs: (tab: menuOption) => void;
  removeTabs: (index: number) => void;
}

export const useTabsStore = create<TabsState>((set) => ({
  tabsList: [],
  addTabs: (tab) =>
    set((state) => {
      const index = state.tabsList.findIndex((it) => it.path == tab.path);
      if (index == -1) {
        return { tabsList: [...state.tabsList, tab] };
      }
      return state;
    }),
  removeTabs: (index) =>
    set((state) => {
      const newTabsList = [...state.tabsList];
      newTabsList.splice(index, 1);
      return { tabsList: newTabsList };
    }),
}));

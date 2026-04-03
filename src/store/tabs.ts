import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { menuOption } from '#/typings/store/index';

interface TabsState {
  tabsList: menuOption[];
  addTabs: (tab: menuOption) => void;
  removeTabs: (index: number) => void;
  clearTabs: () => void;
}

export const useTabsStore = create<TabsState>()(
  persist(
    (set) => ({
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
      clearTabs: () => set({ tabsList: [] }),
    }),
    {
      name: 'tabs-storage',
    }
  )
);

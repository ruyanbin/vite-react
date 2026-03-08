import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GlobalState {
  collapsed: boolean;
  updateCollapsed: (collapsed: boolean) => void;
}

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      collapsed: false,
      updateCollapsed: (collapsed) => set({ collapsed }),
    }),
    {
      name: 'global-storage',
    }
  )
);

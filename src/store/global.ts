import { create } from 'zustand';

interface GlobalState {
  collapsed: boolean;
  updateCollapsed: (collapsed: boolean) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  collapsed: false,
  updateCollapsed: (collapsed) => set({ collapsed }),
}));

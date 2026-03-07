import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  isAnimating: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  setIsAnimating: (isAnimating: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  isAnimating: false,
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),
  setTheme: (theme) => set({ theme }),
  setIsAnimating: (isAnimating) => set({ isAnimating }),
}));

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserInfo {
  name?: string;
  avatar?: string;
  email?: string;
  role?: string;
}

interface UserState {
  isLogin: boolean;
  userInfo: UserInfo | null;
  login: (userInfo: UserInfo) => void;
  logout: () => void;
  updateUserInfo: (userInfo: Partial<UserInfo>) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      isLogin: false,
      userInfo: null,
      login: (userInfo) => set({ isLogin: true, userInfo }),
      logout: () => set({ isLogin: false, userInfo: null }),
      updateUserInfo: (userInfo) =>
        set((state) => ({
          userInfo: state.userInfo ? { ...state.userInfo, ...userInfo } : null,
        })),
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({
        isLogin: state.isLogin,
        userInfo: state.userInfo,
      }),
    }
  )
);

import { createSlice } from '@reduxjs/toolkit';
import { menuOption } from '#/typings/store/index';
const initialState: { menuList: menuOption[]; openKeys: string[]; flatMenuList: menuOption[] } = {
  menuList: [],
  openKeys: [],
  flatMenuList: [],
};
const MenuSlice = createSlice({
  name: 'Menu',
  initialState,
  reducers: {
    updateMenulist(state, actions: { payload: menuOption[] }) {
      state.menuList = actions.payload;
    },
    updateOpenkeys(state, actions: { payload: string[] }) {
      state.openKeys = actions.payload;
    },
    updateFlatMenuList(state, actions: { payload: menuOption[] }) {
      state.flatMenuList = actions.payload;
    },
  },
});

export const { updateMenulist, updateOpenkeys, updateFlatMenuList } = MenuSlice.actions;
export default MenuSlice.reducer;

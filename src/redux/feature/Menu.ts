import { createSlice } from '@reduxjs/toolkit';
const initialState: { menuList: menuOption[] } = {
  menuList: [],
};
const MenuSlice = createSlice({
  name: 'Menu',
  initialState,
  reducers: {
    updateMenulist(state, actions: { payload: menuOption }) {
      state.menuList = actions.payload;
    },
  },
});

export const { updateMenulist } = MenuSlice.actions;
export default MenuSlice.reducer;

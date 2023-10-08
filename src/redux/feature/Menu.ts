import { createSlice } from '@reduxjs/toolkit';

const MenuSlice = createSlice({
  name: 'Menu',
  initialState: {
    menuList: [],
  },
  reducers: {
    updateMenulist(state, actions) {
      state.menuList = actions.payload;
    },
  },
});

export const { updateMenulist } = MenuSlice.actions;
export default MenuSlice.reducer;

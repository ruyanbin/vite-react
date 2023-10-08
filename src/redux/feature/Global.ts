import { createSlice } from '@reduxjs/toolkit';
const initialState: globalStore = {
  collapsed: false,
};
const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    updateCollapsed(state, actions: { payload: boolean }) {
      state.collapsed = actions.payload;
    },
  },
});
export const { updateCollapsed } = globalSlice.actions;
export default globalSlice.reducer;

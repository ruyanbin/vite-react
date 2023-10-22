import { menuOption } from '#/typings/store/';
import { createSlice } from '@reduxjs/toolkit';
const initialState: { tabsList: menuOption[] } = {
  tabsList: [],
};
const useTabsSlice = createSlice({
  name: 'useTabs',
  initialState,
  reducers: {
    addTabs(state, actions: { payload: menuOption }) {
      const index: number = state.tabsList.findIndex((it: menuOption) => it.path == actions.payload.path);
      if (index == -1) {
        state.tabsList.push(actions.payload);
      }
    },
    removeTabs(state, actions: { payload: number }) {
      state.tabsList.splice(actions.payload, 1);
    },
  },
});

export const { addTabs, removeTabs } = useTabsSlice.actions;
export default useTabsSlice.reducer;

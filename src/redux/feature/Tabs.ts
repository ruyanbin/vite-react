import { myMenuItem } from '#/typings/menu';
import { createSlice } from '@reduxjs/toolkit';
const initialState: { tabsList: myMenuItem[] } = {
  tabsList: [],
};
const useTabsSlice = createSlice({
  name: 'useTabs',
  initialState,
  reducers: {
    addTabs(state, actions: { payload: myMenuItem }) {
      const index: number = state.tabsList.findIndex((it: myMenuItem) => it.path == actions.payload.path);
      if (index == -1) {
        state.tabsList.push(actions.payload);
      }
    },
    removeTabs(state, { payload }) {
      console.log(payload, 'payload');

      state.tabsList.splice(payload, 1);
    },
  },
});

export const { addTabs, removeTabs } = useTabsSlice.actions;
export default useTabsSlice.reducer;

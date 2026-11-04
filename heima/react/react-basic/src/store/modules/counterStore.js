import { createSlice } from '@reduxjs/toolkit';

const counterStore = createSlice({
  name: 'counter',
  initialState: {
    count: 5,
  },
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    addToNum(state, action) {
      state.count += action.payload;
    },
  },
});

const { increment, decrement, addToNum } = counterStore.actions;
const reducer = counterStore.reducer;

// 以按需形式导出actions
export { increment, decrement, addToNum };
// 以默认形式导出reducer
export default reducer;

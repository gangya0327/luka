import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const foodStore = createSlice({
  name: 'food',
  initialState: {
    foodList: [],
    activeIndex: 0,
  },
  reducers: {
    getFoodList(state, action) {
      state.foodList = action.payload;
    },
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
  },
});

const { getFoodList, changeActiveIndex } = foodStore.actions;

function fetchFoodList(ctrl) {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3004/takeaway', { signal: ctrl.signal });
    dispatch(getFoodList(res.data));
  };
}

const reducer = foodStore.reducer;

export { fetchFoodList, changeActiveIndex };
export default reducer;

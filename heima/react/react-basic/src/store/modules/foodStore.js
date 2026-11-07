import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const foodStore = createSlice({
  name: 'food',
  initialState: {
    foodList: [],
    activeIndex: 0,
    cartList: [],
  },
  reducers: {
    getFoodList(state, action) {
      state.foodList = action.payload;
    },
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    addCart(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload.id);
      if (item) {
        item.count++;
      } else {
        state.cartList.push({ ...action.payload, count: 1 });
        // state.cartList.push(action.payload);
      }
    },
    incrementCount(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload.id);
      if (item) {
        item.count++;
      }
    },
    decrementCount(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload.id);
      if (item.count === 0) return;
      item.count--;
    },
    clearCart(state) {
      state.cartList = [];
    },
  },
});

const { getFoodList, changeActiveIndex, addCart, incrementCount, decrementCount, clearCart } = foodStore.actions;

function fetchFoodList(ctrl) {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3004/takeaway', { signal: ctrl.signal });
    dispatch(getFoodList(res.data));
  };
}

const reducer = foodStore.reducer;

export { fetchFoodList, changeActiveIndex, addCart, incrementCount, decrementCount, clearCart };
export default reducer;

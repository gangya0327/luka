import { createSlice } from '@reduxjs/toolkit';
import { request } from '@/utils';

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: localStorage.getItem('token') || '',
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
  },
});

const { setToken } = userStore.actions;

const userReducer = userStore.reducer;

const fetchToken = (loginForm) => {
  return async (dispatch) => {
    const res = await request.get('/authorize', loginForm);
    dispatch(setToken(res.data));
  };
};

export { setToken, fetchToken };

export default userReducer;

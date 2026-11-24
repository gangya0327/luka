import { createSlice } from '@reduxjs/toolkit';
import { request } from '@/utils';

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: '',
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

const { setToken } = userStore.actions;

const userReducer = userStore.reducer;

const fetchToken = (loginForm) => {
  return (dispatch) => {
    const res = request.get('/authorize', loginForm);
    console.log('res :>> ', res);
    dispatch(setToken(res.data.token));
  };
};

export { setToken, fetchToken };

export default userReducer;

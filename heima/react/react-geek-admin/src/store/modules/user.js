import { createSlice } from '@reduxjs/toolkit';
import { request } from '@/utils';
import { setToken as _setToken, getToken as _getToken } from '@/utils';

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: _getToken() || '',
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      _setToken(action.payload);
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

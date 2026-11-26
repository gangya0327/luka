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
    removeToken(state) {
      state.token = '';
      _setToken('');
    },
  },
});

const { setToken, removeToken } = userStore.actions;

const userReducer = userStore.reducer;

const fetchToken = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post('/authorize', loginForm);
    dispatch(setToken(res.code));
  };
};

export { setToken, removeToken, fetchToken };

export default userReducer;

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const channelSlice = createSlice({
  name: 'channel',
  initialState: {
    channelList: [],
  },
  reducers: {
    setChannelList(state, action) {
      state.channelList = action.payload;
    },
  },
});

const { setChannelList } = channelSlice.actions;

// 异步获取列表
function fetchChannelList(ctrl) {
  return async (dispatch) => {
    const res = await axios.get('https://60s.viki.moe/v2/ai-news', { signal: ctrl.signal });
    dispatch(setChannelList(res.data.data.news));
  };
}

const reducer = channelSlice.reducer;

export { fetchChannelList };
export default reducer;

import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './modules/counterStore';
import channelReducer from './modules/channelStore';
import foodReducer from './modules/foodStore';
import billReducer from './modules/billStore';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel: channelReducer,
    food: foodReducer,
    bill: billReducer,
  },
});

export default store;

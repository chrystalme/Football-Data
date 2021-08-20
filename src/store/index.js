import { configureStore } from '@reduxjs/toolkit';
import competitionReducer from './competitionSlice';

const store = configureStore({
  reducer: {
    competitionReducer,
  },
});

export default store;

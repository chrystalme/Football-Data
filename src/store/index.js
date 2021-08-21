import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';

const store = configureStore({
  reducer: {
    categoryReducer,
  },
});

export default store;

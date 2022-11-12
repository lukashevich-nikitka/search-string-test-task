import { configureStore } from '@reduxjs/toolkit';
import appReducer from './structure/reducers';

const store = configureStore({
  reducer: appReducer,
});

export default store;

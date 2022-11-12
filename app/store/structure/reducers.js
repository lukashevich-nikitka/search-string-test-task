/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import getNews from './thunks';

const initialState = {
  data: {},
};

const appReducer = createReducer(initialState, {
  [getNews.fulfilled]: (state, action) => {
    state.data = action.payload;
  },
});

export default appReducer;

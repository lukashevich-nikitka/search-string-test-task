/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import getNews from './thunks';

const initialState = {
  weatherData: {},
};

const appReducer = createReducer(initialState, {
  [getNews.fulfilled]: (state, action) => {
    state.weatherData = action.payload;
  },
});

export default appReducer;

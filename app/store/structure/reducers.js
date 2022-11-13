/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import getWeather from './thunks';

const initialState = {
  weatherData: {
    temp: null,
    feels_like: null,
    temp_min: null,
    temp_max: null,
  },
};

const appReducer = createReducer(initialState, {
  [getWeather.fulfilled]: (state, action) => {
    state.weatherData = action.payload;
  },
});

export default appReducer;

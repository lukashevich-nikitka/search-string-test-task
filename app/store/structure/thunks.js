/* eslint-disable consistent-return */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getWeather = createAsyncThunk('weather', async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=186429c2dc77520abeefc7de9a9c8c15`,
    );
    return { name: response.data.name, ...response.data.main };
  } catch (error) {
    return error.response.data.message;
  }
});

export default getWeather;

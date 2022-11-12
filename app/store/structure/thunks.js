import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getNews = createAsyncThunk('news', async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=186429c2dc77520abeefc7de9a9c8c15`,
  );
  return response.data.main;
});

export default getNews;

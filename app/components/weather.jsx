import React from 'react';
import { connect } from 'react-redux';

function Weather({ weather }) {
  return (
    <div className="weather-results-wrapper">
      <div>{weather.name}</div>
      <div className="weather-data">{`Temperature: ${weather.temp}`}</div>
      <div className="weather-data">{`Feels like: ${weather.feels_like}`}</div>
      <div className="weather-data">{`Temperature min: ${weather.temp_min}`}</div>
      <div className="weather-data">{`Temperature max: ${weather.temp_max}`}</div>
    </div>
  );
}

export default connect((state) => ({
  weather: state.weatherData,
}))(Weather);

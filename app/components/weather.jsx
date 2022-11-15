/* eslint-disable no-return-assign */
import React from 'react';
import { connect } from 'react-redux';

function Weather({ weather }) {
  if (typeof weather === 'string') {
    return (
      <div className="weather-results-wrapper">
        <div>{`Something went wrong: ${weather}`}</div>
      </div>
    );
  }
  return (
    <div className="weather-results-wrapper">
      <div>{`Temperature: ${Math.round(weather.temp)}`}</div>
      <div>{`Feels like: ${Math.round(weather.feels_like)}`}</div>
      <div>{`Temperature min: ${Math.round(weather.temp_min)}`}</div>
      <div>{`Temperature max: ${Math.round(weather.temp_max)}`}</div>
    </div>
  );
}

export default connect((state) => ({
  weather: state.weatherData,
}))(Weather);

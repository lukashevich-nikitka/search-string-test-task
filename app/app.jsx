/* eslint-disable import/extensions */
import React from 'react';
import SearchInput from './components/search_string.jsx';
import Weather from './components/weather.jsx';
import './styles/app.scss';

function App() {
  return (
    <div className="app-wrapper">
      <SearchInput />
      <Weather />
    </div>
  );
}

export default App;

import React from 'react';
import { useDispatch } from 'react-redux';
import getNews from '../store/structure/thunks';

function SearchInput() {
  const dispatch = useDispatch();
  const myFunc = function (e) {
    e.preventDefault();
    dispatch(getNews('Grodno'));
  };
  return (
    <div className="app wrapper">
      <form>
        <input type="text" placeholder="Get NASA news" />
        <button type="submit" onClick={myFunc}>Get</button>
      </form>
    </div>
  );
}

export default SearchInput;

/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import getWeather from '../store/structure/thunks';

function SearchInput() {
  const glass = icon(faMagnifyingGlass);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => dispatch(getWeather(data.town));
  return (
    <div className="search-string-wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Enter city here" required="required" {...register('town')} />
        <button type="submit"><span><FontAwesomeIcon icon={glass} /></span></button>
      </form>
    </div>
  );
}

export default SearchInput;

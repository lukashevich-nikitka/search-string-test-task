import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import getNews from '../store/structure/thunks';

function SearchInput() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => dispatch(getNews(data.town));
  return (
    <div className="app wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Enter city here" required="required" {...register('town')} />
        <button type="submit">Get</button>
      </form>
    </div>
  );
}

export default SearchInput;

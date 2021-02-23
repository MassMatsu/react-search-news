import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const data = useGlobalContext();

  return <div>{data}</div>;
};

export default SearchForm;

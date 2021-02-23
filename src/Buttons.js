import React from 'react';
import { useGlobalContext } from './context';

const Buttons = () => {
  const { loading, page, nbPages, handlePage } = useGlobalContext();
  return (
    <div className='btn-container'>
      <button disabled={loading} onClick={() => handlePage('prev')}>
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={loading} onClick={() => handlePage('next')}>
        next
      </button>
    </div>
  );
};

export default Buttons;

import React from 'react';
import { useGlobalContext } from './context';

const Buttons = () => {
  const { page, nbPages } = useGlobalContext();
  return (
    <div className='btn-container'>
      <button>prev</button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button>next</button>
    </div>
  );
};

export default Buttons;

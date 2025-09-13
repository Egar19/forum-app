import React from 'react';
import { HiOutlinePlus } from 'react-icons/hi';

const FloatingButton = () => {
  return (
    <button className='fixed bottom-6 right-6 text-white rounded-full shadow-lg btn btn-primary'>
      <HiOutlinePlus />
    </button>
  );
};

export default FloatingButton;

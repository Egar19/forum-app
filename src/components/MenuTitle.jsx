/* eslint-disable react/prop-types */
import React from 'react';
import Avatar from './Avatar';

const MenuTitle = ({ title = 'Anonymous' }) => {
  return (
    <>
      <p className='menu-title text-secondary hidden md:block'>{title}</p>
      <div className='block md:hidden text-2xl'>
        <Avatar username={title} />
      </div>
    </>
  );
};

export default MenuTitle;

/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ path, tooltip, icon, label = '' }) => {
  return (
    <li className='hover:bg-transparent'>
      <Link to={path} className='tooltip tooltip-right text-base w-full' data-tip={tooltip}>
        <p>{icon}</p>
        <p className='hidden md:block'>{label}</p>
      </Link>
    </li>
  );
};

export default MenuItem;
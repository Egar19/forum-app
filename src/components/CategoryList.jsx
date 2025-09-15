/* eslint-disable react/prop-types */
import React from 'react';
import Category from './Category';

const CategoryList = ({ categories }) => {

  return (
    <div className='flex flex-col gap-2'>
      <h1 className='card-title'>Category List</h1>
      <div className='flex gap-2'>
        {categories.map((category) => (
          <div className='cursor-pointer' key={category}>
            <Category category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

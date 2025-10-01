/* eslint-disable react/prop-types */
import React from 'react';
import Category from './Category';

const CategoryList = ({ categories, onSelectCategory, selectedCategory }) => {
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='card-title'>Category List</h1>
      <div className='flex gap-2 flex-wrap'>
        <div
          className={`cursor-pointer px-3 py-1 rounded ${
            selectedCategory === null ? 'bg-primary text-primary-content' : 'bg-secondary text-secondary-content'
          }`}
          onClick={() => onSelectCategory(null)}
        >
          Semua
        </div>

        {categories.map((category) => (
          <div
            className={`cursor-pointer px-3 py-1 rounded ${
              selectedCategory === category
                ? 'bg-primary text-primary-content'
                : 'bg-secondary text-secondary-content'
            }`}
            key={category}
            onClick={() => onSelectCategory(category)}
          >
            <Category category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

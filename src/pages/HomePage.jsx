import React from 'react';
import PostCard from '../components/PostCard';
import CategoryList from '../components/CategoryList';
import FloatingButton from '../components/FloatingButton';
import data from '../utils/data';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div className='w-full p-3'>
        <div className='mb-3'>
          <CategoryList />
        </div>
        {data.map((d) => (
          <PostCard key={d.id} {...d} />
        ))}

        <Link to='/addthread'>
          <FloatingButton />
        </Link>
      </div>
    </>
  );
};

export default HomePage;

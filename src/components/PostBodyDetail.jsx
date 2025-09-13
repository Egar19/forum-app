/* eslint-disable react/prop-types */
import React from 'react';

const PostBodyDetail = ({ title, description }) => {
  return (
    <div className='p-3 rounded bg-base-100'>
      <div className='card-title'>{title}</div>
      <p>{description}</p>
    </div>
  );
};

export default PostBodyDetail;

/* eslint-disable react/prop-types */
import React from 'react';

const PostBodyDetail = ({ title, body }) => {
  return (
    <div className='p-3 rounded bg-base-100'>
      <div className='card-title'>{title}</div>
      <p>{body}</p>
    </div>
  );
};

export default PostBodyDetail;

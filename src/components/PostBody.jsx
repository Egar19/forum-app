/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const PostBody = ({ id, title, description }) => {
  return (
    <div className='p-3 rounded bg-base-100'>
      <Link to={`/thread/${id}`} className='card-title'>{title}</Link>
      <p>{description}</p>
    </div>
  );
};

export default PostBody;
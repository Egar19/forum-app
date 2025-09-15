/* eslint-disable react/prop-types */
import React from 'react';
import Avatar from './Avatar';
import formatDate from '../utils/formatDate';

const PostHeader = ({ name, createdAt }) => {

  return (
    <div className='card-title'>
      <Avatar username={name} />
      <h1>{name}</h1>
      <h1 className='ml-auto text-xs'>{formatDate(createdAt)}</h1>
    </div>
  );
};

export default PostHeader;

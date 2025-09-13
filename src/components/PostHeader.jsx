/* eslint-disable react/prop-types */
import React from 'react';
import Avatar from './Avatar';

const PostHeader = ({ username, createdAt }) => {

  return (
    <div className='card-title'>
      <Avatar username={username} />
      <h1>{username}</h1>
      <h1 className='ml-auto text-xs'>{createdAt}</h1>
    </div>
  );
};

export default PostHeader;

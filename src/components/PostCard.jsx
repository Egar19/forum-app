/* eslint-disable react/prop-types */
import React from 'react';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostFooter from './PostFooter';

const PostCard = ({ id,  username, createdAt, title, description, like, dislike, comment, category }) => {
  return (
    <div className='border-base-100 border-2 rounded bg-base-300'>
      <div className='card-body'>
        <PostHeader username={username} createdAt={createdAt}/>
        <PostBody id={id} title={title} description={description}/>
        <PostFooter like={like} dislike={dislike} comment={comment} category={category}/>
      </div>
    </div>
  );
};

export default PostCard;

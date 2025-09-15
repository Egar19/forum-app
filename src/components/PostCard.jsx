/* eslint-disable react/prop-types */
import React from 'react';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostFooter from './PostFooter';

const PostCard = ({ id,  name, createdAt, title, body, upVotesBy, downVotesBy, totalComment, category }) => {
  return (
    <div className='border-base-100 border-2 rounded bg-base-300'>
      <div className='card-body'>
        <PostHeader name={name} createdAt={createdAt}/>
        <PostBody id={id} title={title} body={body}/>
        <PostFooter upVotesBy={upVotesBy} downVotesBy={downVotesBy} totalComments={totalComment} category={category}/>
      </div>
    </div>
  );
};

export default PostCard;

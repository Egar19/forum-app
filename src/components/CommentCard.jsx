import React from 'react';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

const CommentCard = () => {
  return (
    <div className='border-t-2 border-base-100 flex flex-col gap-2'>
      <PostHeader username={'Bagas'} createdAt={'1 menit yang lalu'} />
      <p className='p-3 rounded bg-base-100'>Comment 1</p>
      <PostFooter like={10} dislike={1}/>
    </div>
  );
};

export default CommentCard;

/* eslint-disable react/prop-types */
import React from 'react';
import Category from './Category';
import {
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiOutlineChat,
} from 'react-icons/hi';

const PostFooter = ({
  threadId,
  upVotesBy,
  downVotesBy,
  totalComments,
  category,
  onUpVote,
  onDownVote,
  onNeutralVote,
  authUserId,
}) => {
  const isUpVoted = upVotesBy.includes(authUserId);
  const isDownVoted = downVotesBy.includes(authUserId);

  return (
    <div className='flex gap-2'>
      {category && <Category category={category} />}

      <div className='flex ml-auto gap-2 items-center'>
        <button
          className='cursor-pointer'
          onClick={() =>
            isUpVoted ? onNeutralVote(threadId) : onUpVote(threadId)
          }
        >
          <HiOutlineThumbUp className={isUpVoted ? 'text-primary' : ''} />
        </button>
        <span>{upVotesBy.length}</span>

        <button
          className='cursor-pointer'
          onClick={() =>
            isDownVoted ? onNeutralVote(threadId) : onDownVote(threadId)
          }
        >
          <HiOutlineThumbDown className={isDownVoted ? 'text-error' : ''} />
        </button>
        <span>{downVotesBy.length}</span>

        {totalComments !== undefined && (
          <>
            <span>
              <HiOutlineChat />
            </span>
            <span>{totalComments}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default PostFooter;

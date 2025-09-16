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
  upVotesBy = [],
  downVotesBy = [],
  totalComments,
  category,
  onUpVote,
  onDownVote,
  onNeutralVote,
  authUserId,
}) => {
  const safeUpVotes = Array.isArray(upVotesBy) ? upVotesBy : [];
  const safeDownVotes = Array.isArray(downVotesBy) ? downVotesBy : [];

  const isUpVoted = safeUpVotes.includes(authUserId);
  const isDownVoted = safeDownVotes.includes(authUserId);

  return (
    <div className="flex gap-2">
      {category && <Category category={category} />}

      <div className="flex ml-auto gap-2 items-center">
        <button
          className="cursor-pointer"
          onClick={() =>
            isUpVoted ? onNeutralVote(threadId) : onUpVote(threadId)
          }
        >
          <HiOutlineThumbUp className={isUpVoted ? 'text-primary' : ''} />
        </button>
        <span>{safeUpVotes.length}</span>

        <button
          className="cursor-pointer"
          onClick={() =>
            isDownVoted ? onNeutralVote(threadId) : onDownVote(threadId)
          }
        >
          <HiOutlineThumbDown className={isDownVoted ? 'text-error' : ''} />
        </button>
        <span>{safeDownVotes.length}</span>

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

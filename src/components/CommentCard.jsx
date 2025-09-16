/* eslint-disable react/prop-types */
import React from 'react';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

const CommentCard = ({
  commentId,
  body,
  name,
  createdAt,
  authUserId,
  upVotesBy = [],
  downVotesBy = [],
  onUpVote,
  onDownVote,
  onNeutralVote,
}) => {
  return (
    <div className="border-t-2 border-base-100 flex flex-col gap-2">
      <PostHeader name={name} createdAt={createdAt} />

      <p className="p-3 rounded bg-base-100">{body}</p>

      <PostFooter
        threadId={commentId}
        authUserId={authUserId}
        upVotesBy={upVotesBy}
        downVotesBy={downVotesBy}
        onUpVote={onUpVote}
        onDownVote={onDownVote}
        onNeutralVote={onNeutralVote}
      />
    </div>
  );
};

export default CommentCard;

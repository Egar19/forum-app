import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncGetThreadDetail,
  asyncClearThreadDetail,
  asyncAddComment,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralVoteThreadDetail,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralVoteComment,
} from '../states/threadDetail/action';

import PostHeader from '../components/PostHeader';
import PostFooter from '../components/PostFooter';
import PostBodyDetail from '../components/PostBodyDetail';
import CommentCard from '../components/CommentCard';
import CommentInput from '../components/CommentInput';

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const threadDetail = useSelector((state) => state.threadDetail);
  const authUser = useSelector((state) => state.authUser);

  useEffect(() => {
    dispatch(asyncGetThreadDetail(id));

    return () => {
      dispatch(asyncClearThreadDetail());
    };
  }, [dispatch, id]);

  if (!threadDetail) {
    return <h2 className="text-error">Loading...</h2>;
  }

  // handler untuk komentar baru
  const handleAddComment = (content) => {
    if (!authUser) {
      alert('Login dulu untuk menulis komentar!');
      navigate('/login');
      return;
    }
    dispatch(asyncAddComment({ threadId: threadDetail.id, content }));
  };

  // handler untuk voting thread
  const handleUpVoteThread = () => {
    if (!authUser) {
      alert('Login dulu untuk memberi vote!');
      navigate('/login');
      return;
    }
    dispatch(asyncUpVoteThreadDetail(threadDetail.id));
  };

  const handleDownVoteThread = () => {
    if (!authUser) {
      alert('Login dulu untuk memberi vote!');
      navigate('/login');
      return;
    }
    dispatch(asyncDownVoteThreadDetail(threadDetail.id));
  };

  const handleNeutralVoteThread = () => {
    if (!authUser) {
      alert('Login dulu untuk memberi vote!');
      navigate('/login');
      return;
    }
    dispatch(asyncNeutralVoteThreadDetail(threadDetail.id));
  };

  // handler untuk voting komentar
  const handleUpVoteComment = (commentId) => {
    if (!authUser) {
      alert('Login dulu untuk memberi vote!');
      navigate('/login');
      return;
    }
    dispatch(asyncUpVoteComment({ threadId: threadDetail.id, commentId }));
  };

  const handleDownVoteComment = (commentId) => {
    if (!authUser) {
      alert('Login dulu untuk memberi vote!');
      navigate('/login');
      return;
    }
    dispatch(asyncDownVoteComment({ threadId: threadDetail.id, commentId }));
  };

  const handleNeutralVoteComment = (commentId) => {
    if (!authUser) {
      alert('Login dulu untuk memberi vote!');
      navigate('/login');
      return;
    }
    dispatch(asyncNeutralVoteComment({ threadId: threadDetail.id, commentId }));
  };

  return (
    <div className="border-base-100 border-2 rounded bg-base-300 m-3">
      <div className="card-body">
        <PostHeader
          createdAt={threadDetail.createdAt}
          name={threadDetail.owner?.name}
        />

        <PostBodyDetail title={threadDetail.title} body={threadDetail.body} />

        <PostFooter
          threadId={threadDetail.id}
          upVotesBy={threadDetail.upVotesBy}
          downVotesBy={threadDetail.downVotesBy}
          totalComments={threadDetail.comments.length}
          category={threadDetail.category}
          authUserId={authUser?.id}
          onUpVote={handleUpVoteThread}
          onDownVote={handleDownVoteThread}
          onNeutralVote={handleNeutralVoteThread}
        />

        {authUser ? (
          <CommentInput onAddComment={handleAddComment} />
        ) : (
          <p className="text-sm text-error">
            <Link className="underline text-primary" to="/login">
              Login
            </Link>{' '}
            dulu untuk menulis komentar
          </p>
        )}

        <h1 className="card-title">
          Comments ({threadDetail.comments.length})
        </h1>

        {threadDetail.comments.map((comment) => (
          <CommentCard
            key={comment.id}
            body={comment.content}
            name={comment.owner?.name}
            authUserId={authUser?.id}
            threadId={threadDetail.id}
            commentId={comment.id}
            createdAt={comment.createdAt}
            upVotesBy={comment.upVotesBy}
            downVotesBy={comment.downVotesBy}
            onUpVote={handleUpVoteComment}
            onDownVote={handleDownVoteComment}
            onNeutralVote={handleNeutralVoteComment}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailPage;

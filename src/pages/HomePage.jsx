import React, { useEffect } from 'react';
import PostCard from '../components/PostCard';
import CategoryList from '../components/CategoryList';
import FloatingButton from '../components/FloatingButton';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import {
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralVoteThread,
} from '../states/threads/action';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const threads = useSelector((state) => state.threads);
  const users = useSelector((state) => state.users);
  const authUser = useSelector((state) => state.authUser);

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const handleAddThreadClick = (e) => {
    if (!authUser) {
      e.preventDefault(); // cegah pindah halaman
      alert('Login dulu untuk membuat thread!');
      navigate('/login');
    }
  };

  // handler vote dengan proteksi login
  const handleUpVote = (id) => {
    if (!authUser) {
      alert('Login dulu untuk memberi vote!');
      navigate('/login');
      return;
    }
    dispatch(asyncUpVoteThread(id));
  };

  const handleDownVote = (id) => {
    if (!authUser) {
      alert('Login dulu untuk memberi vote!');
      navigate('/login');
      return;
    }
    dispatch(asyncDownVoteThread(id));
  };

  const handleNeutralVote = (id) => {
    if (!authUser) {
      alert('Login dulu untuk memberi vote!');
      navigate('/login');
      return;
    }
    dispatch(asyncNeutralVoteThread(id));
  };

  return (
    <div className='w-full p-3'>
      <div className='mb-3'>
        <CategoryList categories={threads.map((thread) => thread.category)} />
      </div>

      {threads.map((thread) => {
        const owner = users.find((u) => u.id === thread.ownerId);

        return (
          <PostCard
            key={thread.id}
            id={thread.id}
            body={thread.body}
            title={thread.title}
            category={thread.category}
            createdAt={thread.createdAt}
            totalComment={thread.totalComments}
            upVotesBy={thread.upVotesBy}
            downVotesBy={thread.downVotesBy}
            name={owner ? owner.name : 'Anonim'}
            authUserId={authUser?.id}
            onUpVote={handleUpVote}
            onDownVote={handleDownVote}
            onNeutralVote={handleNeutralVote}
          />
        );
      })}

      <Link to='/addthread' onClick={handleAddThreadClick}>
        <FloatingButton />
      </Link>
    </div>
  );
};

export default HomePage;

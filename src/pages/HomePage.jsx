import React, { useEffect } from 'react';
import PostCard from '../components/PostCard';
import CategoryList from '../components/CategoryList';
import FloatingButton from '../components/FloatingButton';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import {
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralVoteThread,
} from '../states/threads/action';

const HomePage = () => {
  const dispatch = useDispatch();

  const threads = useSelector((state) => state.threads);
  const users = useSelector((state) => state.users);
  const authUser = useSelector((state) => state.authUser);

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  return (
    <>
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
              authUserId={authUser ? authUser.id : null}
              onUpVote={(id) => dispatch(asyncUpVoteThread(id))}
              onDownVote={(id) => dispatch(asyncDownVoteThread(id))}
              onNeutralVote={(id) => dispatch(asyncNeutralVoteThread(id))}
            />
          );
        })}

        <Link to='/addthread'>
          <FloatingButton />
        </Link>
      </div>
    </>
  );
};

export default HomePage;

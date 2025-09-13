import React, { useEffect } from 'react';
import Avatar from '../components/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateLeaderboard } from '../states/leaderboard/action';

const LeaderboardPage = () => {

  const dispatch = useDispatch();
  const leaderboard = useSelector((states) => states.leaderboard);

  useEffect(() => {
    dispatch(asyncPopulateLeaderboard());
  }, [dispatch]);

  return (
    <div className='ml-3 flex justify-center items-start rounded bg-base-300 pt-5 pb-10'>
      <ul className='list bg-base-100 rounded-box shadow-md w-[80%]'>
        <li className='p-4 pb-2 text-xs opacity-60 tracking-wide'>
          Leaderboard active user
        </li>
        {leaderboard.map(({ user, score }) => (
          <li key={user.id} className='list-row'>
            <div>
              <Avatar username={user.name} />
            </div>
            <div>
              <span className='font-semibold'>{user.name}</span>
            </div>
            <span className='text-sm opacity-70'>
              Score: {score}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaderboardPage;

import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import usersReducer from './users/reducer';
import leaderboardReducer from './leaderboard/reducer';
import threadsReducer from './threads/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadDetailReducer from './threadDetail/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    users: usersReducer,
    leaderboard: leaderboardReducer,
    threads: threadsReducer,
    isPreload: isPreloadReducer,
    threadDetail: threadDetailReducer,
  },
});

export default store;
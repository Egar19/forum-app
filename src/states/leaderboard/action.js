import api from '../../utils/api';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

const ActionType = {
  RECEIVE_LEADERBOARD: 'RECEIVE_LEADERBOARD',
};

function receiveLeaderboardActtionCreator(leaderboard) {
  return {
    type: ActionType.RECEIVE_LEADERBOARD,
    payload: {
      leaderboard,
    },
  };
}

function asyncPopulateLeaderboard() {
  nProgress.start();
  return async (dispatch) => {
    try {
      const leaderboard = await api.getLeaderboards();
      dispatch(receiveLeaderboardActtionCreator(leaderboard));
    } catch (error) {
      console.log(error.message);
    } finally {
      nProgress.done();
    }
  };
}

export {
  ActionType,
  receiveLeaderboardActtionCreator,
  asyncPopulateLeaderboard,
};

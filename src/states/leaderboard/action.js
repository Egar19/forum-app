import api from '../../utils/api';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

const ActionType = {
  RECEIVE_LEADERBOARD: 'RECEIVE_LEADERBOARD',
};

function receiveLeaderboardActionCreator(leaderboard) {
  return {
    type: ActionType.RECEIVE_LEADERBOARD,
    payload: {
      leaderboard,
    },
  };
}

function asyncPopulateLeaderboard() {
  return async (dispatch) => {
    nProgress.start();
    try {
      const leaderboard = await api.getLeaderboards();
      dispatch(receiveLeaderboardActionCreator(leaderboard));
    } catch (error) {
      console.log(error.message);
    } finally {
      nProgress.done();
    }
  };
}

export {
  ActionType,
  receiveLeaderboardActionCreator,
  asyncPopulateLeaderboard,
};

import api from '../../utils/api';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

const ActionType = {
  CREATE_THREAD: 'CREATE_THREAD',
  GET_ALL_THREADS: 'GET_ALL_THREAD',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
  NEUTRAL_VOTE_THREAD: 'NEUTRAL_VOTE_THREAD',
};

function createThreadActionCreator(thread) {
  return {
    type: ActionType.CREATE_THREAD,
    payload: {
      thread,
    },
  };
}

function getAllThreadsActionCreator(threads) {
  return {
    type: ActionType.GET_ALL_THREADS,
    payload: {
      threads,
    },
  };
}

function upVoteThreadActionCreator(threadId) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      threadId,
    },
  };
}

function downVoteThreadActionCreator(threadId) {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload: {
      threadId,
    },
  };
}

function neutralVoteThreadActionCreator(threadId) {
  return {
    type: ActionType.NEUTRAL_VOTE_THREAD,
    payload: {
      threadId,
    },
  };
}

function asyncCreateThread({ title, body, category }) {
  return async (dispatch) => {
    nProgress.start();
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(createThreadActionCreator(thread));
    } catch (error) {
      console.log(error.message);
    } finally {
      nProgress.done();
    }
  };
}



export {
  ActionType,
  createThreadActionCreator,
  getAllThreadsActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  neutralVoteThreadActionCreator,
  asyncCreateThread,
};

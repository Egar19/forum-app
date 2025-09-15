import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
  case ActionType.CREATE_THREAD:
    return [action.payload.thread, ...threads];

  case ActionType.GET_ALL_THREADS:
    return action.payload.threads;

  case ActionType.UP_VOTE_THREAD: {
    const { threadId, userId } = action.payload;
    return threads.map((thread) => {
      if (thread.id === threadId) {
        return {
          ...thread,
          upVotesBy: thread.upVotesBy.includes(userId)
            ? thread.upVotesBy
            : [...thread.upVotesBy, userId],
          downVotesBy: thread.downVotesBy.filter((id) => id !== userId),
        };
      }
      return thread;
    });
  }

  case ActionType.DOWN_VOTE_THREAD: {
    const { threadId, userId } = action.payload;
    return threads.map((thread) => {
      if (thread.id === threadId) {
        return {
          ...thread,
          downVotesBy: thread.downVotesBy.includes(userId)
            ? thread.downVotesBy
            : [...thread.downVotesBy, userId],
          upVotesBy: thread.upVotesBy.filter((id) => id !== userId),
        };
      }
      return thread;
    });
  }

  case ActionType.NEUTRAL_VOTE_THREAD: {
    const { threadId, userId } = action.payload;
    return threads.map((thread) => {
      if (thread.id === threadId) {
        return {
          ...thread,
          upVotesBy: thread.upVotesBy.filter((id) => id !== userId),
          downVotesBy: thread.downVotesBy.filter((id) => id !== userId),
        };
      }
      return thread;
    });
  }

  default:
    return threads;
  }
}

export default threadsReducer;

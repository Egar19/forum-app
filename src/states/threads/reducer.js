import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
  case ActionType.CREATE_THREAD:
    return [action.payload.thread, ...threads];
  default:
    return threads;
  }
}

export default threadsReducer;
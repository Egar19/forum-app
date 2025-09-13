import { ActionType } from './action';

const authUserReducer = (authUser = null, action = {}) => {
  switch (action.type) {
  case ActionType.LOGIN:
    return action.payload.authUser;
  case ActionType.LOGOUT:
    return null;
  default:
    return authUser;
  }
};

export default authUserReducer;

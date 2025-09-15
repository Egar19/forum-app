import api from '../../utils/api';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

const ActionType = {
  REGISTER_USER: 'REGISTER_USER',
  GET_ALL_USER: 'GET_ALL_USER',
};

function registerUserActionCreator(user) {
  return {
    type: ActionType.REGISTER_USER,
    payload: {
      user,
    },
  };
}

function getAllUserActionCreator(users) {
  return {
    type: ActionType.GET_ALL_USER,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    nProgress.start();
    try {
      const userRegister = await api.registerUser({ name, email, password });
      dispatch(registerUserActionCreator(userRegister));
      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    } finally {
      nProgress.done();
    }
  };
}


export {
  ActionType,
  registerUserActionCreator,
  getAllUserActionCreator,
  asyncRegisterUser,
};
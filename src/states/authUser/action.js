import api from '../../utils/api';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

const ActionType = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

function loginActionCreator(authUser) {
  return {
    type: ActionType.LOGIN,
    payload: {
      authUser,
    },
  };
}

function logoutActionCreator() {
  return {
    type: ActionType.LOGOUT,
    payload: {
      authUser: null,
    },
  };
}

function asyncLogin({ email, password }) {
  return async (dispatch) => {
    nProgress.start();
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const authUser = await api.getOwnProfile();

      dispatch(loginActionCreator(authUser));
      console.log('Login berhasil!', authUser);
    } catch (error) {
      console.log(error.message);
    } finally {
      nProgress.done();
    }
  };
}

function asyncLogout() {
  return (dispatch) => {
    dispatch(logoutActionCreator());
    api.putAccessToken('');
  };
}

export {
  ActionType,
  loginActionCreator,
  logoutActionCreator,
  asyncLogin,
  asyncLogout,
};

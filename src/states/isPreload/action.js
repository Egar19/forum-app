import api from '../../utils/api';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { loginActionCreator } from '../authUser/action';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

function asyncIsPreload() {
  return async (dispatch) => {
    nProgress.start();
    try {
      const authUser = await api.getOwnProfile();
      dispatch(loginActionCreator(authUser));
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      dispatch(loginActionCreator(null));
    } finally {
      dispatch(setIsPreloadActionCreator(false));
      nProgress.done();
    }
  };
}

export { ActionType, setIsPreloadActionCreator, asyncIsPreload };

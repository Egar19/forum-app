import api from '../../utils/api';
import { getAllUserActionCreator } from '../users/action';
import { getAllThreadsActionCreator } from '../threads/action';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    nProgress.start();
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();

      dispatch(getAllUserActionCreator(users));
      dispatch(getAllThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    } finally {
      nProgress.done();
    }
  };
}

export { asyncPopulateUsersAndThreads };

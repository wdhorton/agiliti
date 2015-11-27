import { dispatch } from '../AppDispatcher';
import CurrentUserConstants from '../constants/current_user_constants';

export default {
  receiveCurrentUser: function (currentUser) {
    dispatch({
      actionType: CurrentUserConstants.CURRENT_USER_RECEIVED,
      currentUser: currentUser
    });
  }
};

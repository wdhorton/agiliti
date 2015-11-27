import { register } from '../AppDispatcher';
import { createStore } from '../utils/StoreUtils';
import CurrentUserConstants from '../constants/current_user_constants';
import $ from 'jquery';

var _currentUser = [];

const CurrentUserStore = createStore({
  currentUser() {
    return $.extend({}, _currentUser);
  },

  isSignedIn() {
    return (typeof _currentUser.id !== "undefined");
  }
});

CurrentUserStore.dispatcherToken = register(payload => {
  switch (payload.type.actionType) {
    case CurrentUserConstants.CURRENT_USER_RECEIVED:
      _currentUser = payload.type.currentUser;
      CurrentUserStore.emitChange();
      break;
  }
});

export default CurrentUserStore;

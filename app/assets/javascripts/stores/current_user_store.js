import { register } from '../AppDispatcher';
import { createStore } from '../utils/StoreUtils';

var _currentUser = [];

const CurrentUserStore = createStore({
  currentUser() {
    return $.extend({}, _currentUser);
  },

  isSignedIn() {
    return (typeof _currentUser.id !== "undefined");
  }
});

CurrentUserStore.dispatcherToken = register(function (payload) {
  switch (payload.actionType) {
    case CurrentUserConstants.CURRENT_USER_RECEIVED:
      _currentUser = payload.currentUser;
      CurrentUserStore.emit(CHANGE_EVENT);
      break;
  }
});

export default CurrentUserStore;

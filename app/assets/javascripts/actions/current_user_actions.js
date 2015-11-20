CurrentUserActions = {
  receiveCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: CurrentUserConstants.CURRENT_USER_RECEIVED,
      currentUser: currentUser
    });
  }
};

SessionsApiUtil = {

  signin: function (credentials, success) {
    $.ajax({
      url: "/api/session",
      method: "POST",
      dataType: 'json',
      data: credentials,
      success: function () {
        console.log("signed in!");
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success();
      }
    });
  },

  signout: function () {
    $.ajax({
      url: "/api/session",
      method: "DELETE",
      dataType: 'json',
      success: function () {
        console.log("signed out!");
        CurrentUserActions.receiveCurrentUser({});
      }
    });
  },

  fetchCurrentUser: function () {
    $.ajax({
      url: "/api/session",
      method: "GET",
      dataType: 'json',
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
      }
    });
  }
};

import $ from 'jquery';
import { receiveCurrentUser } from '../actions/current_user_actions';

export default {
  signin: function (credentials, success) {
    $.ajax({
      url: "/api/session",
      method: "POST",
      dataType: 'json',
      data: credentials,
      success: function (currentUser) {
        receiveCurrentUser(currentUser);
        if (success) success();
      }
    });
  },

  signout: function () {
    $.ajax({
      url: "/api/session",
      method: "DELETE",
      dataType: 'json',
      success: function () {
        receiveCurrentUser({});
      }
    });
  },

  fetchCurrentUser: function () {
    $.ajax({
      url: "/api/session",
      method: "GET",
      dataType: 'json',
      success: function (currentUser) {
        receiveCurrentUser(currentUser);
      }
    });
  }
};

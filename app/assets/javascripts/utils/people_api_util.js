import $ from 'jquery';
import { receiveCurrentUser } from '../actions/current_user_actions';

export default {
  signup: function (person, success) {
    $.ajax({
      url: "api/people",
      method: "POST",
      dataType: 'json',
      data: { person: person },
      success: function (person) {
        receiveCurrentUser(person);
        if (success) success();
      }
    });
  },

  updatePerson: function (person, success) {
    $.ajax({
      url: "api/people/" + person.id,
      method: "PATCH",
      data: { person: person },
      dataType: 'json',
      success: function (user) {
        receiveCurrentUser(person);
        if (success) success();
      }
    });
  }
};

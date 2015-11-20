PeopleApiUtil = {
  signup: function (person, succcess) {
    $.ajax({
      url: "api/people",
      method: "POST",
      dataType: 'json',
      data: { person: person },
      success: function (person) {
        CurrentUserActions.receiveCurrentUser(person);
        if (success) success();
      }
    });
  }
};

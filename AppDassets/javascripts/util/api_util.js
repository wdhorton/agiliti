ApiUtil = {
  fetchProjects: function () {
    $.ajax({
      url: "api/projects",
      dataType: 'json',
      success: function(projects) {
        ApiActions.receiveAllProjects(projects);
      }
    });
  }
};

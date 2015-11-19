ApiUtil = {
  fetchProjects: function () {
    $.ajax({
      url: "api/projects",
      dataType: 'json',
      success: function (projects) {
        ApiActions.receiveAllProjects(projects);
      }
    });
  },

  createNewProject: function (project) {
    $.ajax({
      url: "api/projects",
      method: "POST",
      data: { project : project },
      dataType: 'json',
      success: function (project) {
        debugger;
      }
    });
  }
};

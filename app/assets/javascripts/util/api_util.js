ApiUtil = {
  fetchProjects: function () {
    $.ajax({
      url: "api/projects",
      method: "GET",
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
        ApiActions.receiveNewProject(project);
      }
    });
  },

  fetchAccounts: function () {
    $.ajax({
      url: "api/accounts",
      method: "GET",
      dataType: 'json',
      success: function (accounts) {
        ApiActions.receiveAllAccounts(accounts);
      }
    });
  }
};

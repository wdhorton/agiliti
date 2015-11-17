ApiActions = {
  receiveAllProjects: function(projects) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: projects
    });
  }
};

ApiActions = {
  receiveAllProjects: function(projects) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: projects
    });
  },

  receiveNewProject: function(project) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.NEW_PROJECT_RECEIVED,
      project: project
    });
  },

  receiveAllAccounts: function(accounts) {
    AppDispatcher.dispatch({
      actionType: AccountConstants.ACCOUNTS_RECEIVED,
      accounts: accounts
    });
  },
};

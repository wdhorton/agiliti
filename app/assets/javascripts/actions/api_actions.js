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

  receiveAllStories: function(stories) {
    AppDispatcher.dispatch({
      actionType: StoryConstants.STORIES_RECEIVED,
      stories: stories
    });
  },

  receiveAllAccounts: function(accounts) {
    AppDispatcher.dispatch({
      actionType: AccountConstants.ACCOUNTS_RECEIVED,
      accounts: accounts
    });
  },


};

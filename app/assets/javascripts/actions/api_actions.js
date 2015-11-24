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

  receiveNewStory: function(story) {
    AppDispatcher.dispatch({
      actionType: StoryConstants.NEW_STORY_RECEIVED,
      story: story
    });
  },

  receiveAllAccounts: function(accounts) {
    AppDispatcher.dispatch({
      actionType: AccountConstants.ACCOUNTS_RECEIVED,
      accounts: accounts
    });
  },


};

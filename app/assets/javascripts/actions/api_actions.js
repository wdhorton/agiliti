import { dispatch } from '../AppDispatcher';
import ProjectConstants from '../constants/project_constants';
import StoryConstants from '../constants/story_constants';
import AccountConstants from '../constants/account_constants';

export default {
  receiveAllProjects: function(projects) {
    dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: projects
    });
  },

  receiveNewProject: function(project) {
    dispatch({
      actionType: ProjectConstants.NEW_PROJECT_RECEIVED,
      project: project
    });
  },

  receiveAllStories: function(stories) {
    dispatch({
      actionType: StoryConstants.STORIES_RECEIVED,
      stories: stories
    });
  },

  receiveNewStory: function(story) {
    dispatch({
      actionType: StoryConstants.NEW_STORY_RECEIVED,
      story: story
    });
  },

  receiveUpdatedStory: function(story) {
    dispatch({
      actionType: StoryConstants.UPDATED_STORY_RECEIVED,
      story: story
    });
  },

  receiveAllAccounts: function(accounts) {
    dispatch({
      actionType: AccountConstants.ACCOUNTS_RECEIVED,
      accounts: accounts
    });
  },
};

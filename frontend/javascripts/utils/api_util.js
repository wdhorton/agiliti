import $ from 'jquery';
import ApiActions from '../actions/api_actions';

export default {
  fetchProjects: function () {
    $.ajax({
      url: "/api/projects",
      method: "GET",
      dataType: 'json',
      success: function (projects) {
        ApiActions.receiveAllProjects(projects);
      }
    });
  },

  fetchSingleProject: function (id) {
    $.ajax({
      url: "/api/projects/" + id,
      method: "GET",
      dataType: 'json',
      success: function (project) {
        ApiActions.receiveSingleProject(project);
      }
    });
  },

  createNewProject: function (project) {
    $.ajax({
      url: "/api/projects",
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
      url: "/api/accounts",
      method: "GET",
      dataType: 'json',
      success: function (accounts) {
        ApiActions.receiveAllAccounts(accounts);
      }
    });
  },

  fetchStories: function (project_id) {
    $.ajax({
      url: "/api/projects/" + project_id + "/stories",
      method: "GET",
      dataType: 'json',
      success: function (stories) {
        ApiActions.receiveAllStories(stories);
      }
    });
  },

  createNewStory: function (story) {
    $.ajax({
      url: "/api/stories",
      method: "POST",
      data: { story : story },
      dataType: 'json',
      success: function (story) {
        ApiActions.receiveNewStory(story);
      }
    });
  },

  updateStory: function (story) {
    $.ajax({
      url: "/api/stories/" + story.id,
      method: "PATCH",
      data: { story : story },
      dataType: 'json',
      success: function (story) {
        ApiActions.receiveUpdatedStory(story);
      }
    });
  }
};

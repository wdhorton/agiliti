import { register } from '../AppDispatcher';
import { createStore } from '../utils/StoreUtils';

var _projects = [];

var resetProjects = function (projects) {
  _projects = projects;
};

var addProject = function (project) {
  _projects.push(project);
};

const ProjectStore = createStore({
  all() {
    return _projects.slice();
  },

  find(id) {
    return _projects.filter(function (p) { return p.id === id; } )[0];
  }
});

ProjectStore.dispatcherToken = register(function (payload) {
  switch (payload.actionType) {
    case ProjectConstants.PROJECTS_RECEIVED:
      resetProjects(payload.projects);
      ProjectStore.emit(CHANGE_EVENT);
      break;
    case ProjectConstants.NEW_PROJECT_RECEIVED:
      addProject(payload.project);
      ProjectStore.emit(CHANGE_EVENT);
      break;
  }
});

export default ProjectStore;

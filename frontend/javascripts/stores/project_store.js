import { register } from '../AppDispatcher';
import { createStore } from '../utils/StoreUtils';
import ProjectConstants from '../constants/project_constants';
import selectn from 'selectn';

var _projects = [];

const ProjectStore = createStore({
  all() {
    return _projects.slice();
  },

  find(id) {
    return _projects.filter(function (p) { return p.id === id; } )[0];
  }
});

ProjectStore.dispatcherToken = register(payload => {
  switch (payload.type.actionType) {
    case ProjectConstants.PROJECTS_RECEIVED:
      _projects = payload.type.projects;
      ProjectStore.emitChange();
      break;
    case ProjectConstants.NEW_PROJECT_RECEIVED:
      _projects.push(payload.type.project);
      ProjectStore.emitChange();
      break;
    case ProjectConstants.NEW_PROJECT_RECEIVED:
      const project = payload.type.project;
      _projects = _projects.filter(function (p) { return p.id !== project.id; });
      _projects.push(project);
      ProjectStore.emitChange();
      break;
  }
});

export default ProjectStore;

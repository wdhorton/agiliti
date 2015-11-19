(function(root){
  var _projects = [];

  var resetProjects = function (projects) {
    _projects = projects;
  };

  var addProject = function (project) {
    _projects.push(project);
  };

  var CHANGE_EVENT = "change";

  root.ProjectStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _projects.slice();
    },

    find: function (id) {
      return _projects.filter(function (p) { return p.id === id; } )[0];
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
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
    })

  });

})(this);

(function(root){
  var _stories = [];

  var resetStories = function (stories) {
    _stories = stories;
  };

  var addStory = function (story) {
    _stories.push(story);
  };

  var updateStory = function (story) {
    _stories = _stories.filter(function (s) { return s.id !== story.id; });
    addStory(story);
  };

  var CHANGE_EVENT = "change";

  root.StoryStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _stories.slice();
    },

    find: function (id) {
      return _stories.filter(function (s) { return s.id === id; } )[0];
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case StoryConstants.STORIES_RECEIVED:
          resetStories(payload.stories);
          StoryStore.emit(CHANGE_EVENT);
          break;
        case StoryConstants.NEW_STORY_RECEIVED:
          addStory(payload.story);
          StoryStore.emit(CHANGE_EVENT);
          break;
        case StoryConstants.UPDATED_STORY_RECEIVED:
          updateStory(payload.story);
          StoryStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

})(this);

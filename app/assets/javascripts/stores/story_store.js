import { register } from '../AppDispatcher';
import { createStore } from '../utils/StoreUtils';
import StoryConstants from '../constants/story_constants';

var _stories = [];

const StoryStore = createStore({
  all() {
    return _stories.slice();
  },

  find: function (id) {
    return _stories.filter(function (s) { return s.id === id; } )[0];
  },

  current: function () {
    return _stories.filter(story => {
      return ["started", "finished", "delivered", "rejected"].indexOf(story.current_state) !== -1;
    });
  },

  backlog: function () {
    return _stories.filter(story => {
      return story.current_state === "unstarted";
    });
  },

  icebox: function () {
    return _stories.filter(story => {
      return story.current_state === "unscheduled";
    });
  }
});

StoryStore.dispatcherToken = register(function (payload) {
  window.payload = payload;
  switch (payload.type.actionType) {
    case StoryConstants.STORIES_RECEIVED:
      _stories = payload.type.stories;
      StoryStore.emitChange();
      break;
    case StoryConstants.NEW_STORY_RECEIVED:
      _stories.push(payload.type.story);
      StoryStore.emitChange();
      break;
    case StoryConstants.UPDATED_STORY_RECEIVED:
      _stories = _stories.filter(function (s) { return s.id !== payload.type.story.id; });
      _stories.push(payload.type.story);
      StoryStore.emitChange();
      break;
  }
});

export default StoryStore;

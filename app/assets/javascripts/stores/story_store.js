import { register } from '../AppDispatcher';
import { createStore } from '../utils/StoreUtils';
import StoryConstants from '../constants/story_constants';

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

const StoryStore = createStore({
  all() {
    return _stories.slice();
  },

  find: function (id) {
    return _stories.filter(function (s) { return s.id === id; } )[0];
  }
});

StoryStore.dispatcherToken = register(function (payload) {
  switch (payload.type.actionType) {
    case StoryConstants.STORIES_RECEIVED:
      resetStories(payload.type.stories);
      StoryStore.emitChange();
      break;
    case StoryConstants.NEW_STORY_RECEIVED:
      addStory(payload.type.story);
      StoryStore.emitChange();
      break;
    case StoryConstants.UPDATED_STORY_RECEIVED:
      updateStory(payload.type.story);
      StoryStore.emitChange();
      break;
  }
});

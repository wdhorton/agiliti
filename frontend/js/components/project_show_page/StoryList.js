import React from 'react';

import StoryForm from './StoryForm';
import StoryItem from './StoryItem';


export default React.createClass({
  getInitialState: function () {
    return { editingId: -1, creatingStory: true };
  },

  editStory: function (e) {
    this.setState({ editingId: parseInt(e.currentTarget.dataset.storyid) });
  },

  hideStoryForm: function (e) {
    e.preventDefault();
    this.setState({ editingId: -1, creatingStory: false });
  },

  render: function () {
    var createStory;

    if (this.props.showCreateStory && this.state.creatingStory) {
      createStory = <StoryForm projectId={this.props.projectId} hideStoryForm={this.hideStoryForm} />;
    }


    return (
      <ul>
        { createStory }
        {
          this.props.stories.map(function (story) {
            if (story.id === this.state.editingId) {
              return <StoryForm projectId={this.props.projectId} hideStoryForm={this.hideStoryForm} story={story} />;
            } else {
              return <StoryItem editStory={this.editStory} story={story} />;
            }
          }.bind(this))
        }
      </ul>
    );
  }
});

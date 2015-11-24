window.StoryList = React.createClass({
  getInitialState: function () {
    return { editingId: -1 };
  },

  editStory: function (e) {
    this.setState({ editingId: parseInt(e.currentTarget.dataset.storyid) });
  },

  render: function () {
    return (
      <ul>
        {
          this.props.stories.map(function (story) {
            if (story.id === this.state.editingId) {
              return <StoryForm story={story} />;
            } else {
              return <StoryItem editStory={this.editStory} story={story} />;
            }
          }.bind(this))
        }
      </ul>
    );
  }
});

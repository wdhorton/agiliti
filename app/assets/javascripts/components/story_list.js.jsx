window.StoryList = React.createClass({
  getInitialState: function () {
    return { stories: StoryStore.all() };
  },

  componentDidMount: function () {
    StoryStore.addChangeListener(this.updateStories);
    ApiUtil.fetchStories();
  },

  componentWillUnmount: function () {
    StoryStore.removeChangeListener(this.updateStories);
  },

  updateStories: function () {
    this.setState({ stories: StoryStore.all() });
  },

  render: function () {
    return (
      <ul>
        {
          this.state.stories.map(function (story) {
            <StoryItem story={story} />;
          })
        }
      </ul>
    );
  }
});

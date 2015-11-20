window.StoryList = React.createClass({
  render: function () {
    return (
      <ul>
        {
          this.props.stories.map(function (story) {
            <StoryItem story={story} />;
          })
        }
      </ul>
    );
  }
});

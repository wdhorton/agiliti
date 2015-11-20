window.StoryList = React.createClass({
  render: function () {
    return (
      <ul>
        {
          this.props.stories.map(function (story) {
            return <StoryItem story={story} />;
          })
        }
      </ul>
    );
  }
});

window.Current = React.createClass({
  currentStories: function () {
    return this.props.stories.filter(function (story) {
      var currentStates = ["started", "finished", "delivered", "rejected"];
      return currentStates.indexOf(story.current_state) !== -1;
    }.bind(this));
  },

  acceptedStories: function () {
    return this.props.stories.filter(function (story) {
      return story.current_state === "accepted";
    }.bind(this));
  },

  render: function () {

    return (
      <div className="panel current">
        <div className="panel-container">
          <PanelHeader title="Current" />
          <section className="item-container">
            <section className="items-container">
              <div className="panel-content">
                <CurrentIterationHeader />
                <StoryList stories={this.currentStories()} />
              </div>
            </section>
          </section>
        </div>
      </div>
    );
  }
});

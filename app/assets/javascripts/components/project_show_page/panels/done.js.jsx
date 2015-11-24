window.Done = React.createClass({
  acceptedStories: function () {
    return this.props.stories.filter(function (story) {
      return story.current_state === "accepted";
    }.bind(this));
  },

  render: function () {
    return (
      <div className="panel done">
        <div className="panel-container">
          <PanelHeader title="Done" />
          <section className="item-container">
            <section className="items-container">
              <div className="panel-content">
                <StoryList projectId={this.props.projectId} stories={this.acceptedStories()} />
              </div>
            </section>
          </section>
        </div>
      </div>
    );
  }
});

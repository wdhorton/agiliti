window.Backlog = React.createClass({
  unstartedStories: function () {
    return this.props.stories.filter(function (story) {
      return story.current_state === "unstarted";
    }.bind(this));
  },

  render: function () {

    return (
      <div className="panel backlog">
        <div className="panel-container">
          <PanelHeader title="Backlog" />
          <section className="item-container">
            <section className="items-container">
              <div className="panel-content">
                <StoryList projectId={this.props.projectId} stories={this.unstartedStories()} />
              </div>
            </section>
          </section>
        </div>
      </div>
    );
  }
});

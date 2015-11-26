(function (root) {
  root.Icebox = React.createClass({
    getInitialState: function () {
      return { showCreateStoryForm: false };
    },

    hideCreateStoryForm: function (e) {
      e.preventDefault();
      this.setState({ showCreateStoryForm: false });
    },

    unscheduledStories: function () {
      return this.props.stories.filter(function (story) {
        return story.current_state === "unscheduled";
      }.bind(this));
    },

    render: function () {
      var createStory;

      if (this.state.showCreateStoryForm) {
        createStory = (
          <StoryForm
            hideStoryForm={this.hideCreateStoryForm}
            projectId={this.props.projectId} />
        );
      }

      return (
        <div className="panel icebox">
          <div className="panel-container">

            <PanelHeader title="Icebox" />

            <section className="item-container">
              <section className="items-container">
                <div className="panel-content">
                  { createStory }
                  <StoryList projectId={this.props.projectId} stories={this.unscheduledStories()} />
                </div>
              </section>
            </section>

          </div>
        </div>
      );
    }
  });

})(this);

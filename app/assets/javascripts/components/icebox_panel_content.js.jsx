window.IceboxPanelContent = React.createClass({
  getInitialState: function () {
    return { showCreateStoryForm: true };
  },

  hideCreateStoryForm: function (e) {
    e.preventDefault();
    this.setState({ showCreateStoryForm: false });
  },

  render: function () {
    var createStory;

    if (this.state.showCreateStoryForm) {
      createStory = (
        <CreateStoryForm
          hideCreateStoryForm={this.hideCreateStoryForm}
          projectId={this.props.projectId} />
      );
    }

    return (
      <section className="items-container">
        <div className="panel-content">
          {createStory}
        </div>
      </section>
    );
  }
});

window.ProjectShowPage = React.createClass({
  getInitialState: function () {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    var id = parseInt(this.props.params.id);
    return { project: ProjectStore.find(id), stories: StoryStore.all(), showCreateStoryForm: false };
  },

  componentDidMount: function () {
    StoryStore.addChangeListener(this.updateStories);
    ApiUtil.fetchStories(parseInt(this.props.params.id));
  },

  componentWillUnmount: function () {
    StoryStore.removeChangeListener(this.updateStories);
  },

  updateStories: function () {
    this.setState({ stories: StoryStore.all() });
  },

  createStory: function () {
    this.setState({ showCreateStoryForm: true });
  },

  render: function () {

    var createStoryForm;

    if (this.state.showCreateStoryForm) {
      createStoryForm = <IceboxPanel projectId={this.state.project.id} />;
    }

    return (
      <div>
        <ProjectShowHeader title={this.state.project.name} />
        <section className="project main">
          <Sidebar createStory={this.createStory} />
          <article className="main">
            <section className="panels">
              <CurrentPanel stories={this.state.stories} />
              {createStoryForm}
            </section>
          </article>
        </section>
      </div>
    );
  }
});

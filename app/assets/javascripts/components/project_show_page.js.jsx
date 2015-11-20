window.ProjectShowPage = React.createClass({
  getInitialState: function () {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    var id = parseInt(this.props.params.id);
    return { project: ProjectStore.find(id), stories: StoryStore.all() };
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

  render: function () {
    return (
      <div>
        <ProjectShowHeader title={this.state.project.name} />
        <section className="project main">
          <Sidebar />
          <article className="main">
            <section className="panels">
              <CurrentPanel stories={this.state.stories} />
            </section>
          </article>
        </section>
      </div>
    );
  }
});

window.ProjectList = React.createClass({
  getInitialState: function () {
    return { projects: ProjectStore.all() };
  },

  componentDidMount: function () {
    ProjectStore.addChangeListener(this.updateProjects);
    ApiUtil.fetchProjects();
  },

  updateProjects: function () {
    this.setState({ projects: ProjectStore.all() });
  },

  render: function () {
    return (
      <ul>
        {
          this.state.projects.map(function (project) {
            return <ProjectListItem project={project} />;
          })
        }
      </ul>
    );
  }
});

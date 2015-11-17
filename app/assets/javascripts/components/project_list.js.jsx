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
      <div className="projects-list">
        <h2>
          <a href='#' className='create-new-project-button'>
            Create Project
          </a>
          <span>Projects</span>
          <a href='#'>Show all</a>
        </h2>
        <ul>
          {
            this.state.projects.map(function (project) {
              return <ProjectBox project={project} />;
            })
          }
        </ul>
      </div>
    );
  }
});

window.ProjectList = React.createClass({
  getInitialState: function () {
    return { projects: ProjectStore.all() };
  },

  componentDidMount: function () {
    ProjectStore.addChangeListener(this.updateProjects);
    ApiUtil.fetchProjects();
  },

  componentWillUnmount: function () {
    ProjectStore.removeChangeListener(this.updateProjects);
  },

  updateProjects: function () {
    this.setState({ projects: ProjectStore.all() });
  },

  handleClick: function (e) {
    e.preventDefault();
    this.props.showProjectModal();
  },

  render: function () {
    return (
      <div className="projects-list">
        <h2>
          <a href='#'
             onClick={this.handleClick}
             className='create-new-project-button'>
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

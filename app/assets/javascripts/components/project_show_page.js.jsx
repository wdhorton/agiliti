window.ProjectShowPage = React.createClass({
  getInitialState: function () {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    var id = parseInt(this.props.params.id);
    return { project: ProjectStore.find(id) };
  },

  render: function () {
    return (
      <div>
        <ProjectShowHeader title={this.state.project.name} />
        <section className="project main">
          <Sidebar />
          <article className="main">
            <section className="panels">
              <CurrentPanel />
            </section>
          </article>
        </section>
      </div>
    );
  }
});

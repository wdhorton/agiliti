window.ProjectShowPage = React.createClass({
  render: function () {
    return (
      <div>
        <ProjectShowHeader />
        <section className="project main">
          <Sidebar />
          <CurrentPanel />
        </section>
      </div>
    );
  }
});

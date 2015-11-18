window.ProjectShowPage = React.createClass({
  render: function () {
    return (
      <div>
        <ProjectShowHeader />
        <section className="project main">
          <Sidebar />
        </section>
      </div>
    );
  }
});

window.ProjectShowPage = React.createClass({
  render: function () {
    return (
      <div>
        <ProjectShowHeader />
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

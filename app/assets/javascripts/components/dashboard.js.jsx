window.Dashboard = React.createClass({
  render: function() {
    return (
      <div className="dashboard-main">
        <Header />
        <div className="content group">
          <div className="dashboard-page">
            <div className="column">
              <ProjectList />
            </div>
            <div className="column">
            </div>
          </div>
        </div>
      </div>
    );
  }
});

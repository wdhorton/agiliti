window.Dashboard = React.createClass({
  render: function() {
    return (
      <div className="dashboard-main">
        <Header />
        <div className="content">
          <ProjectList />
        </div>  
      </div>
    );
  }
});

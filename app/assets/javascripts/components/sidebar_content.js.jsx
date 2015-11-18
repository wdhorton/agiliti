window.SidebarContent = React.createClass({
  render: function () {
    return (
      <section className="sidebar-content">
        <ul className="settings-area">
          <li className="actions">
            <nav>
              <a className="velocity"></a>
              <a className="members"></a>
              <div className="float-right">
                <span className="story-density"></span>
                <span className="project-color"></span>
                <span className="settings"></span>
              </div>
            </nav>
          </li>
          <li>
            <a className="add-story">
              <span>Add Story</span>
            </a>
          </li>
        </ul>
        <form className="panels">
          <ul>
            <li className="my-work"></li>
            <li className="current"></li>
            <li className="backlog"></li>
            <li className="icebox"></li>
            <li className="done"></li>
            <li className="epics"></li>
            <li className="labels"></li>
            <li className="charts"></li>
            <li className="project-history"></li>
          </ul>
        </form>
      </section>
    );
  }
});

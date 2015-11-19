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
            <li className="my-work">
              <label>
                <span className="panel-name">my work</span>
              </label>
            </li>
            <li className="current">
              <label>
                <span className="panel-name">current</span>
              </label>
            </li>
            <li className="backlog">
              <label>
                <span className="panel-name">backlog</span>
              </label>
            </li>
            <li className="icebox">
              <label>
                <span className="panel-name">icebox</span>
              </label>
            </li>
            <li className="done">
              <label>
                <span className="panel-name">done</span>
              </label>
            </li>
            <li className="epics">
              <label>
                <span className="panel-name">epics</span>
              </label>
            </li>
            <li className="labels">
              <label>
                <span className="panel-name">labels</span>
              </label>
            </li>
            <li className="charts">
              <label>
                <span className="panel-name">charts</span>
              </label>
            </li>
            <li className="project-history">
              <label>
                <span className="panel-name">project history</span>
              </label>
            </li>
          </ul>
        </form>
      </section>
    );
  }
});

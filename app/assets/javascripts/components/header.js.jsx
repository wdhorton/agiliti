window.Header = React.createClass({
  getInitialState: function () {
    return { showProjectsMenu: false }; 
  },

  showProjectsMenu: function () {
    this.setState({ showProjectsMenu: true });
  },

  hideProjectsMenu: function () {
    this.setState({ showProjectsMenu: false });
  },

  render: function () {
    var projects_menu;

    if (this.state.showProjectsMenu) {
      projects_menu = (
        <div>
          <div onClick={this.hideProjectsMenu} className="screen" />
          <ProjectsMenu />;
        </div>
      );
    }
    return (
      <header className="header group">
        <ul>
          <li className="header-logo-link">
            <a href='#/' />
          </li>
          <li>
            <a className="dropdown-menu" onClick={this.showProjectsMenu}>
              <div className="dropdown-menu-text">Agiliti</div>
            </a>
            {projects_menu}
          </li>
          <li className="header-float-right">
            <div className="dropdown">
              <a className="dropdown-name" href='#'>help & updates</a>
            </div>
            <div className="dropdown">
              <a className="dropdown-name"href='#'>williamhorton</a>
            </div>
          </li>
        </ul>
      </header>
    );
  }
});

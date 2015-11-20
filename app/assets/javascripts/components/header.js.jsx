window.Header = React.createClass({
  getInitialState: function () {
    return { showProjectsMenu: false, showProfileDropdown: false };
  },

  showProjectsMenu: function () {
    this.setState({ showProjectsMenu: true });
  },

  hideProjectsMenu: function () {
    this.setState({ showProjectsMenu: false });
  },

  showProfileDropdown: function () {
    this.setState({ showProfileDropdown: true });
  },

  hideProfileDropdown: function () {
    this.setState({ showProfileDropdown: false });
  },

  render: function () {
    var projects_menu;

    if (this.state.showProjectsMenu) {
      projects_menu = (
        <div>
          <div onClick={this.hideProjectsMenu} className="screen" />
          <ProjectsMenu />
        </div>
      );
    }

    var profileDropdown;

    if (this.state.showProfileDropdown) {
      profileDropdown = (
        <div>
          <div onClick={this.hideProfileDropdown} className="screen" />
          <ProfileDropdown />
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
              <a
                className="dropdown-name"
                onClick={this.showProfileDropdown}>
                williamhorton
              </a>
              {profileDropdown}
            </div>
          </li>
        </ul>
      </header>
    );
  }
});

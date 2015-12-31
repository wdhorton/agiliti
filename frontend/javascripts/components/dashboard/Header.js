import React from 'react';
import { Link } from 'react-router';
import CurrentUserStore from '../../stores/current_user_store';
import ProjectsMenu from './ProjectsMenu';
import ProfileDropdown from './ProfileDropdown';

import "../../../stylesheets/header.scss";

export default React.createClass({
  getInitialState: function () {
    return { showProjectsMenu: false, showProfileDropdown: false };
  },

  componentDidMount: function () {
    CurrentUserStore.addChangeListener(this.updateUsername);
  },

  componentWillUnmount: function () {
    CurrentUserStore.removeChangeListener(this.updateUsername);
  },

  updateUsername: function () {
    this.forceUpdate();
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
            <Link to="/" />
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
                { CurrentUserStore.currentUser().username }
              </a>
              {profileDropdown}
            </div>
          </li>
        </ul>
      </header>
    );
  }
});

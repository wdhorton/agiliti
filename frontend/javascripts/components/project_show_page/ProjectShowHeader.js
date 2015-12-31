import React from 'react';
import { Link } from 'react-router';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import ProjectsMenu from '../dashboard/ProjectsMenu';
import "../../../stylesheets/project_show_header.scss";

export default React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return { showProjectsMenu: false, searchText: "" };
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
            <Link to="/" />
          </li>
          <li>
            <a className="dropdown-menu" onClick={this.showProjectsMenu}>
              <div className="dropdown-menu-text project-name">{this.props.title}</div>
            </a>
            {projects_menu}
          </li>
          <li className="header-float-right">
            <div className="notifications">
              <a className="bell"></a>
            </div>
            <div className="search-bar-container">
              <form className="search-bar">
                <a className="magnify"></a>
                <input type="text" placeholder="Search Project" valueLink={this.linkState("searchText")} />
                <a className="search-help"></a>
              </form>
            </div>
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

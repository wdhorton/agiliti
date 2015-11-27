import React from 'react';
import ProjectsMenuList from './ProjectsMenuList';

export default React.createClass({
  render: function() {
    return (
      <div className="projects-menu-list-group">
        <header className="menu-header">Projects</header>
        <ProjectsMenuList />
      </div>
    );
  }
});

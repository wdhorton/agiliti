import React from 'react';
import ProjectsMenuListGroup from './ProjectsMenuListGroup';
import "../../../stylesheets/project_menu.scss";

export default React.createClass({
  render: function() {
    return (
      <div className="projects-menu">
        <ProjectsMenuListGroup />
      </div>
    );
  }
});

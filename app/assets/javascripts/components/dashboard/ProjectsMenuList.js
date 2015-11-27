import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <ul className="projects-menu-list">
        <li>
          <a className="top" href="#">Create Project</a>
        </li>
        <li>
          <a>
            <span className="project-name">My Sample Project</span>
          </a>
        </li>
        <li>
          <a href="#">Show All Projects</a>
        </li>
      </ul>
    );
  }
});

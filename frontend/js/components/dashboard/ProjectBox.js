import React from "react";
import { Link } from "react-router";

export default React.createClass({
  render: function () {
    return (
      <li key={this.props.project.id} className="project-box">
        <div className="project-info-bar">
          <Link className="project-title" to={'/projects/' + this.props.project.id}>{this.props.project.name}</Link>
        </div>
        <div className="velocity-box"></div>
      </li>
    );
  }
});

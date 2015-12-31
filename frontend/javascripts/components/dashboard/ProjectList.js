import React from 'react';
import ProjectStore from '../../stores/project_store';
import ApiUtil from '../../utils/api_util';
import ProjectBox from './ProjectBox';

import "../../../stylesheets/project_list.scss";

export default React.createClass({
  getInitialState: function () {
    return { projects: ProjectStore.all() };
  },

  componentDidMount: function () {
    ProjectStore.addChangeListener(this.updateProjects);
    ApiUtil.fetchProjects();
  },

  componentWillUnmount: function () {
    ProjectStore.removeChangeListener(this.updateProjects);
  },

  updateProjects: function () {
    this.setState({ projects: ProjectStore.all() });
  },

  handleClick: function (e) {
    e.preventDefault();
    this.props.showProjectModal();
  },

  render: function () {

    var list;

    if (this.state.projects.length > 0) {
      list = (
        <ul>
          {
            this.state.projects.map(function (project) {
              return <ProjectBox key={project.id} project={project} />;
            })
          }
        </ul>
      );
    } else {
      list = (
        <div className="no-resources-box">
          <p>
            You have no active projects.<br/>
            Why not <a onClick={this.handleClick}>create one</a>?
          </p>
        </div>
      );
    }



    return (
      <div className="projects-list">
        <h2>
          <a href='#'
             onClick={this.handleClick}
             className='create-new-project-button'>
            Create Project
          </a>
          <span>Projects</span>
          <a href='#'>Show all</a>
        </h2>
        { list }
      </div>
    );
  }
});

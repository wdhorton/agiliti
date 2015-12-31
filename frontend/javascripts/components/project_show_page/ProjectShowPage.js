import React from 'react';
import $ from 'jquery';

import PanelsContainer from './PanelsContainer';
import ProjectShowHeader from './ProjectShowHeader';
import Sidebar from './Sidebar';
import ProjectStore from '../../stores/project_store';
import StoryStore from '../../stores/story_store';
import ApiUtil from '../../utils/api_util';
import "../../../stylesheets/project_show_page.scss";

export default React.createClass({
  getInitialState: function () {
    return $.extend({}, this.getStateFromStore(), {
      showMyWork: false,
      showCurrent: true,
      showBacklog: true,
      showIcebox: true,
      showDone: false,
      showEpics: false,
      showLabels: false,
      showCharts: false,
      showProjectHistory: false
    });
  },

  panels: [],

  getStateFromStore: function () {
    const id = parseInt(this.props.params.id);
    return { project: ProjectStore.find(id), stories: StoryStore.all()};
  },

  componentDidMount: function () {
    const id = parseInt(this.props.params.id);
    ApiUtil.fetchSingleProject(id);
    ApiUtil.fetchStories(id);
    ProjectStore.addChangeListener(this.updateProject);
    StoryStore.addChangeListener(this.updateProject);
  },

  updateProject: function () {
    this.setState(this.getStateFromStore());
  },

  createStory: function () {
    this.setState({ showCreateStory: true });
  },

  togglePanel: function (e) {
    panel = e.currentTarget.dataset.panel;
    newState = {};
    newState[panel] = !this.state[panel];
    this.setState(newState);
  },

  activePanels: function () {
    return this.panels.filter(function (panel) {
      var stateString = "show" + panel.displayName;
      return this.state[stateString];
    }.bind(this));
  },

  render: function () {
    const { stories, project, showCreateStory } = this.state;

    const name = project ? project.name : "";

    return (
      <div>
        <ProjectShowHeader title={name} />
        <section className="project main">
          <Sidebar createStory={this.createStory} togglePanel={this.togglePanel} activePanels={this.activePanels()} />
          <article className="main">
            <PanelsContainer showCreateStory={showCreateStory} projectId={this.props.params.id} />
          </article>
        </section>
      </div>
    );
  }
});

import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <section className="sidebar-content">
        <ul className="settings-area">
          <li className="actions group">
            <nav>
              <a className="velocity">
                <span>8</span>
              </a>
              <a className="members">
                <span>1</span>
              </a>
              <div className="float-right">
                <span className="story-density">
                  <a className="anchor"></a>
                </span>
                <span className="project-color">
                  <a className="anchor"></a>
                </span>
                <span className="settings">
                  <a className="anchor"></a>
                </span>
              </div>
            </nav>
          </li>
          <li>
            <a className="add-story" onClick={this.props.createStory}>
              <span>Add Story</span>
            </a>
          </li>
        </ul>

        <form className="panels">
          <ul>
            <li data-panel="showMyWork" onClick={this.props.togglePanel} className={ "my-work" + (this.props.activePanels.indexOf("") === -1 ? "" : " active" ) }>
              <label>
                <span className="panel-name">my work</span>
              </label>
            </li>
            <li data-panel="showCurrent" onClick={this.props.togglePanel} className={ "current" + (this.props.activePanels.indexOf("") === -1 ? "" : " active" ) }>
              <label>
                <span className="panel-name">current</span>
              </label>
            </li>
            <li data-panel="showBacklog" onClick={this.props.togglePanel} className={ "backlog" + (this.props.activePanels.indexOf("") === -1 ? "" : " active" ) }>
              <label>
                <span className="panel-name">backlog</span>
              </label>
            </li>
            <li data-panel="showIcebox" onClick={this.props.togglePanel} className={ "icebox" + (this.props.activePanels.indexOf("") === -1 ? "" : " active" ) }>
              <label>
                <span className="panel-name">icebox</span>
              </label>
            </li>
            <li data-panel="showDone" onClick={this.props.togglePanel} className={ "done" + (this.props.activePanels.indexOf("") === -1 ? "" : " active" ) }>
              <label>
                <span className="panel-name">done</span>
              </label>
            </li>
            <li data-panel="showEpics" onClick={this.props.togglePanel} className={ "epics" + (this.props.activePanels.indexOf("") === -1 ? "" : " active" ) }>
              <label>
                <span className="panel-name">epics</span>
              </label>
            </li>
            <li data-panel="showLabels" onClick={this.props.togglePanel} className={ "labels" + (this.props.activePanels.indexOf("") === -1 ? "" : " active" ) }>
              <label>
                <span className="panel-name">labels</span>
              </label>
            </li>
            <li data-panel="showCharts" onClick={this.props.togglePanel} className={ "charts" + (this.props.activePanels.indexOf("") === -1 ? "" : " active" ) }>
              <label>
                <span className="panel-name">charts</span>
              </label>
            </li>
            <li data-panel="showProjectHistory" onClick={this.props.togglePanel} className={ "project-history" + (this.props.activePanels.indexOf("") === -1 ? "" : " active" ) }>
              <label>
                <span className="panel-name">project history</span>
              </label>
            </li>
          </ul>
        </form>
      </section>
    );
  }
});

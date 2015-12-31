import React from 'react';
import Header from './Header';
import ProjectList from './ProjectList';
import Footer from './Footer';
import CreateProjectForm from './CreateProjectForm';

import "../../../stylesheets/dashboard.scss";

export default React.createClass({
  getInitialState: function () {
    return { showProjectModal: false };
  },

  showProjectModal: function () {
    this.setState({ showProjectModal: true });
  },

  hideProjectModal: function () {
    this.setState({ showProjectModal: false });
  },

  render: function() {
    var modal;
    if (this.state.showProjectModal) {
      modal = (
        <div>
          <div className="modal-screen" onClick={this.hideProjectModal}></div>
          <div className="modal-wrapper">
            <header>
              <h1>Create new Project</h1>
            </header>
            <div className="modal-content">
              <CreateProjectForm hide={this.hideProjectModal}/>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="dashboard">
        <div className="dashboard-main">
          {modal}
          <Header />

          <div className="content group">
            <div className="dashboard-page">
              <div className="column">
                <ProjectList showProjectModal={this.showProjectModal} />
              </div>
              <div className="column">
              </div>
            </div>
          </div>

          <div className="push"></div>
        </div>
        <Footer />
      </div>
    );
  }
});

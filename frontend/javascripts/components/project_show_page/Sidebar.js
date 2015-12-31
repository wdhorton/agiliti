import React from 'react';
import SidebarHeader from './SidebarHeader';
import SidebarContent from './SidebarContent';
import SidebarFooter from './SidebarFooter';
import "../../../stylesheets/sidebar.scss";

export default React.createClass({
  render: function () {
    return (
      <div className="sidebar-wrapper">
        <SidebarHeader />
        <SidebarContent togglePanel={this.props.togglePanel} createStory={this.props.createStory} activePanels={this.props.activePanels} />
        <SidebarFooter />
      </div>
    );
  }
});

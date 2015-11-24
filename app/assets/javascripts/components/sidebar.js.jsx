window.Sidebar = React.createClass({
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

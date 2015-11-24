window.Sidebar = React.createClass({
  render: function () {
    return (
      <div className="sidebar-wrapper">
        <SidebarHeader />
        <SidebarContent togglePanel={this.props.togglePanel} createStory={this.props.createStory} />
        <SidebarFooter />
      </div>
    );
  }
});

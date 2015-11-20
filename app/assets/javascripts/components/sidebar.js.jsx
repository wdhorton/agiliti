window.Sidebar = React.createClass({
  render: function () {
    return (
      <div className="sidebar-wrapper">
        <SidebarHeader />
        <SidebarContent createStory={this.props.createStory} />
        <SidebarFooter />
      </div>
    );
  }
});

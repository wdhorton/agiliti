window.Sidebar = React.createClass({
  render: function () {
    return (
      <div className="sidebar-wrapper">
        <SidebarHeader />
        <SidebarContent />
        <SidebarFooter />
      </div>
    );
  }
});

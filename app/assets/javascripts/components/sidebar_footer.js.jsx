window.SidebarFooter = React.createClass({
  render: function () {
    return (
      <footer className="sidebar-footer">
        <a className="width-mode" title="Panel Width: Auto">auto</a>
        <a className="fit-all" title="Fit Panels to Browser">fit all</a>
        <form>
          <a className="narrow"></a>
          <a className="wide"></a>
          <div className="slider"></div>
        </form>
      </footer>
    );
  }
});

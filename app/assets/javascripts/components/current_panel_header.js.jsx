window.CurrentPanelHeader = React.createClass({
  render: function () {
    return (
      <header className="panel-header panel-controls">
        <a className="close"></a>
        <nav className="controls">
          <a className="add-story"></a>
        </nav>
        <h3>current</h3>
        <a className="velocity"></a>
      </header>
    );
  }
});
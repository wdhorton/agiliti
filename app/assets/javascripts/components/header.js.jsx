window.Header = React.createClass({
  render: function() {
    return (
      <header className="header group">
        <ul>
          <li className="header-logo-link">
            <a href='#' />
          </li>
          <li>
            <a className="dropdown-menu">
              <div className="dropdown-menu-text">Agiliti</div>
            </a>
          </li>
          <li className="header-float-right">
            <div className="dropdown-name">
              <a href='#'>help & updates</a>
            </div>
            <div className="dropdown-name">
              <a href='#'>williamhorton</a>
            </div>
          </li>
        </ul>
      </header>
    );
  }
});

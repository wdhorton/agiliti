window.SignUpHeader = React.createClass({
  render: function () {
    return (
      <div className="sign-in-header-container">
        <div className="sign-in-header-outside">
          <a href="/">
            <div className="sign-in-header-logo"></div>
          </a>
          <div className="toggle-sign-in-sign-up">
            <span>ALREADY HAVE AN ACCOUNT? </span>
            <a href="#/signin" className="toggle-sign-in-sign-up-link">SIGN IN</a>
          </div>
        </div>
      </div>
    );
  }
});

window.SignInContent = React.createClass({
  render: function () {
    return (
      <div className="sign-in-content">
        <h1>Let's get to work!</h1>
        <div className="sign-in-form">
          <SignInForm />

          <div className="sign-in-or-spacer">or</div>

          <a href="/auth/google_oauth2" className="google-oauth-link">
            <div className="google-plus-button">
              <div className="google-plus-icon"></div>
            </div>
            <span className="google-oauth-message">Sign In with Google</span>
          </a>
        </div>
      </div>
    );
  }
});

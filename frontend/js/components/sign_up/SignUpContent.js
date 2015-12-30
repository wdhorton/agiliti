import React from 'react';
import SignUpForm from './SignUpForm';

export default React.createClass({
  render: function () {
    return (
      <div className="sign-in-content">
        <h1>Get started!</h1>
        <div className="sign-in-form">
          <SignUpForm />

          <div className="sign-in-or-spacer">or</div>

          <a href="#" className="google-oauth-link">
            <div className="google-plus-button">
              <div className="google-plus-icon"></div>
            </div>
            <span className="google-oauth-message">Sign Up with Google</span>
          </a>
        </div>
      </div>
    );
  }
});

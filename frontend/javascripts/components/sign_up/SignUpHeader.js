import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function () {
    return (
      <div className="sign-in-header-container">
        <div className="sign-in-header-outside">
          <a href="/">
            <div className="sign-in-header-logo"></div>
          </a>
          <div className="toggle-sign-in-sign-up">
            <span>ALREADY HAVE AN ACCOUNT? </span>
            <Link to="/signin" className="toggle-sign-in-sign-up-link">SIGN IN</Link>
          </div>
        </div>
      </div>
    );
  }
});

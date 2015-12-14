import React from 'react';
import { History } from 'react-router';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import SessionsApiUtil from '../../utils/sessions_api_util';

export default React.createClass({
  getInitialState: function () {
    return { username_or_email: "", password: "", remember: false };
  },

  mixins: [History, LinkedStateMixin],

  submit: function (e) {
    e.preventDefault();

    SessionsApiUtil.signin(this.state, function() {
      this.history.pushState(null, "/dashboard");
    }.bind(this));
  },

  setDemoUser: function (e) {
    if (e.target.checked) {
      this.setState({ username_or_email: "demo_user@example.com", password: "password"});
    } else {
      this.setState({ username_or_email: "", password: "" });
    }
  },

  render: function () {
    return (
      <form onSubmit={ this.submit }>
        <div className="sign-in-text-input">
          <label>
            <span>Username or email</span>
            <input
              type="text"
              autofocus
              maxLength="100"
              tabIndex="1"
              valueLink={this.linkState("username_or_email")} />
          </label>
        </div>

        <div className="sign-in-text-input">
          <label>
            <span>Password</span>
            <input
              type="password"
              autoComplete="off"
              maxLength="100"
              tabIndex="2"
              valueLink={this.linkState("password")} />
          </label>
        </div>

        <div className="form-footer">
          <input id="remember-checkbox" tabIndex="3" type="checkbox" onChange={this.setDemoUser} />
          <label htmlFor="remember-checkbox" className="remember-me-label">
            Sign in as demo user
          </label>
          <a href="#" tabIndex="5" className="forgot-password">Forgot password?</a>
        </div>

        <button className="sign-in-submit-button">
          <span>SIGN IN</span>
        </button>
      </form>
    );
  }
});

import React from 'react';
import { History } from 'react-router';
import LinkedStateMixin from 'react-addons-linked-state-mixin';


export default React.createClass({
  getInitialState: function () {
    return { name: "", email: "", company: "", password: "" };
  },

  mixins: [History, LinkedStateMixin],

  submit: function (e) {
    e.preventDefault();

    PeopleApiUtil.signup(this.state, function() {
      this.history.pushState(null, "/dashboard");
    }.bind(this));
  },

  render: function () {
    return (
      <form onSubmit={ this.submit }>
        <div className="sign-in-text-input">
          <label>
            <span>Your Name</span>
            <input
              type="text"
              autofocus
              maxLength="100"
              tabIndex="1"
              valueLink={this.linkState("name")} />
          </label>
        </div>

        <div className="sign-in-text-input">
          <label>
            <span>Email</span>
            <input
              type="text"
              maxLength="100"
              tabIndex="2"
              valueLink={this.linkState("email")} />
          </label>
        </div>

        <div className="sign-in-text-input">
          <label>
            <span>Company</span>
            <input
              type="text"
              maxLength="100"
              tabIndex="3"
              valueLink={this.linkState("company")} />
          </label>
        </div>

        <div className="sign-in-text-input">
          <label>
            <span>Password</span>
            <input
              type="password"
              autoComplete="off"
              maxLength="100"
              tabIndex="4"
              valueLink={this.linkState("password")} />
          </label>
        </div>

        <button className="sign-in-submit-button">
          <span>SIGN UP</span>
        </button>
      </form>
    );
  }
});

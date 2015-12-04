import React, { PropTypes, Component } from 'react';
import CurrentUserStore from './stores/current_user_store';
import SessionsApiUtil from './utils/sessions_api_util';
import { History } from 'react-router';

export default React.createClass({
  mixins: [History],

  getInitialState: function () {
    return { currentUser: null };
  },

  componentWillMount: function() {
    CurrentUserStore.addChangeListener(this._ensureSignedIn);
    SessionsApiUtil.fetchCurrentUser();
  },

  _ensureSignedIn: function() {
    if (!CurrentUserStore.isSignedIn()) {
      this.history.pushState(null, "/signin");
    }
  },

  render: function() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
});

import { Router, Route, IndexRoute, History } from 'react-router';
import React from 'react';

window.App = React.createClass({

  mixins: [History],

  getInitialState: function () {
    return { currentUser: null };
  },

  componentWillMount: function () {
    CurrentUserStore.addChangeListener(this._ensureSignedIn);
    SessionsApiUtil.fetchCurrentUser();
  },

  _ensureSignedIn: function () {
    if (!CurrentUserStore.isSignedIn()) {
      this.history.pushState(null, "/signin");
    }
  },

  render: function () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="/signin" component={SignInPage} />
    <Route path="/signup/new" component={SignUpPage} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/projects/:id" component={ProjectShowPage} />
  </Route>
);

$(function () {
  var root = document.getElementById("content");
  React.render(<Router>{routes}</Router>, root);
});

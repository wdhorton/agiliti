import React, { PropTypes, Component } from 'react';
import { Router, Route } from 'react-router';

import App from './App';

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { history } = this.props;
    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Dashboard} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/signup/new" component={SignUpPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/projects/:id" component={ProjectShowPage} />
        </Route>
      </Router>
    )
  }
}

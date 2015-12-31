import React, { PropTypes, Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './App'
import Dashboard from './components/dashboard/Dashboard'
import SignInPage from './components/sign_in/SignInPage'
import SignUpPage from './components/sign_up/SignUpPage'
import ProjectShowPage from './components/project_show_page/ProjectShowPage'
import ProfilePage from './components/profile/ProfilePage'
import '../stylesheets/reset.scss'

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
          <Route path="/profile" component={ProfilePage} />
          <Route path="/projects/:id" component={ProjectShowPage} />
        </Route>
      </Router>
    )
  }
}

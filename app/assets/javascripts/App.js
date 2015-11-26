import React, { PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = { currentUser: null };
  }

  componentWillMount() {
    CurrentUserStore.addChangeListener(this._ensureSignedIn);
    SessionsApiUtil.fetchCurrentUser();
  }

  _ensureSignedIn() {
    if (!CurrentUserStore.isSignedIn()) {
      this.context.history.pushState(null, "/signin");
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

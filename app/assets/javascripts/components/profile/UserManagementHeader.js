import React, { Component } from 'react';
import CurrentUserStore from '../../stores/current_user_store';
import { Link } from 'react-router';

export default class UserManagementHeader extends Component {
  render() {
    return (
      <div className="user-management-header">
        <div className="name">
          { CurrentUserStore.currentUser().name }
        </div>
        <div className="sections">
          <div className="section decorate">
            <Link to="/profile">profile</Link>
          </div>
          <div className="section">
            <Link to="/accounts">accounts</Link>
          </div>
        </div>
      </div>
    );
  }
}

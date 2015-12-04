import React, { Component } from 'react';
import CurrentUserStore from '../../stores/current_user_store';

export default class UserManagementHeader extends Component {
  render() {
    return (
      <div className="user-management-header">
        <div className="name">
          { CurrentUserStore.currentUser().name }
        </div>
      </div>
    );
  }
}

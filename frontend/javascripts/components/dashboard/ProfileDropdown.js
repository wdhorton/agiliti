import React from 'react';
import SessionsApiUtil from '../../utils/sessions_api_util';
import { Link } from 'react-router';
import "../../../stylesheets/profile_dropdown.scss";

export default React.createClass({
  signOut: function () {
    SessionsApiUtil.signout();
  },

  render: function () {
    return (
      <ul className="profile-dropdown">
        <li>
          <Link to="/profile">Profile</Link>
        </li>

        <li>
          <a href="#">Accounts</a>
        </li>

        <li>
          <a href="#">Reports</a>
        </li>

        <li>
          <a href="#" onClick={this.signOut}>Sign Out</a>
        </li>
      </ul>
    );
  }
});

import React, { Component } from 'react';
import Header from '../dashboard/Header';
import Footer from '../dashboard/Footer';
import UserManagementHeader from './UserManagementHeader';
import { currentUser } from '../../stores/current_user_store';

export default class ProfilePage extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-main">
          <Header />

          <UserManagementHeader />
          <div className="content group">
            <div className="profile-page settings">
              <div className="card">
                <div className="header">
                  <h3>My Profile</h3>
                  <div className="actions edit">
                    <a href="#" className="edit-button header-button">Edit</a>
                  </div>
                </div>
                <ul className="rows read">
                  <li>
                    <h4>User name</h4>
                    <div>{ currentUser().username }</div>
                  </li>
                  <li>
                    <h4>Name</h4>
                    <div>{ currentUser().name }</div>
                  </li>
                  <li>
                    <h4>Initials</h4>
                    <div>{ currentUser().initials }</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="push"></div>
        </div>
        <Footer />
      </div>
    );
  }
}

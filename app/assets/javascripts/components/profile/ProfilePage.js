import React, { Component } from 'react';
import Header from '../dashboard/Header';
import Footer from '../dashboard/Footer';
import UserManagementHeader from './UserManagementHeader';

export default class ProfilePage extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile-main">
          <Header />

          <UserManagementHeader />
          <div className="content group">
            <div className="profile-page settings">
              <div className="column">
              </div>
              <div className="column">
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

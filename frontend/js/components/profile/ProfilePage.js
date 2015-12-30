import React, { Component } from 'react';
import Header from '../dashboard/Header';
import Footer from '../dashboard/Footer';
import UserManagementHeader from './UserManagementHeader';
import { currentUser, addChangeListener, removeChangeListener } from '../../stores/current_user_store';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import PeopleApiUtil from '../../utils/people_api_util';

export default React.createClass({
  mixins: [ LinkedStateMixin ],

  getInitialState: function () {
    return { isEditing: false, ...currentUser() };
  },

  componentDidMount: function () {
    addChangeListener(this.updateCurrentUser);
  },

  componentDidMount: function () {
    removeChangeListener(this.updateCurrentUser);
  },

  updateCurrentUser: function () {
    this.setState({ ...currentUser() });
  },

  startEditing: function() {
    this.setState({ isEditing: true });
  },

  cancelEditing: function() {
    this.setState({ isEditing: false });
  },

  updateMyProfile: function () {
    PeopleApiUtil.updatePerson(this.state, this.cancelEditing.bind(this));
  },

  render: function() {
    var rows, buttons;

    if (this.state.isEditing) {
      rows = (
        <form>
          <ul className="rows form">
            <li>
              <h4 className="text-field"><label htmlFor="person-username">User name</label></h4>
              <div className="text-field">
                  <input id="person-username" maxLength="40" size="40" type="text" valueLink={this.linkState("username")} />
              </div>
            </li>

            <li>
              <h4 className="text-field"><label htmlFor="person-name">Name</label></h4>
              <div className="text-field">
                <input id="person-name" maxLength="100" size="100" type="text" valueLink={this.linkState("name")} />
              </div>
            </li>

            <li>
              <h4 className="text-field"><label htmlFor="person-initials">Initials</label></h4>
              <div className="text-field">
                <input id="person-initials" maxLength="10" size="10" type="text" valueLink={this.linkState("initials")} />
              </div>
            </li>
          </ul>
        </form>
      );

      buttons = (
        <div className="actions edit">
          <a href="#" className="cancel-link" onClick={this.cancelEditing}>Cancel</a>
          <a href="#" className="save-button header-button" onClick={this.updateMyProfile}>Save</a>
        </div>
      );
    } else {
      rows = (
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
      );

      buttons = (
        <div className="actions edit">
          <a href="#" className="edit-button header-button" onClick={this.startEditing}>Edit</a>
        </div>
      );
    }



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
                  { buttons }
                </div>
                { rows }
              </div>
            </div>
          </div>

          <div className="push"></div>
        </div>
        <Footer />
      </div>
    );
  }
});

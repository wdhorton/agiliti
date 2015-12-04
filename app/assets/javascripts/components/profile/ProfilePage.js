import React, { Component } from 'react';
import Header from '../dashboard/Header';
import Footer from '../dashboard/Footer';
import UserManagementHeader from './UserManagementHeader';
import { currentUser } from '../../stores/current_user_store';

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, user: currentUser() };
    this.startEditing = this.startEditing.bind(this);
    this.cancelEditing = this.cancelEditing.bind(this);
  }

  startEditing() {
    this.setState({ isEditing: true });
  }

  cancelEditing() {
    this.setState({ isEditing: false });
  }

  render() {
    var rows, buttons;

    if (this.state.isEditing) {
      rows = (
        <form>
          <ul class="rows form">
            <li>
              <h4 class="text-field"><label for="person-username">User name</label></h4>
              <div class="text-field">
                  <input id="person-username" maxlength="40" name="person[username]" size="40" type="text" valueLink={this.state.user.username} />
              </div>
            </li>

            <li>
              <h4 class="text_field"><label for="person_name">Name</label></h4>
              <div class="text_field">
                <input id="person_name" maxlength="100" name="person[name]" size="100" type="text" valueLink={this.state.user.name} />
              </div>
            </li>

            <li>
              <h4 class="text_field"><label for="person_initials">Initials</label></h4>
              <div class="text_field">
                <input id="person_initials" maxlength="10" name="person[initials]" size="10" type="text" valueLink={this.state.user.initials} />
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
}

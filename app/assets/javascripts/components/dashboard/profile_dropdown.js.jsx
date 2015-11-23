window.ProfileDropdown = React.createClass({
  signOut: function () {
    SessionsApiUtil.signout();
  },

  render: function () {
    return (
      <ul className="profile-dropdown">
        <li>
          <a href="#">Profile</a>
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

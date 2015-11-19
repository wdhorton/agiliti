window.AccountSelectDropdown = React.createClass({
  render: function () {

    var accounts = [{id: 1, name: "William Horton", owner: "You"}];

    return (
      <div>
        <div className="screen" onClick={this.props.hideAccountDropdown} />
        <ul className="select-dropdown">
          <li onClick={this.props.createAccount} className="select-option select-create-account" data-account-id="create">
            Create New Account
          </li>
          <li className="select-option-separator"></li>
          {
            accounts.map(function (account) {
              return (
                <li
                  onClick={this.props.selectAccount}
                  className="select-option" key={account.id}
                  data-account-id={account.id}
                  data-account-name={account.name}>
                  <span className="select-account-name">{account.name}</span>
                  <span className="select-account-owner">{account.owner}</span>
                </li>
              );
            }.bind(this))
          }
        </ul>
      </div>
    );
  }
});

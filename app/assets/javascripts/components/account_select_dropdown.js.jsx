window.AccountSelectDropdown = React.createClass({
  getInitialState: function () {
    return { accounts: AccountStore.all() };
  },

  componentDidMount: function () {
    AccountStore.addChangeListener(this.updateAccounts);
    ApiUtil.fetchAccounts();
  },

  componentWillUnmount: function () {
    AccountStore.removeChangeListener(this.updateAccounts);
  },

  updateAccounts: function () {
    this.setState({ accounts: AccountStore.all() });
  },

  render: function () {

    return (
      <div>
        <div className="screen" onClick={this.props.hideAccountDropdown} />
        <ul className="select-dropdown">
          <li onClick={this.props.createAccount} className="select-option select-create-account" data-account-id="create">
            Create New Account
          </li>
          <li className="select-option-separator"></li>
          {
            this.state.accounts.map(function (account) {
              return (
                <li
                  onClick={this.props.selectAccount}
                  className="select-option" key={account.id}
                  data-account-id={account.id}
                  data-account-name={account.name}>
                  <span className="select-account-name">{account.name}</span>
                  <span className="select-account-owner">"You"</span>
                </li>
              );
            }.bind(this))
          }
        </ul>
      </div>
    );
  }
});

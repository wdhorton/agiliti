window.CreateProjectForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {
      name: "",
      account_id: "",
      account_name: "",
      public: false,
      showAccountDropdown: false
    };
  },

  createNewProject: function () {
    ApiUtil.createNewProject(this.state);
  },

  handleCancel: function (e) {
    e.preventDefault();
    this.props.hide();
  },

  showAccountDropdown: function () {
    this.setState({ showAccountDropdown: true });
  },

  hideAccountDropdown: function () {
    this.setState({ showAccountDropdown: false });
  },

  selectAccount: function (e) {
    data = e.currentTarget.dataset;
    this.setState({ showAccountDropdown: false, account_id: data.accountId, account_name: data.accountName });
  },

  createAccount: function () {
    debugger;
  },

  render: function () {

    var accounts = [{name: "William's account", id: 1}];
    var dropdown;

    if (this.state.showAccountDropdown) {
      dropdown = (
        <AccountSelectDropdown
          hideAccountDropdown={this.hideAccountDropdown}
          selectAccount={this.selectAccount}
          createAccount={this.createAccount} />
      );
    }

    return (
      <form className="modal-content" onSubmit={this.createNewProject}>
        <section>
          <div className="form-group">
            <label htmlFor="project-name">Project Name</label>
            <input className="form-input" id="project-name" type="text" valueLink={this.linkState("name")} />
          </div>

          <div className="form-group">
            <label htmlFor="account-id">Account</label>
            <div className="form-select" id="account-id" onClick={this.showAccountDropdown}>
              {this.state.accountName}
            </div>
            {dropdown}
          </div>

          <div className="form-group">
            <label className="form-checkbox">
              <input type="checkbox" checkedLink={this.linkState('public')} />
              <span>Make this project publicly visible. </span>
              <a href="#">Read more...</a>
            </label>
          </div>

          <div className="form-group">
            <label className="form-checkbox">
              <input type="checkbox" />
              <span>Add sample project data</span>
            </label>
          </div>
        </section>
        <footer>
          <button className="cancel" onClick={this.handleCancel}>Cancel</button>
          <button className="submit">Create Project</button>
        </footer>
      </form>
    );
  }

});

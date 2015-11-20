window.SignInForm = React.createClass({
  getInitialState: function () {
    return { username_or_email: "", password: "" };
  },

  mixins: [ReactRouter.History, React.addons.LinkedStateMixin],

  submit: function (e) {
    e.preventDefault();

    SessionsApiUtil.signin(this.state, function() {
      this.history.pushState(null, "/dashboard");
    }.bind(this));
  },

  render: function () {
    return (
      <form className="sign-in-form" onSubmit={ this.submit }>
        <label>
          Username or email
          <input type="text" valueLink={this.linkState("username_or_email")} />
        </label><br/>

        <label>
          Password
          <input type="password" valueLink={this.linkState("password")} />
        </label><br/>

        <button>sign in</button>
      </form>
    );
  }
});

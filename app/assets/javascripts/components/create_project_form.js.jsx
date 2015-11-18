window.CreateProjectForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return { name: "", account_id: "" };
  },

  handleCancel: function (e) {
    e.preventDefault();
    this.props.hide();
  },

  render: function () {

    var accounts = [{name: "William's account", id: 1}];

    return (
      <form className="modal-content">
        <section>
          <div className="form-group">
            <label htmlFor="project_name">Project Name</label>
            <input className="form-input" id="project_name" type="text" valueLink={this.linkState("name")} />
          </div>

          <div className="form-group">
            <label htmlFor="account_id">Account</label>
            <div className="form-select" id="account_id">
            </div>
          </div>

          <div className="form-group">
            <label className="form-checkbox">
              <input type="checkbox" />
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

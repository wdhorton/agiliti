window.ProjectBox = React.createClass({
  render: function () {
    return (
      <li key={this.props.project.id} className="project-box">
        <div className="project-info-bar">
          <a className="project-title" href='#'>{this.props.project.name}</a>
        </div>
        <div className="velocity-box"></div>
      </li>
    );
  }
});

window.ProjectListItem = React.createClass({
  render: function () {
    return (
      <li key={this.props.project.id}>{this.props.project.name}</li>
    );
  }
});

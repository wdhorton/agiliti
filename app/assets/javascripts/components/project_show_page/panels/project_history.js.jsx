window.ProjectHistory = React.createClass({
  render: function () {

    return (
      <div className="panel my-work">
        <div className="panel-container">
          <PanelHeader title="Project History" />
          <section className="item-container">
            <CurrentPanelContent stories={this.props.stories} />
          </section>
        </div>
      </div>
    );
  }
});

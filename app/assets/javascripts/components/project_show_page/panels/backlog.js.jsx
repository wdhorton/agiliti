window.Backlog = React.createClass({
  render: function () {

    return (
      <div className="panel backlog">
        <div className="panel-container">
          <PanelHeader title="Backlog" />
          <section className="item-container">
            <CurrentPanelContent stories={this.props.stories} />
          </section>
        </div>
      </div>
    );
  }
});

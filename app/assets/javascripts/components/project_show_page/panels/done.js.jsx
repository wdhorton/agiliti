window.Done = React.createClass({
  render: function () {

    return (
      <div className="panel done">
        <div className="panel-container">
          <PanelHeader title="Done" />
          <section className="item-container">
            <CurrentPanelContent stories={this.props.stories} />
          </section>
        </div>
      </div>
    );
  }
});

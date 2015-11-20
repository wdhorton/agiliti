window.CurrentPanel = React.createClass({
  render: function () {

    return (
      <div className="panel current">
        <div className="panel-container">
          <CurrentPanelHeader />
          <section className="item-container">
            <CurrentPanelContent stories={this.props.stories} />
          </section>
        </div>
      </div>
    );
  }
});

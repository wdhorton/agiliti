window.Current = React.createClass({
  render: function () {

    return (
      <div className="panel current">
        <div className="panel-container">
          <PanelHeader title="Current" />
          <section className="item-container">
            <CurrentPanelContent stories={this.props.stories} />
          </section>
        </div>
      </div>
    );
  }
});

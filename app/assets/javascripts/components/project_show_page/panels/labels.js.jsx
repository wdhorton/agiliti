window.Labels = React.createClass({
  render: function () {

    return (
      <div className="panel my-work">
        <div className="panel-container">
          <PanelHeader title="Labels" />
          <section className="item-container">
            <CurrentPanelContent stories={this.props.stories} />
          </section>
        </div>
      </div>
    );
  }
});

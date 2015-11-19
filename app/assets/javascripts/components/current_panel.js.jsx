window.CurrentPanel = React.createClass({
  render: function () {
    return (
      <div className="panel current">
        <PanelHeader title="current" />
        <section className="item-container">
          <CurrentPanelContent />
        </section>
      </div>
    );
  }
});

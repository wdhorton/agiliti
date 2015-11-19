window.CurrentPanel = React.createClass({
  render: function () {
    return (
      <div className="panel current">
        <CurrentPanelHeader />
        <section className="item-container">
          <CurrentPanelContent />
        </section>
      </div>
    );
  }
});

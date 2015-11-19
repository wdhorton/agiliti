window.CurrentPanel = React.createClass({
  render: function () {
    return (
      <div className="panel current">
        <div className="panel-container">
          <CurrentPanelHeader />
          <section className="item-container">
            <CurrentPanelContent />
          </section>
        </div>
      </div>
    );
  }
});

window.CurrentPanelContent = React.createClass({
  render: function () {
    return (
      <section className="items-container">
        <div className="panel-content">
          <CurrentIterationHeader />
        </div>
      </section>
    );
  }
});

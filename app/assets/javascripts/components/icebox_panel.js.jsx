window.IceboxPanel = React.createClass({
  render: function () {

    return (
      <div className="panel current">
        <div className="panel-container">
          <IceboxPanelHeader />
          <section className="item-container">
            <IceboxPanelContent />
          </section>
        </div>
      </div>
    );
  }
});

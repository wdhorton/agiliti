window.IceboxPanel = React.createClass({
  render: function () {

    return (
      <div className="panel icebox">
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

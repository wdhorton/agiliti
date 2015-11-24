window.Icebox = React.createClass({
  render: function () {

    return (
      <div className="panel icebox">
        <div className="panel-container">
          <PanelHeader title="Icebox" />
          <section className="item-container">
            <IceboxPanelContent projectId={this.props.projectId} />
          </section>
        </div>
      </div>
    );
  }
});

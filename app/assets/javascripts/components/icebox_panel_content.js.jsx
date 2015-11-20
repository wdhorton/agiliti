window.IceboxPanelContent = React.createClass({
  render: function () {
    return (
      <section className="items-container">
        <div className="panel-content">
          <CreateStoryForm />
        </div>
      </section>
    );
  }
});

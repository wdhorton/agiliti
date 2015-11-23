window.ModelDetailsForm = React.createClass({
  render: function () {
    return (
      <form className="model-details">
        <fieldset className="story name">
          <textarea className="editor std" placeholder="Story title" />
        </fieldset>
        <aside>
          <div className="wrapper">
            <nav className="edit group">
              <section className="controls">
                <div className="actions">
                  <button title="Copy this story's link to your clipboard" className="clipboard-button link" tabIndex="-1" disabled=""></button>
                  <button title="Copy this story's ID to your clipboard" className="clipboard-button link use_click_to_copy" tabIndex="-1" disabled></button>

                  <button title="Clone this story" className="clone-story link" tabIndex="-1" disabled></button>
                  <button title="View the history of this story" className="history link" tabIndex="-1" disabled></button>
                  <button title="Delete this story" className="delete link" tabIndex="-1" disabled></button>
                </div>
                <div className="cancel-and-save-buttons">
                  <button className="cancel clear" tabIndex="-1">Cancel</button>
                  <button className="button std save" tabIndex="-1">Save</button>
                </div>
              </section>
            </nav>
            <nav className="info"></nav>
          </div>
        </aside>
      </form>
    );
  }
});

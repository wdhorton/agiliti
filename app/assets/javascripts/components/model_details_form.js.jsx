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
            <div className="story info-box group">
              <ul className="info">
                <li className="type" key="type">
                  <em>Story Type</em>
                  <div className="dropdown story-type">
                    <a className="selection item-feature"><span>feature</span></a>
                    <a className="arrow target"></a>
                  </div>
                </li>
                <li className="estimate" key="estimate">
                  <em>Estimate</em>
                  <div className="dropdown story-estimate">
                    <a className="selection"><span>unestimated</span></a>
                    <a className="arrow target"></a>
                  </div>
                </li>
                <li className="requester" key="requester">
                  <em>Requester</em>
                  <div className="dropdown story-requested-by-id">
                    <a className="selection"><span>william horton</span></a>
                    <a className="arrow target"></a>
                  </div>
                </li>
                <li className="owner" key="owner">
                  <em>Owners</em>
                  <div className="story-owners">
                    <a className="add-owner">
                      <span className="none">&lt;none&gt;</span>
                    </a>
                  </div>
                </li>
                <li className="following">
                  <em>Follow this story</em>
                  <input type="checkbox" checked="checked" disabled="true" class="std" />
                  <span className="count">1 follower</span>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </form>
    );
  }
});

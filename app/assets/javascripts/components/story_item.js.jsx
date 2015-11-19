window.StoryItem = React.createClass({
  render: function () {
    return (
      <li className="story">
        <header className="preview">
          <a className="expander"></a>
          <span className="meta"></span>
          <span className="name">
            <span className="story-name">
              Shopper should be able to click on a product, and see all product details, including photos
            </span>
            <span className="labels">
              <a className="label">shopping</a>
            </span>
          </span>
        </header>
      </li>
    );
  }
});

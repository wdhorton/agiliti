window.StoryItem = React.createClass({
  render: function () {
    return (
      <li className="story accepted">
        <header className="preview">
          <a className="expander"></a>
          <a className="selector"></a>
          <span className="meta"></span>
          <span className="name">
            <span className="story-name">
              Shopper should be able to click on a product, and see all product details, including photos
            </span>
            <span className="labels">
              <a className="label std">shopping</a>
            </span>
          </span>
        </header>
      </li>
    );
  }
});

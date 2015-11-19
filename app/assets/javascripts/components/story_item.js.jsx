window.StoryItem = React.createClass({
  render: function () {

    var labels;

    if (this.props.story.labels.length > 0) {
      labels = (
        <span className="labels">
          this.props.story.labels.map(function (label) {
            <a className="label std">shopping</a>
          })
        </span>
      );
    }


    return (
      <li className="story accepted">
        <header className="preview">
          <a className="expander"></a>
          <a className="selector"></a>
          <span className="meta"></span>
          <span className="name">
            <span className="story-name">
              {this.props.story.name}
            </span>
            {labels}
          </span>
        </header>
      </li>
    );
  }
});

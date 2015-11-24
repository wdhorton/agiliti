window.StoryItem = React.createClass({
  render: function () {

    var labels;

    // if (this.props.story.labels.length > 0) {
    //   labels = (
    //     <span className="labels">
    //       this.props.story.labels.map(function (label) {
    //         <a className="label std">shopping</a>
    //       })
    //     </span>
    //   );
    // }


    return (
      <li className={ "story " + this.props.story.current_state + " " + this.props.story.story_type }>
        <header className="preview">
          <a className="expander" data-storyid={this.props.story.id} onClick={this.props.editStory}></a>
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

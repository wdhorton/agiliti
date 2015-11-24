window.StoryItem = React.createClass({
  updateEstimate: function (e) {
    e.preventDefault();
    ApiUtil.updateStory({ id: this.props.story.id, estimate: e.target.innerHTML });
  },

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

    var estimate;

    if (this.props.story.estimate === -1) {
      estimate = (
        <span className="estimate" onClick={this.updateEstimate}>
          <label className="estimate_0">0</label>
          <label className="estimate_1">1</label>
          <label className="estimate_2">2</label>
          <label className="estimate_3">3</label>
        </span>
      );
    }


    return (
      <li data-storyid={this.props.story.id} onDoubleClick={this.props.editStory} className={ "story " + this.props.story.current_state + " " + this.props.story.story_type }>
        <header className="preview">
          <a className="expander" data-storyid={this.props.story.id} onClick={this.props.editStory}></a>
          <a className="selector"></a>
          <span className="meta"></span>
          {estimate}
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

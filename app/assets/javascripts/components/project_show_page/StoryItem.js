import React from 'react';
import ApiUtil from '../../utils/api_util';

export default React.createClass({
  updateEstimate: function (e) {
    e.preventDefault();
    ApiUtil.updateStory({ id: this.props.story.id, estimate: e.target.innerHTML });
  },

  updateState: function (e) {
    e.preventDefault();
    var state = e.target.innerHTML + "ed";
    if (state === "restarted") {
      state = "started";
    }
    ApiUtil.updateStory({ id: this.props.story.id, current_state: state });
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

    var itemButton;

    if (this.props.story.estimate !== -1 && this.props.story.current_state !== "accepted") {
      var word;

      if (this.props.story.current_state === "unstarted" || this.props.story.current_state === "unscheduled") {
        word = "start";
      } else if (this.props.story.current_state === "started") {
        word= "finish";
      } else if (this.props.story.current_state === "finished") {
        word = "deliver";
      } else if (this.props.story.current_state === "rejected") {
        word = "restart";
      }

      itemButton = (
        <span className="state" onClick={this.updateState}>
          <label className={ "state button " + word } tabIndex="-1">{word}</label>
        </span>
      );

      if (this.props.story.current_state === "delivered") {
        itemButton = (
          <span className="state" onClick={this.updateState}>
            <label className="state button reject" tabIndex="-1">reject</label>
            <label className="state button accept" tabIndex="-1">accept</label>
          </span>
        );
      }
    } else {
      itemButton = (
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
          <input type="checkbox" className="selector"></input>
          <span className="meta"></span>
          {itemButton}
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

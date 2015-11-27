import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import $ from 'jquery';
import ApiUtil from '../../utils/api_util';

export default React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    var defaults = {
      name: "",
      story_type: "feature",
      estimate: -1,
      requester: "",
      owners: [],
      description: "",
      showTypeDropdown: false,
      showEstimateDropdown: false
    };

    return $.extend({}, defaults, this.props.story);
  },

  createNewStory: function (e) {
    e.preventDefault();
    this.props.hideStoryForm(e);
    const newStory = $.extend({}, this.state, { project_id: this.props.projectId });
    ApiUtil.createNewStory(newStory);
  },

  updateStory: function (e) {
    e.preventDefault();
    this.props.hideStoryForm(e);
    const story = $.extend({}, this.state, { project_id: this.props.projectId });
    ApiUtil.updateStory(story);
  },

  showTypeDropdown: function () {
    this.setState({ showTypeDropdown: true });
  },

  hideTypeDropdown: function () {
    this.setState({ showTypeDropdown: false });
  },

  showEstimateDropdown: function () {
    this.setState({ showEstimateDropdown: true });
  },

  hideEstimateDropdown: function () {
    this.setState({ showEstimateDropdown: false });
  },

  selectType: function (e) {
    const data = e.currentTarget.dataset;
    this.setState({ showTypeDropdown: false, story_type: data.value });
  },

  selectEstimate: function (e) {
    const data = e.currentTarget.dataset;
    this.setState({ showEstimateDropdown: false, estimate: parseInt(data.value) });
  },

  render: function () {
    var typeDropdown, estimateDropdown, collapser;

    if (this.state.showTypeDropdown) {
      typeDropdown = (
        <div>
          <div className="screen" onClick={this.hideTypeDropdown}></div>
          <section className="visible">
            <div className="dropdown-menu search">
              <div className="search-item">
                <input type="text" className="search" />
              </div>
              <ul>
                <li onClick={this.selectType} data-value="feature" key="feature" className="dropdown-item">
                  <a className="item-feature">
                    <span className="dropdown-label">feature</span>
                  </a>
                </li>
                <li onClick={this.selectType} data-value="bug" key="bug" className="dropdown-item">
                  <a className="item-bug">
                    <span className="dropdown-label">bug</span>
                  </a>
                </li>
                <li onClick={this.selectType} data-value="chore" key="chore" className="dropdown-item">
                  <a className="item-chore">
                    <span className="dropdown-label">chore</span>
                  </a>
                </li>
                <li onClick={this.selectType} data-value="release" key="release" className="dropdown-item">
                  <a className="item-release">
                    <span className="dropdown-label">release</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      );
    }

    if (this.state.showEstimateDropdown) {
      estimateDropdown = (
        <div>
          <div className="screen" onClick={this.hideEstimateDropdown}></div>
          <section className="visible">
            <div className="dropdown-menu search">
              <div className="search-item">
                <input type="text" className="search" />
              </div>
              <ul>
                <li onClick={this.selectEstimate} data-value="-1" key="unestimated" className="dropdown-item">
                  <a className="item-unestimated">
                    <span className="dropdown-label">unestimated</span>
                  </a>
                </li>
                <li onClick={this.selectEstimate} data-value="0" key="0" className="dropdown-item">
                  <a className="item-0">
                    <span className="dropdown-label">0 Points</span>
                  </a>
                </li>
                <li onClick={this.selectEstimate} data-value="1" key="1" className="dropdown-item">
                  <a className="item-1">
                    <span className="dropdown-label">1 Point</span>
                  </a>
                </li>
                <li onClick={this.selectEstimate} data-value="2" className="dropdown-item">
                  <a className="item-2">
                    <span className="dropdown-label">2 Points</span>
                  </a>
                </li>
                <li onClick={this.selectEstimate} data-value="3" className="dropdown-item">
                  <a className="item-3">
                    <span className="dropdown-label">3 Points</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      );
    }

    var estimate;

    if (this.state.estimate === -1) {
      estimate = "Unestimated";
    } else if (this.state.estimate === 1) {
      estimate = "1 Point";
    } else {
      estimate = this.state.estimate + " Points";
    }

    if (this.props.story) {
      collapser = <a onClick={ this.props.hideStoryForm } className="collapser"></a>;
    }

    var callback = this.props.story ? this.updateStory : this.createNewStory;

    var sectionClass = "edit" + ( this.props.story ? "" : " new");

    return (
      <section className={sectionClass}>
        <form className="model-details">
          <fieldset className="story name">
            <textarea className="editor std" placeholder="Story title" valueLink={this.linkState("name")} />
            { collapser }
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
                    <button onClick={this.props.hideStoryForm} className="cancel clear" tabIndex="-1">Cancel</button>
                    <button onClick={callback} className="button std save" tabIndex="-1">Save</button>
                  </div>
                </section>
              </nav>
              <div className="story info-box group">
                <ul className="info">
                  <li className="type" key="type">
                    <em>Story Type</em>
                    <div className="dropdown story-type" >
                      <a onClick={this.showTypeDropdown} className={ "selection item-" + this.state.story_type }><span>{ this.state.story_type }</span></a>
                      <a onClick={this.showTypeDropdown} className="arrow target"></a>
                      { typeDropdown }
                    </div>
                  </li>
                  <li className="estimate" key="estimate">
                    <em>Estimate</em>
                    <div className="dropdown story-estimate">
                      <a onClick={this.showEstimateDropdown} className="selection"><span>{ estimate }</span></a>
                      <a onClick={this.showEstimateDropdown} className="arrow target"></a>
                      { estimateDropdown }
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
                    <input type="checkbox" checked="checked" disabled="true" className="std" />
                    <span className="count">1 follower</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </form>

        <form className="description full">
          <h4>
            Description
            <button className="edit-description">(edit)</button>
          </h4>
          <textarea className="editor std description" valueLink={this.linkState("description")} />
        </form>

        <form className="label-container full">
          <h4>Labels</h4>
          <div className="labels">
            <div className="labels-maker">
              <ul className="selected labels group">
                <li className="input">
                  <input type="text" className="search" />
                </li>
              </ul>
              <div className="dropdown">
                <a className="selection"></a>
                <a className="arrow target"></a>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
});

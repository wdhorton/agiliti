import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import ItemTypes from '../../constants/dnd_constants';
import { DragSource, DropTarget } from 'react-dnd';

import PanelHeader from './PanelHeader';
import StoryStore from '../../stores/story_store';
import ApiUtil from '../../utils/api_util';
import StoryList from './StoryList';

const panelSource = {
  beginDrag(props) {
    return {
      name: props.name,
      index: props.index
    };
  }
};

const panelTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get horizontal middle
    const hoverMiddleX = (hoverBoundingRect.left - hoverBoundingRect.right) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the right
    const hoverClientX = clientOffset.x - hoverBoundingRect.right;

    // Only perform the move when the mouse has crossed half of the items width
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging left
    if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
      return;
    }

    // Dragging right
    if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
      return;
    }

    // Time to actually perform the action
    props.movePanel(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

@DropTarget(ItemTypes.PANEL, panelTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
@DragSource(ItemTypes.PANEL, panelSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class Panel extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    movePanel: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.updateStories = this.updateStories.bind(this);
    this.state = { stories: StoryStore[props.name]() };
  }

  componentDidMount() {
    StoryStore.addChangeListener(this.updateStories);
  }

  componentWillUnmount() {
    StoryStore.removeChangeListener(this.updateStories);
  }

  updateStories() {
    this.setState({ stories: StoryStore[this.props.name]() })
  }

  render() {
    const { text, isDragging, connectDragSource, connectDropTarget, name, projectId } = this.props;
    const { stories } = this.state;
    const opacity = isDragging ? 0 : 1;

    var list;

    var showCreateStory = name === "icebox" && this.props.showCreateStory

    if (stories) {
      list = <StoryList projectId={projectId} stories={stories} showCreateStory={showCreateStory} />
    }

    return connectDragSource(connectDropTarget(
      <div className={"panel " + name}>
        <div className="panel-container">
          <PanelHeader title={name} />
          <section className="item-container">
            <section className="items-container">
              <div className="panel-content">
                {list}
              </div>
            </section>
          </section>
        </div>
      </div>
    ));
  }
}

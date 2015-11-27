import React, { Component } from 'react';
import update from 'react/lib/update';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Panel from './Panel'

@DragDropContext(HTML5Backend)
export default class Container extends Component {
  constructor(props) {
    super(props);
    this.movePanel = this.movePanel.bind(this);
    this.state = {
      panels: [ {
        name: "current"
      }, {
        name: "backlog"
      }, {
        name: "icebox"
      }]
    };
  }

  movePanel(dragIndex, hoverIndex) {
    const { panels } = this.state;
    const dragPanel = panels[dragIndex];

    this.setState(update(this.state, {
      panels: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragPanel]
        ]
      }
    }));
  }

  render() {
    const { panels } = this.state;
    const { stories, projectId } = this.props;

    return (
      <section className="panels">
        {
          panels.map((panel, i) => {
            return  (
              <Panel key={panel.name}
                     name={panel.name}
                     index={i}
                     movePanel={this.movePanel}
                     projectId={projectId}
                     stories={stories} />
            );
        })}
      </section>
    );
  }
}

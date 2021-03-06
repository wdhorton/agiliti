import React from 'react';

export default React.createClass({

  render: function () {

    var velocity;

    if (this.props.title === "current") {
      velocity = <a className="velocity"></a>;
    }

    return (
      <header className="panel-header panel-controls">
        <a className="close"></a>
        <nav className="controls">
          <a className="add-story"></a>
        </nav>
        <h3>{this.props.title}</h3>
        { velocity }
      </header>
    );
  }
});

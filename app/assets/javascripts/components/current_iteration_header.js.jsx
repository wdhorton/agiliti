window.CurrentIterationHeader = React.createClass({
  render: function () {
    return (
      <div className="iteration current-iteration">
        <header className="preview">
          <a className="current-iteration-bubble"> </a>
          <span className="number">3</span>
          <time className="length">
            16 Nov
            <span className="type"> - Current</span>
          </time>
          <div className="float-right">
            <span className="points">
              Pts:
              <span className="completed"> 5 of </span>
              <span className="total">7</span>
            </span>
            <a className="team-strength" title="Team strength for this iteration is at 100%. Click to change."></a>
          </div>
        </header>
      </div>
    );
  }
});

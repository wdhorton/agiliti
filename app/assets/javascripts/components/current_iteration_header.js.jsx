window.CurrentIterationHeader = React.createClass({
  render: function () {
    return (
      <div className="iteration current-iteration">
        <header className="preview">
          <a className="current-iteration-bubble"> </a>
          <span className="number">3</span>
          <time className="length">
            16 Nov
            <span className="type"> - current</span>
          </time>
          <div className="float-right">
            <span class="points">
              Pts:
              <span class="completed">5 of </span>
              <span class="total">7</span>
            </span>
            <a class="team-strength" title="Team strength for this iteration is at 100%. Click to change.">100%</a>
          </div>
        </header>
      </div>
    );
  }
});

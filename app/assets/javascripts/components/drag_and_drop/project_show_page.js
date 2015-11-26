import PanelsContainer from './panels_container';

var ProjectShowPage = React.createClass({
  getInitialState: function () {
    return $.extend({}, this.getStateFromStore(), {
      showMyWork: false,
      showCurrent: true,
      showBacklog: true,
      showIcebox: true,
      showDone: false,
      showEpics: false,
      showLabels: false,
      showCharts: false,
      showProjectHistory: false
    });
  },

  panels: [],

  getStateFromStore: function () {
    var id = parseInt(this.props.params.id);
    return { project: ProjectStore.find(id), stories: StoryStore.all()};
  },

  componentDidMount: function () {
    StoryStore.addChangeListener(this.updateStories);
    ApiUtil.fetchStories(parseInt(this.props.params.id));
  },

  componentWillUnmount: function () {
    StoryStore.removeChangeListener(this.updateStories);
  },

  updateStories: function () {
    this.setState({ stories: StoryStore.all() });
  },

  createStory: function () {
    this.setState({ showIcebox: true });
  },

  togglePanel: function (e) {
    panel = e.currentTarget.dataset.panel;
    newState = {};
    newState[panel] = !this.state[panel];
    this.setState(newState);
  },

  activePanels: function () {
    return this.panels.filter(function (panel) {
      var stateString = "show" + panel.displayName;
      return this.state[stateString];
    }.bind(this));
  },

  render: function () {
    const { stories, project } = this.state;

    return (
      <div>
        <ProjectShowHeader title={this.state.project.name} />
        <section className="project main">
          <Sidebar createStory={this.createStory} togglePanel={this.togglePanel} activePanels={this.activePanels()} />
          <article className="main">
            <PanelsContainer stories={stories} projectId={project.id} />
          </article>
        </section>
      </div>
    );
  }
});

export default ProjectShowPage;

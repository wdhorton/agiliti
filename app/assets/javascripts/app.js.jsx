$(function() {
  var root = document.getElementById("content");
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var HTML5Backend = ReactDnDHTML5Backend;
  var DragDropContext = ReactDnD.DragDropContext;

  var App = React.createClass({

    mixins: [ReactRouter.History],

    getInitialState: function () {
      return { currentUser: null };
    },

    componentWillMount: function () {
      CurrentUserStore.addChangeListener(this._ensureSignedIn);
      SessionsApiUtil.fetchCurrentUser();
    },

    _ensureSignedIn: function () {
      if (!CurrentUserStore.isSignedIn()) {
        this.history.pushState(null, "/signin");
      }
    },


    render: function () {
      return (
        <div>
          {this.props.children}
        </div>
      );
    }
  });

  var DragDropApp = DragDropContext(HTML5Backend)(App);

  var routes = (
    <Route path="/" component={DragDropApp}>
      <IndexRoute component={Dashboard} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/signup/new" component={SignUpPage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/projects/:id" component={ProjectShowPage} />
    </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});

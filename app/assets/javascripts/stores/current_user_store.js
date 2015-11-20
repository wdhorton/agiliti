(function(root){
  var _currentUser = [];

  var CHANGE_EVENT = "change";

  root.CurrentUserStore = $.extend({}, EventEmitter.prototype, {
    currentUser: function () {
      return $.extend({}, _currentUser);
    },

    isSignedIn: function () {
      return (typeof _currentUser.id !== "undefined");
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {

        case CurrentUserConstants.CURRENT_USER_RECEIVED:
          _currentUser = payload.currentUser;
          CurrentUserStore.emit(CHANGE_EVENT);
          break;

      }
    })

  });

})(this);

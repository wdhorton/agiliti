(function(root){
  var _accounts = [];

  var resetAccounts = function (accounts) {
    _accounts = accounts;
  };

  var addAccount = function (account) {
    _accounts.push(account);
  };

  var CHANGE_EVENT = "change";

  root.AccountStore = $.extend({}, EventEmitter.prototype, {
    all: function (){
      return _accounts.slice();
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case AccountConstants.ACCOUNTS_RECEIVED:
          resetAccounts(payload.accounts);
          AccountStore.emit(CHANGE_EVENT);
          break;
        case AccountConstants.NEW_ACCOUNT_RECEIVED:
          addAccount(payload.account);
          AccountStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

})(this);

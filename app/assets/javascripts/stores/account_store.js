import { register } from '../AppDispatcher';
import { createStore } from '../utils/StoreUtils';

var _accounts = [];

var resetAccounts = function (accounts) {
  _accounts = accounts;
};

var addAccount = function (account) {
  _accounts.push(account);
};

const AccountStore = createStore({
  all(){
    return _accounts.slice();
  }
});

AccountStore.dispatchToken = register(function (payload) {
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
});

export default AccountStore;

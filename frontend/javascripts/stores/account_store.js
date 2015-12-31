import { register } from '../AppDispatcher';
import { createStore } from '../utils/StoreUtils';
import AccountConstants from '../constants/account_constants';

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
  switch (payload.type.actionType) {
    case AccountConstants.ACCOUNTS_RECEIVED:
      resetAccounts(payload.type.accounts);
      AccountStore.emitChange();
      break;
    case AccountConstants.NEW_ACCOUNT_RECEIVED:
      addAccount(payload.type.account);
      AccountStore.emitChange();
      break;
  }
});

export default AccountStore;

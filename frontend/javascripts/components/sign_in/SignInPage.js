import React from 'react';
import SignInHeader from './SignInHeader';
import SignInContent from './SignInContent';
import SignInFooter from './SignInFooter';

export default React.createClass({
  render: function () {
    return (
      <div className="sign-in-page">
        <SignInHeader />
        <SignInContent />
        <SignInFooter />
      </div>
    );
  }
});

import React from 'react';
import SignInHeader from './SignInHeader';
import SignInContent from './SignInContent';
import SignInFooter from './SignInFooter';
import "../../../stylesheets/sign_in.scss";

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

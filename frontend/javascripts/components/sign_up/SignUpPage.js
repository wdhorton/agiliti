import React from 'react';
import SignUpHeader from './SignUpHeader';
import SignUpContent from './SignUpContent';
import SignInFooter from '../sign_in/SignInFooter';
import "../../../stylesheets/sign_in.scss";

export default React.createClass({
  render: function () {
    return (
      <div className="sign-in-page">
        <SignUpHeader />
        <SignUpContent />
        <SignInFooter />
      </div>
    );
  }
});

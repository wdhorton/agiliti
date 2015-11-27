import React from 'react';
import SignUpHeader from './SignUpHeader';
import SignUpContent from './SignUpContent';
import SignUpFooter from './SignUpFooter';

export default React.createClass({
  render: function () {
    return (
      <div className="sign-in-page">
        <SignUpHeader />
        <SignUpContent />
        <SignUpFooter />
      </div>
    );
  }
});

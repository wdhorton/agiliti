import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import SignUpPage from '../../javascripts/components/sign_up/SignUpPage';
import SignUpHeader from '../../javascripts/components/sign_up/SignUpHeader';
import SignUpContent from '../../javascripts/components/sign_up/SignUpContent';
import SignInFooter from '../../javascripts/components/sign_in/SignInFooter';

function setup() {
  const renderer = TestUtils.createRenderer();
  renderer.render(<SignUpPage />);
  const output = renderer.getRenderOutput();

  return output;
}

describe("components", () => {
  describe("SignUpPage", () => {
    it("renders container", () => {
      const output = setup();

      expect(output.type).toBe('div');
      expect(output.props.className).toBe('sign-in-page');
    });

    it("renders child components", () => {
      const children = setup().props.children;

      expect(children[0].type).toBe(SignUpHeader);
      expect(children[1].type).toBe(SignUpContent);
      expect(children[2].type).toBe(SignInFooter);
    });
  });
});

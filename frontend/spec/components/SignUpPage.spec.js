import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import SignUpPage from '../../javascripts/components/sign_up/SignUpPage';

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
  });
});

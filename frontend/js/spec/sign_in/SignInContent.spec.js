require( '../spec_helpers/emulateDom');

const Unexpected = require('unexpected');
const UnexpectedReact = require('unexpected-react');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var { Link } = require('react-router');

const SignInContent = require('../../components/sign_in/SignInContent');
const SignInForm = require('../../components/sign_in/SignInForm');

const expect = Unexpected.clone()
    .use(UnexpectedReact);

describe('SignInContent', () => {

  let renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(<SignInContent />);
  });

  it('should render a div.sign-in-content wrapper', () => {
    return expect(renderer, 'to have rendered',
      <div className="sign-in-content" />
    );
  });
});

require( '../spec_helpers/emulateDom');

const Unexpected = require('unexpected');
const UnexpectedReact = require('unexpected-react');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var { Link } = require('react-router');

const SignUpContent = require('../../components/sign_up/SignUpContent');
const SignUpForm = require('../../components/sign_up/SignUpForm');

const expect = Unexpected.clone()
    .use(UnexpectedReact);

describe('SignUpContent', () => {

  let renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(<SignUpContent />);
  });

  it('should render a div.sign-in-content wrapper', () => {
    return expect(renderer, 'to have rendered',
      <div className="sign-in-content" />
    );
  });
});

require( '../spec_helpers/emulateDom');

const Unexpected = require('unexpected');
const UnexpectedReact = require('unexpected-react');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var { Link } = require('react-router');

const SignUpHeader = require('../../components/sign_in/SignUpHeader');

const expect = Unexpected.clone()
    .use(UnexpectedReact);

describe('SignUpHeader', () => {

  let renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(<SignUpHeader />);
  });

  it('should render a div.sign-in-header', () => {
    return expect(renderer, 'to have rendered',
      <div className="sign-in-header-container">
        <div className="sign-in-header-outside">
          <a href="/">
            <div className="sign-in-header-logo"></div>
          </a>
          <div className="toggle-sign-in-sign-up">
            <span>ALREADY HAVE AN ACCOUNT? </span>
            <Link to="/signin" className="toggle-sign-in-sign-up-link">SIGN IN</Link>
          </div>
        </div>
      </div>
    );
  });
});

require( '../spec_helpers/emulateDom');

const Unexpected = require('unexpected');
const UnexpectedReact = require('unexpected-react');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var { Link } = require('react-router');

const SignInHeader = require('../../components/sign_in/SignInHeader');

const expect = Unexpected.clone()
    .use(UnexpectedReact);

describe('SignInHeader', () => {

  let renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(<SignInHeader />);
  });

  it('should render a div.sign-in-header', () => {
    return expect(renderer, 'to have rendered',
      <div className="sign-in-header-container">
        <div className="sign-in-header-outside">
          <a href="/">
            <div className="sign-in-header-logo"></div>
          </a>
          <div className="toggle-sign-in-sign-up">
            <span>DON'T HAVE AN ACCOUNT? </span>
            <Link to="/signup/new" className="toggle-sign-in-sign-up-link">SIGN UP</Link>
          </div>
        </div>
      </div>
    );
  });
});

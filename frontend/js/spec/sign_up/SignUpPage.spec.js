require( '../spec_helpers/emulateDom');

const Unexpected = require('unexpected');
const UnexpectedReact = require('unexpected-react');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

const SignUpPage = require('../../components/sign_up/SignUpPage');
const SignUpHeader = require('../../components/sign_up/SignUpHeader');
const SignUpContent = require('../../components/sign_up/SignUpContent');
const SignInFooter = require('../../components/sign_in/SignInFooter');

const expect = Unexpected.clone()
    .use(UnexpectedReact);

describe('SignUpPage', () => {

  let renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(<SignUpPage />);
  });


  it('should render a div.sign-in-page', () => {
    return expect(renderer, 'to have rendered',
      <div className="sign-in-page">
        <SignUpHeader />
        <SignUpContent />
        <SignInFooter />
      </div>
    );
  });
});

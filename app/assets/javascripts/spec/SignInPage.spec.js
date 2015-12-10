require( '../spec_helpers/emulateDom');

const Unexpected = require('unexpected');
const UnexpectedReact = require('unexpected-react');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

const SignInPage = require('../components/sign_in/SignInPage');
const SignInHeader = require('../components/sign_in/SignInHeader');
const SignInContent = require('../components/sign_in/SignInContent');
const SignInFooter = require('../components/sign_in/SignInFooter');

const expect = Unexpected.clone()
    .use(UnexpectedReact);

describe('SignInPage', () => {

  let component;
  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<SignInPage />);
  });

  it('should render a div.sign-in-page', () => {
    return expect(component, 'to have rendered',
      <div className="sign-in-page">
        <SignInHeader />
        <SignInContent />
        <SignInFooter />
      </div>
    );
  });


});

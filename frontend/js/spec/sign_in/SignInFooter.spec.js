require( '../spec_helpers/emulateDom');

const Unexpected = require('unexpected');
const UnexpectedReact = require('unexpected-react');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var { Link } = require('react-router');

const SignInFooter = require('../../components/sign_in/SignInFooter');

const expect = Unexpected.clone()
    .use(UnexpectedReact);

describe('SignInHeader', () => {

  let renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(<SignInFooter />);
  });

  it('should render a div.sticky-footer', () => {
    return expect(renderer, 'to have rendered',
      <div className="sticky-footer">
        <div className="sign-in-footer">
          <a className="facebook"></a>
          <a className="twitter"></a>
          <a className="email"></a>
        </div>
      </div>
    );
  });
});

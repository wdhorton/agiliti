window.Footer = React.createClass({
  render: function () {
    return (
      <footer>
        <div className="footer-border" />
        <div className="footer-content">
          <a href="#">About William Horton</a>
           |
          <a href="#"> Help & Support</a>
           |
          <a href="#"> Status</a>
           |
          <a href="http://hortonhearsafoo.tumblr.com/" target="_blank">  Blog</a>
           |
          <a href="#"> Privacy and Cookie Policy</a>
           |
          <a href="#"> Services Agreement</a>
           |
          <a href="#"> Contact Us</a>

          <a href="https://www.twitter.com/hortonhearsafoo" className="twitter-link" target="_blank">Follow William Horton on Twitter</a>
        </div>
      </footer>
    );
  }
});

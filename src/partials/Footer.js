const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="/login">Account</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
    <p className="developer-credits">
      Developed by: <a href="https://github.com/sai2439">Sai Radha Krishna</a>
      <span className="social-icons">
        <a
          href="https://github.com/sai2439"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/srk2003/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </span>
    </p>
  </footer>
);

export default Footer;

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/#home" className="footer-logo">
          <img src="/images/logo.png" alt="Monkey Pub" />
          <span>MONKEYPUB</span>
        </Link>

        <p>
          Via Caldarola, 11 · 70126 Bari 
        </p>

        <p>© {new Date().getFullYear()} MonkeyPub</p>
      </div>
    </footer>
  );
}

export default Footer;
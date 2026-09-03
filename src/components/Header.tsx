import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/#home" className="logo-link">
          <img
            src="/images/logo.png"
            alt="Monkey Pub"
            className="logo-image"
          />

        <span className="logo-text">
        <span className="logo-monkey">MONKEY</span>
        <span className="logo-pub">PUB</span>
        </span>
        </Link>

        <nav className="navigation" aria-label="Navigazione principale">
          <Link to="/#chi-siamo">CHI SIAMO</Link>
          <Link to="/#menu">MENU</Link>
          <Link to="/#giochi">GIOCHI</Link>
          <Link to="/#sport">SPORT</Link>
          <Link to="/#recensioni">RECENSIONI</Link>
          <Link to="/#contatti">CONTATTI</Link>
        </nav>

        <a href="tel:+393312007350" className="call-button">
          Chiama ora
        </a>
      </div>
    </header>
  );
}

export default Header;
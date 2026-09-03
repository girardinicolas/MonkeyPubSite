import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <img
          src="/images/logo.png"
          alt="Logo Monkey Pub"
          className="hero-logo"
        />

        <p className="hero-location">
          BARI · VIA CALDAROLA 11
        </p>

        <h1 className="hero-title">
          MONKEY
          <span>PUB</span>
        </h1>

        <p className="hero-description">
          American bar · Pizza · Gaming · Sport in diretta
        </p>

        <div className="hero-buttons">
          <Link to="/#menu" className="primary-button">
            Scopri il menu
          </Link>

          <Link to="/#contatti" className="secondary-button">
            Vieni a trovarci
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
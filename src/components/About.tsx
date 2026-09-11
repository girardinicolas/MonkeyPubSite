import './About.css';

function About() {
    return (
      <section id="chi-siamo" className="about-section">
        <div className="section-container about-layout">
          <div className="about-text">
            <p className="section-label">01 / CHI SIAMO</p>
  
            <h2 className="section-title">
              DOVE IL GUSTO
              <span>INCONTRA</span>
              IL GIOCO
            </h2>
  
            <p>
              MonkeyPub è il locale dove giochi di carte e da tavolo
              incontrano veri smash burger e cocktail su misura. Un posto unico
              per passare una serata diversa a Bari.
            </p>
  
            <p>
              Lasciati conquistare dai nostri sapori, circondato da schermi per
              seguire le migliori partite e da tante attività da condividere con
              gli amici.
            </p>
          </div>
  
          <div className="about-image-wrapper">
            <img
              src="/images/about.jpg"
              alt="Interno del Monkey Pub"
              className="about-image"
            />
  
            <div className="rating-badge">
              <strong>4.9</strong>
              <span>SU GOOGLE · 53 RECENSIONI</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
type Competition = {
    logo: string;
    name: string;
  };
  
  const competitions: Competition[] = [
    {
      logo: 'public/images/competitions/serie-a.png',
      name: 'SERIE A',
    },
    {
      logo: '/images/competitions/champions-league.png',
      name: 'CHAMPIONS LEAGUE',
    },
    {
      logo: '/images/competitions/europa-league.png',
      name: 'EUROPA LEAGUE',
    },
    {
      logo: '/images/competitions/conference-league.png',
      name: 'CONFERENCE LEAGUE',
    },
    {
      logo: '/images/competitions/nazionali.png',
      name: 'NAZIONALI',
    },
    {
      logo: '/images/competitions/premier-league.png',
      name: 'PREMIER LEAGUE',
    },
    {
      logo: '/images/competitions/laliga.png',
      name: 'LA LIGA',
    },
    {
      logo: '/images/competitions/bundesliga.png',
      name: 'BUNDESLIGA',
    },
  ];
  
  function Sport() {
    return (
      <section id="sport" className="sport-section">
        <div className="section-container sport-content">
          <p className="section-label">04 / SPORT LIVE</p>
  
          <h2 className="section-title sport-title">
            TUTTE LE PARTITE
            <span>IN DIRETTA</span>
          </h2>
  
          <p className="sport-description">
            Segui i tuoi campionati preferiti su schermi giganti con la migliore
            qualità video.
          </p>
  
          <div className="competition-grid">
            {competitions.map((competition) => (
              <article className="competition-card" key={competition.name}>
                <img
                  src={competition.logo}
                  alt={`Logo ${competition.name}`}
                  className="competition-logo"
                />
  
                <span className="competition-name">{competition.name}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Sport;
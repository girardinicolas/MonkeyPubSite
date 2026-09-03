type GameCategory = {
    icon: string;
    title: string;
  };
  
  const gameCategories: GameCategory[] = [
    {
      icon: '🎲',
      title: 'Giochi da tavolo',
    },
    {
      icon: '🃏',
      title: 'Giochi di carte',
    },
    {
      icon: '♟️',
      title: 'Strategia',
    },
    {
      icon: '🎯',
      title: 'Party games',
    },
  ];
  
  function Games() {
    return (
      <section id="giochi" className="games-section">
        <div className="section-container games-layout">
          <div className="games-image-wrapper">
            <img
              src="/images/games.jpg"
              alt="Persone che giocano a un gioco da tavolo"
              className="games-image"
            />
  
            <div className="games-badge">
              <strong>+50</strong>
              <span>
                GIOCHI
                <br />
                DISPONIBILI
              </span>
            </div>
          </div>
  
          <div className="games-content">
            <p className="section-label">03 / GIOCHI</p>
  
            <h2 className="section-title">
              GIOCA,
              <span>RIDI,</span>
              VINCI
            </h2>
  
            <p>
              Una grande selezione di giochi da tavolo e giochi di carte per
              gruppi di amici. Dal classico Monopoly ai giochi di strategia più
              complessi: c’è qualcosa per tutti.
            </p>
  
            <div className="game-category-grid">
              {gameCategories.map((category) => (
                <article className="game-category-card" key={category.title}>
                  <span className="game-icon" aria-hidden="true">
                    {category.icon}
                  </span>
  
                  <strong>{category.title}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Games;


type GameCategory = {
  icon: string;
  title: string;
  games: string[];
};

const gameCategories: GameCategory[] = [
  {
    icon: '🎲',
    title: 'Giochi da tavolo',
    games: [
      'Monopoly',
      'Ticket to Ride',
      'Cluedo',
      'Scarabeo',
      'Exploding Kittens',
      'e tanto altro...'
    ],
  },
  {
    icon: '🃏',
    title: 'Giochi di carte',
    games: [
      'Magic: The Gathering',
      'Pokémon TCG',
      'Yu-Gi-Oh!',
      'Riftbound'
    ],
  },
  {
    icon: '♟️',
    title: 'Strategia',
    games: [
      'Risiko',
      'Scacchi',
      '7 Wonders',
      'Root',
      'Pandemic',
      'Wingspan',
    ],
  },
  {
    icon: '🎯',
    title: 'Party games',
    games: [
      'Taboo',
      'Just One',
      'Dobble',
      'What Do You Meme?',
      'Taco Gatto Capra Cacio Pizza',
      'Nome in codice',
    ],
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
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
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
          <p className="section-label">02 / GIOCHI</p>

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
                <div className="game-category-header">
                  <span className="game-icon" aria-hidden="true">
                    {category.icon}
                  </span>

                  <strong>{category.title}</strong>

                  <span
                    className="game-category-arrow"
                    aria-hidden="true"
                  >
                    ⌄
                  </span>
                </div>

                <div className="game-list-wrapper">
                  <p className="game-list-label">ALCUNI TITOLI</p>

                  <ul className="game-list">
                    {category.games.map((game) => (
                      <li key={game}>{game}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Games;
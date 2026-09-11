import { useState } from 'react';
import './Games.css';

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
      'Catan',
      'Ticket to Ride',
      'Carcassonne',
      'Azul',
      'Dixit',
      'Codenames',
    ],
  },
  {
    icon: '🃏',
    title: 'Giochi di carte',
    games: [
      'Magic: The Gathering',
      'Pokémon TCG',
      'Yu-Gi-Oh!',
      'Uno',
      'Exploding Kittens',
      'Disney Lorcana',
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
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  function handleCategoryClick(categoryTitle: string) {
    setOpenCategory((currentCategory) =>
      currentCategory === categoryTitle ? null : categoryTitle,
    );
  }

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
            {gameCategories.map((category) => {
              const isOpen = openCategory === category.title;
              const listId = `game-list-${category.title
                .toLowerCase()
                .replaceAll(' ', '-')}`;

              return (
                <article
                  className={`game-category-card ${isOpen ? 'is-open' : ''}`}
                  key={category.title}
                >
                  <button
                    type="button"
                    className="game-category-header"
                    onClick={() => handleCategoryClick(category.title)}
                    aria-expanded={isOpen}
                    aria-controls={listId}
                  >
                    <span className="game-icon" aria-hidden="true">
                      {category.icon}
                    </span>

                    <strong>{category.title}</strong>

                    <span className="game-category-arrow" aria-hidden="true">
                      ⌄
                    </span>
                  </button>

                  <div id={listId} className="game-list-wrapper">
                    <p className="game-list-label">ALCUNI TITOLI</p>

                    <ul className="game-list">
                      {category.games.map((game) => (
                        <li key={game}>{game}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Games;
type MenuCard = {
    title: string;
    description: string;
    label: string;
    image?: string;
    isComingSoon?: boolean;
  };
  
  const menuCards: MenuCard[] = [
    {
      title: 'SMASH BURGER',
      description:
        'Veri smash burger con cheddar fondente, salse artigianali e ingredienti freschi.',
      label: 'DA 10 €',
      image: '/images/burger.jpg',
    },
    {
      title: 'COCKTAIL',
      description:
        'Cocktail su misura preparati dai nostri bartender. Classici rivisitati e creazioni originali.',
      label: 'ARTIGIANALI',
      image: '/images/cocktail.jpg',
    },
    {
      title: 'PIZZERIA',
      description:
        'Tra qualche mese apre la nostra pizzeria. Stay tuned per novità e anteprime!',
      label: 'COMING SOON',
      isComingSoon: true,
    },
  ];
  
  function MenuSection() {
    return (
      <section id="menu" className="menu-section">
        <div className="section-container">
          <p className="section-label">02 / FOOD & DRINKS</p>
  
          <h2 className="section-title menu-title">
            MANGIA BENE,
            <span>BEVI MEGLIO</span>
          </h2>
  
          <div className="menu-cards">
            {menuCards.map((card) => (
              <article
                className={`menu-card ${card.isComingSoon ? 'coming-soon-card' : ''}`}
                key={card.title}
              >
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="menu-card-image"
                  />
                )}
  
                {card.isComingSoon && (
                  <div className="pizza-icon" aria-hidden="true">
                    🍕
                  </div>
                )}
  
                <div className="menu-card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <span className="menu-card-label">{card.label}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default MenuSection;
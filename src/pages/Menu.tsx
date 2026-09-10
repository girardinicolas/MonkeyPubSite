import { Link } from 'react-router-dom';
import './Menu.css';

type MenuItem = {
  name: string;
  description?: string;
  ingredients: string[];
  price: string;
  image?: string;
  tags?: string[];
};

type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
};

const menuCategories: MenuCategory[] = [
  {
    id: 'smash-burger',
    title: 'SMASH BURGER',
    subtitle:
      'Carne smashata, bun tostato e ingredienti selezionati. Tutti i burger sono serviti con patatine.',
    items: [
      {
        name: 'CLASSIC SMASH',
        description:
          'Il nostro burger essenziale: semplice, succoso e con tutto il sapore della carne smashata.',
        ingredients: [
          'Doppio smash di manzo',
          'Cheddar',
          'Lattuga',
          'Cetriolini',
          'Cipolla',
          'Salsa Monkey',
          'Bun brioche',
        ],
        price: '€ 11,00',
        image: '/images/burger.jpg',
        tags: ['BEST SELLER'],
      },
      {
        name: 'BACON SMASH',
        description:
          'Il classico smash burger reso ancora più goloso da bacon croccante e cheddar filante.',
        ingredients: [
          'Doppio smash di manzo',
          'Bacon croccante',
          'Cheddar',
          'Cipolla caramellata',
          'Salsa burger',
          'Bun brioche',
        ],
        price: '€ 12,50',
        image: '/images/burger.jpg',
        tags: ['BACON LOVERS'],
      },
      {
        name: 'BBQ SMASH',
        description:
          'Un burger dal gusto affumicato e deciso, pensato per chi ama le salse intense.',
        ingredients: [
          'Doppio smash di manzo',
          'Cheddar',
          'Bacon croccante',
          'Cipolla fritta',
          'Salsa BBQ',
          'Bun brioche',
        ],
        price: '€ 13,00',
        image: '/images/burger.jpg',
        tags: ['AFFUMICATO'],
      },
      {
        name: 'HOT SMASH',
        description:
          'Piccante, cremoso e irresistibile: il burger per chi non ha paura del fuoco.',
        ingredients: [
          'Doppio smash di manzo',
          'Cheddar',
          'Jalapeños',
          'Cipolla rossa',
          'Salsa spicy',
          'Bun brioche',
        ],
        price: '€ 12,50',
        image: '/images/burger.jpg',
        tags: ['PICANTE'],
      },
      {
        name: 'TRUFFLE SMASH',
        description:
          'Una versione più ricca e aromatica, con crema al tartufo e cipolla croccante.',
        ingredients: [
          'Doppio smash di manzo',
          'Provola affumicata',
          'Crema al tartufo',
          'Cipolla croccante',
          'Rucola',
          'Bun brioche',
        ],
        price: '€ 14,00',
        image: '/images/burger.jpg',
        tags: ['GOURMET'],
      },
      {
        name: 'ITALIAN SMASH',
        description:
          'Un incontro tra il carattere dello smash burger e sapori ispirati alla tradizione italiana.',
        ingredients: [
          'Doppio smash di manzo',
          'Provola',
          'Pomodoro',
          'Rucola',
          'Pesto di basilico',
          'Bun brioche',
        ],
        price: '€ 13,00',
        image: '/images/burger.jpg',
        tags: ['ITALIAN STYLE'],
      },
    ],
  },
  {
    id: 'cocktail',
    title: 'COCKTAIL',
    subtitle:
      'I grandi classici preparati al momento dai nostri bartender.',
    items: [
      {
        name: 'NEGRONI',
        description:
          'Un grande classico italiano dal gusto intenso, amaricante e agrumato.',
        ingredients: [
          'Gin',
          'Campari',
          'Vermouth rosso',
          'Scorza d’arancia',
        ],
        price: '€ 8,00',
        image: '/images/cocktail.jpg',
        tags: ['CLASSICO ITALIANO'],
      },
      {
        name: 'MOJITO',
        description:
          'Fresco, profumato e dissetante: perfetto per iniziare la serata.',
        ingredients: [
          'Rum bianco',
          'Lime fresco',
          'Menta',
          'Zucchero',
          'Soda',
        ],
        price: '€ 8,00',
        image: '/images/cocktail.jpg',
        tags: ['FRESH'],
      },
      {
        name: 'MOSCOW MULE',
        description:
          'Un cocktail vivace e speziato, servito freddo con ginger beer e lime.',
        ingredients: [
          'Vodka',
          'Ginger beer',
          'Lime fresco',
          'Ghiaccio',
        ],
        price: '€ 8,00',
        image: '/images/cocktail.jpg',
        tags: ['SPICY & FRESH'],
      },
      {
        name: 'MARGARITA',
        description:
          'Tequila, lime e note agrumate in un cocktail deciso e iconico.',
        ingredients: [
          'Tequila blanco',
          'Triple sec',
          'Succo di lime',
          'Sale sul bordo',
        ],
        price: '€ 8,50',
        image: '/images/cocktail.jpg',
        tags: ['TEQUILA'],
      },
      {
        name: 'ESPRESSO MARTINI',
        description:
          'Elegante, cremoso e con una nota di caffè: ideale dopo cena.',
        ingredients: [
          'Vodka',
          'Espresso',
          'Liquore al caffè',
          'Sciroppo di zucchero',
        ],
        price: '€ 9,00',
        image: '/images/cocktail.jpg',
        tags: ['AFTER DINNER'],
      },
      {
        name: 'GIN TONIC',
        description:
          'Pulito, aromatico e versatile: un classico intramontabile.',
        ingredients: [
          'Gin',
          'Acqua tonica',
          'Scorza di limone',
          'Bacche di ginepro',
        ],
        price: '€ 8,00',
        image: '/images/cocktail.jpg',
        tags: ['CLASSICO'],
      },
    ],
  },
];

function Menu() {
  return (
    <section className="menu-page">
      <div className="section-container">
        <header className="menu-page-intro">
          <p className="section-label">MENU / FOOD & DRINKS</p>

          <h1 className="section-title menu-page-title">
            IL NOSTRO
            <span>MENU</span>
          </h1>

          <p className="menu-page-description">
            Scopri gli smash burger e i cocktail di Monkey Pub.
          </p>
        </header>

        <div className="menu-navigation" aria-label="Categorie del menu">
          {menuCategories.map((category) => (
            <a key={category.id} href={`#${category.id}`}>
              {category.title}
            </a>
          ))}
        </div>

        {menuCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="menu-category"
            aria-labelledby={`${category.id}-title`}
          >
            <div className="menu-category-heading">
              <p className="section-label">MONKEY PUB</p>

              <h2 id={`${category.id}-title`} className="menu-category-title">
                {category.title}
              </h2>

              <p>{category.subtitle}</p>
            </div>

            <div className="menu-items-grid">
              {category.items.map((item) => (
                <article key={item.name} className="menu-item-card">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="menu-item-image"
                      loading="lazy"
                      decoding="async"
                    />
                  )}

                  <div className="menu-item-content">
                    <div className="menu-item-heading">
                      <h3>{item.name}</h3>
                      <strong>{item.price}</strong>
                    </div>

                    {item.description && (
                      <p className="menu-item-description">{item.description}</p>
                    )}

                    <div className="menu-item-ingredients">
                      <p>INGREDIENTI</p>

                      <ul>
                        {item.ingredients.map((ingredient) => (
                          <li key={ingredient}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>

                    {item.tags && item.tags.length > 0 && (
                      <div className="menu-item-tags">
                        {item.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <div className="menu-page-actions">
          <Link to="/#contatti" className="primary-button">
            INFO E PRENOTAZIONI
          </Link>

          <Link to="/" className="outline-button">
            TORNA ALLA HOME
          </Link>
        </div>

        <p className="menu-page-note">
          Chiedi al personale informazioni su allergeni, disponibilità e
          variazioni del menu.
        </p>
      </div>
    </section>
  );
}

export default Menu;
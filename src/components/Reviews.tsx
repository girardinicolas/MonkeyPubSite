import { Link } from 'react-router-dom';

type Review = {
  text: string;
  author: string;
  date: string;
};

const reviews: Review[] = [
  {
    text: 'Mi sono recato al MonkeyPub e ne sono rimasto colpito. Locale moderno, fornitissimo di giochi da tavolo e perfetto per passare una serata unica.',
    author: 'Valerio Buccioli',
    date: '7 mesi fa',
  },
  {
    text: 'Posto unico per passare una serata diversa, tra giochi da tavolo, giochi di carte o semplicemente un buon panino e un bel drink.',
    author: 'Giuseppe De Rosa',
    date: '7 mesi fa',
  },
  {
    text: 'Locale molto bello e curato, con tante alternative per trascorrere una serata con amici tra cibo, bevande, giochi e partite.',
    author: 'Leonardo Bifetto',
    date: '1 mese fa',
  },
];

function Reviews() {
  return (
    <section id="recensioni" className="reviews-section">
      <div className="section-container">
        <div className="reviews-header">
          <div>
            <p className="section-label">04 / RECENSIONI</p>

            <h2 className="section-title">
              COSA DICONO
              <span>DI NOI</span>
            </h2>
          </div>

          <div className="overall-rating">
            <strong>4.9</strong>

            <div>
              <span className="rating-stars">★★★★★</span>
              <small>53 recensioni Google</small>
            </div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.author}>
              <div className="rating-stars">★★★★★</div>

              <p>“{review.text}”</p>

              <strong>{review.author}</strong>
              <small>{review.date}</small>
            </article>
          ))}
        </div>

        <a
          href="https://www.google.com/search?sca_esv=b3c1e19d2392f166&rlz=1C1CHBF_enIT1150IT1150&sxsrf=APpeQnvoP71RlCtqaXBJxC81PGOxPRPzBg:1788449287827&q=monkeypub+american+bar+pizza+gaming+pub&source=lnms&fbs=ABfTbFWgwlc2MNw7uknLQP9cFo05YtUSpNgn2klEDQSYENClcwAmvzByCsiwlphIPIJX4izqaqVrlbkF8jiCn9a8mLsR3ddwNi_ac2lbeXLgJpCC-eLF0pM7IiQdoW8TmS0PTt0HUin8fcx98FDFF7yYS0XfFR6JQLMTnrkp1JNfsjxCJnzg6Ikwey5-dLAFwyklSsM4LdNP2jjjlcMwLdWl0cPPcUSOGg&sa=X&ved=2ahUKEwigm__j3NKWAxXv9AIHHTRyMHUQ0pQJegQIDRAB&biw=1920&bih=945&dpr=1"
          target="_blank"
          rel="noreferrer"
          className="outline-button"
        >
          Scrivi una recensione
        </a>

        <Link to="/#contatti" className="reviews-contact-link">
          Contatti
        </Link>
      </div>
    </section>
  );
}

export default Reviews;
import './Contact.css'
type OpeningHour = {
    day: string;
    hours: string;
    dayNumber: number;
  };
  
  const openingHours: OpeningHour[] = [
    {
      day: 'Lunedì',
      hours: '17:00 – 00:30',
      dayNumber: 1,
    },
    {
      day: 'Martedì',
      hours: '17:00 – 00:30',
      dayNumber: 2,
    },
    {
      day: 'Mercoledì',
      hours: '17:00 – 00:30',
      dayNumber: 3,
    },
    {
      day: 'Giovedì',
      hours: '17:00 – 00:30',
      dayNumber: 4,
    },
    {
      day: 'Venerdì',
      hours: '17:00 – 02:00',
      dayNumber: 5,
    },
    {
      day: 'Sabato',
      hours: '17:00 – 02:00',
      dayNumber: 6,
    },
    {
      day: 'Domenica',
      hours: '17:00 – 00:30',
      dayNumber: 0,
    },
  ];
  
  function Contact() {
    const currentDay = new Date().getDay();
  
    return (
      <section id="contatti" className="contact-section">
        <div className="section-container">
          <p className="section-label">05 / CONTATTI</p>
  
          <h2 className="section-title">
            VIENI A
            <span>TROVARCI</span>
          </h2>
  
          <div className="contact-layout">
            <div className="contact-information">
              <div>
                <p className="contact-label">INDIRIZZO</p>
                <p>Via Caldarola, 11</p>
                <p>70126 Bari BA</p>
              </div>
  
              <div>
                <p className="contact-label">TELEFONO</p>
                <a href="tel:+393312007350">331 200 7350</a>
              </div>
  
              <div>
                <p className="contact-label">PREZZO MEDIO</p>
                <p>10 – 20 € a persona</p>
              </div>
  
              <div className="social-links">
  
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  TIKTOK
                </a>
  
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  INSTAGRAM
                </a>
              </div>
            </div>
  
            <div className="opening-hours">
              <p className="contact-label">ORARI</p>
  
              {openingHours.map((item) => {
                const isToday = item.dayNumber === currentDay;
  
                return (
                  <div
                    className={`opening-hour ${
                      isToday ? 'opening-hour-today' : ''
                    }`}
                    key={item.day}
                  >
                    <span>
                      {item.day}
                      {isToday && ' · OGGI'}
                    </span>
  
                    <strong>{item.hours}</strong>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;
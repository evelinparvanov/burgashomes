import './InfoSection.css'; // Make sure to create the CSS file for styling

const InfoSection = () => {
  const infoCards = [
    {
      image: '/src/assets/prehouse1.jpeg',
      title: 'Изберете вашия план',
      description: 'Бургас Хоумс предлага персонализирани планове за бунгала, двуетажни къщи, дуплекси и още много други!',
    },
    {
      image: '/src/assets/prehouse2.jpg',
      title: 'Сглобяеми къщи',
      description: 'Получете предварително изрязани подови ферми, панелирани стени, покриви, прозорци и екстериорна довършителна работа.',
    },
    {
      image: '/src/assets/prehouse3.jpeg',
      title: 'Намерете дилър',
      description: 'Нашата дилърска мрежа предлага икономически ефективни комплекти за жилищни и търговски проекти в България.',
    },
  ];

  return (
    <section className="info-section">
      <h1 className="info-section__title">Защо сглобяема къща?</h1>
      <div className="info-section__cards">
        {infoCards.map((card, index) => (
          <div key={index} className="info-card">
            <img src={card.image} alt={card.title} className="info-card__image" />
            <h3 className="info-card__title">{card.title}</h3>
            <p className="info-card__description">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;

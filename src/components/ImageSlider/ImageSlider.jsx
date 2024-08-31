import { useEffect, useState } from 'react';
import './ImageSlider.css'; // Ensure this file contains the updated CSS styles

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      // title: 'Строителни дейности',
      link: '/uslugi/',
      image: '/src/assets/prehouse1.jpeg',
      description: 'Вашият партньор в строителството на мечтаните домове.'
    },
    {
      // title: 'Ремонтни услуги',
      link: '/uslugi/',
      image: '/src/assets/prehouse2.jpg',
      description: 'Ние предлагаме първокласни ремонтни услуги за вашия дом.'
    },
    {
      // title: 'Проектиране и дизайн',
      link: '/uslugi/',
      image: '/src/assets/prehouse3.jpeg',
      description: 'Индивидуални проекти и дизайн за уникални жилища.'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [slides.length]);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay">
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <div className="slide-bottom-center">
                <p>{slide.description}</p>
                <a href={slide.link} className="slider-button">Научи повече</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;

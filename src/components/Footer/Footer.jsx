import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <a href="/" className="logo">
            <img
              src="/burgas_homes_logo_noBG_SVG.svg"
              alt="Burgas Homes logo"
            />
          </a>
          <p className="footer-text">
            Ние предлагаме висококачествени сглобяеми къщи, които съчетават
            комфорт и устойчивост.
          </p>
          <div className="socials">
            <a href="mailto:office@burgasstroi.com">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:+359 898 555 246">
              <i className="fas fa-phone"></i>
            </a>
            <a href="">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Нашите Услуги</h2>
          <ul>
            <li>
              <a href="#">Проектиране на сглобяеми къщи</a>
            </li>
            <li>
              <a href="#">Производство на сглобяеми къщи</a>
            </li>
            <li>
              <a href="#">Монтаж на сглобяеми къщи</a>
            </li>
            <li>
              <a href="#">Интериорен дизайн</a>
            </li>
            <li>
              <a href="#">Консултации и поддръжка</a>
            </li>
          </ul>
        </div>

        <div className="footer-section links">
          <h2>Навигация</h2>
          <ul>
            <li>
              <a href="/">Начало</a>
            </li>
            <li>
              <a href="/prefab-houses">Сглобяеми къщи</a>
            </li>
            <li>
              <a href="/about">За нас</a>
            </li>
            <li>
              <a href="/contact">Контакти</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact-form">
          <h2>Контакти</h2>
          <div className="contact-info">
            <p>
              <i className="fas fa-envelope"></i>
              <a href="mailto:office@burgasstroi.com">office@burgasstroi.com</a>
            </p>
            <p>
              <i className="fas fa-phone"></i>
              <a href="tel:+359 898 555 246">+359 898 555 246</a>
            </p>
            <p>
              <i className="fab fa-facebook"></i>
              <a href="">Burgas Homes</a>
            </p>
            <p>
              <i className="fab fa-instagram"></i>
              <a href="">Burgas Homes</a>
            </p>
            <p>
              <i className="fab fa-whatsapp"></i>
              <a href="">Burgas Homes</a>
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="footer-bottom">
        <a href="/">
          &copy; {new Date().getFullYear()} Сглобяеми къщи Burgas Homes. Всички
          права запазени.
        </a>
        <div className="footer-links">
          <a href="/general-conditions">Общи условия в сайта</a>
        </div>
        <div className="footer-links">
          <a href="/privacy-policy">Политика за лични данни</a>
        </div>
        <div className="footer-links">
          <a href="tel:+359877226994">
            Изработка от <span>Евелин Първанов</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

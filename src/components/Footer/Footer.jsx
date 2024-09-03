import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <Link to="/" className="logo">
            <img
              src="/burgas_homes_logo_noBG_SVG.svg"
              alt="Burgas Homes logo"
            />
          </Link>
          <p className="footer-text">
            Ние предлагаме висококачествени сглобяеми къщи, които съчетават
            комфорт и устойчивост.
          </p>
          <div className="socials">
            <a href="mailto:office@burgasstroi.com">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:+359898555246">
              <i className="fas fa-phone"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/+359898555246" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Нашите Услуги</h2>
          <ul>
            <li>
              <Link to="/services/service1">Проектиране</Link>
            </li>
            <li>
              <Link to="/services/service2">Фундамент</Link>
            </li>
            <li>
              <Link to="/services/service3">Груб строеж</Link>
            </li>
            <li>
              <Link to="/services/service4">Покриви</Link>
            </li>
            <li>
              <Link to="/services/service5">Довършителни дейности</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section links">
          <h2>Навигация</h2>
          <ul>
            <li>
              <Link to="/">Начало</Link>
            </li>
            <li>
              <Link to="/prefab-houses">Дървени сглобяеми къщи</Link>
            </li>
            <li>
              <Link to="/technology">Технология</Link>
            </li>
            <li>
              <Link to="/prices">Цени</Link>
            </li>
            <li>
              <Link to="/about">За нас</Link>
            </li>
            <li>
              <Link to="/contact">Контакти</Link>
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
              <a href="tel:+359898555246">+359 898 555 246</a>
            </p>
            <p>
              <i className="fab fa-facebook-f"></i>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Burgas Homes</a>
            </p>
            <p>
              <i className="fab fa-instagram"></i>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Burgas Homes</a>
            </p>
            <p>
              <i className="fab fa-whatsapp"></i>
              <a href="https://wa.me/+359898555246" target="_blank" rel="noopener noreferrer">Burgas Homes</a>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <Link to="/">
          &copy; {new Date().getFullYear()} Сглобяеми къщи Burgas Homes. Всички
          права запазени.
        </Link>
        <div className="footer-links">
          <Link to="/general-conditions">Общи условия в сайта</Link>
        </div>
        <div className="footer-links">
          <Link to="/privacy-policy">Политика за лични данни</Link>
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

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
import "../../index.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isWhiteBackgroundPage =
    location.pathname === "/general-conditions" ||
    location.pathname === "/privacy-policy";

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      {/* Top Navigation with Contact Info and Social Links */}
      <nav className="top-navigation">
        <div className="contact-info-nav">
          <a className="contact-link" href="mailto:office@burgasstroi.com">
            <img src="/src/assets/email.png" alt="Email" />
            <span>office@burgasstroi.com</span>
          </a>
          <a className="contact-link" href="tel:+359898555246">
            <img src="/src/assets/telephone.png" alt="Phone" />
            <span>+359 898 555 246</span>
          </a>
        </div>
        <div className="social-media">
          <a href="https://facebook.com">
            <img src="/src/assets/facebook.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com">
            <img src="/src/assets/instagram.png" alt="Instagram" />
          </a>
        </div>
      </nav>

      {/* Main Navigation */}
      <nav
        className={`main-navigation ${
          isWhiteBackgroundPage ? "white-background" : ""
        } ${isScrolled ? "scrolled" : ""}`}
      >
        <a href="/">
          <img
            className="logo"
            src="/burgas_homes_logo_noBG_SVG.svg"
            alt="Logo"
          />
        </a>
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="/">НАЧАЛО</a>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">
              ДЪРВЕНИ СГЛОБЯЕМИ КЪЩИ
              <span className="dropdown-arrow">▼</span>
            </a>
            <ul className="dropdown-content">
              <li>
                <a href="/wooden-houses/type1">Къщи до 100 м2</a>
              </li>
              <li>
                <a href="/wooden-houses/type2">Къщи над 100 м2</a>
              </li>
              <li>
                <a href="/wooden-houses/type3">Етапи на изграждане</a>
              </li>
              <li>
                <a href="/wooden-houses/type3">Проекти</a>
              </li>
              <li>
                <a href="/wooden-houses/type3">Гаранция</a>
              </li>
              <li>
                <a href="/wooden-houses/type3">Документи</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">
              УСЛУГИ
              <span className="dropdown-arrow">▼</span>
            </a>
            <ul className="dropdown-content">
              <li>
                <a href="/services/service1">Проектиране</a>
              </li>
              <li>
                <a href="/services/service2">Фундамент</a>
              </li>
              <li>
                <a href="/services/service3">Груб строеж</a>
              </li>
              <li>
                <a href="/services/service3">Покриви</a>
              </li>
              <li>
                <a href="/services/service3">Довършителни дейности</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/technology">ТЕХНОЛОГИИ</a>
          </li>
          <li>
            <a href="/prices">ЦЕНИ</a>
          </li>
          <li>
            <a href="/about">ЗА НАС</a>
          </li>
          <li>
            <a href="/contact">КОНТАКТИ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

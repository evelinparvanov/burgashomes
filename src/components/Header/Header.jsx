import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
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
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/facebook.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
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
        <Link to="/">
          <img
            className="logo"
            src="/burgas_homes_logo_noBG_SVG.svg"
            alt="Logo"
          />
        </Link>
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
            <Link to="/">НАЧАЛО</Link>
          </li>
          <li className="dropdown">
            <Link to="/prefab-houses" className="dropbtn">
              ДЪРВЕНИ СГЛОБЯЕМИ КЪЩИ
              <span className="dropdown-arrow">▼</span>
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/wooden-houses/type1">Къщи до 100 м2</Link>
              </li>
              <li>
                <Link to="/wooden-houses/type2">Къщи над 100 м2</Link>
              </li>
              <li>
                <Link to="/wooden-houses/type3">Етапи на изграждане</Link>
              </li>
              <li>
                <Link to="/wooden-houses/type3">Проекти</Link>
              </li>
              <li>
                <Link to="/wooden-houses/type3">Гаранция</Link>
              </li>
              <li>
                <Link to="/wooden-houses/type3">Документи</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="/services" className="dropbtn">
              УСЛУГИ
              <span className="dropdown-arrow">▼</span>
            </Link>
            <ul className="dropdown-content">
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
                <Link to="/services/service3">Покриви</Link>
              </li>
              <li>
                <Link to="/services/service3">Довършителни дейности</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/technology">ТЕХНОЛОГИЯ</Link>
          </li>
          <li>
            <Link to="/prices">ЦЕНИ</Link>
          </li>
          <li>
            <Link to="/about">ЗА НАС</Link>
          </li>
          <li>
            <Link to="/contact">КОНТАКТИ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

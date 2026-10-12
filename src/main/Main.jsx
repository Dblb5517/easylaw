import { Link } from "react-router-dom";
import "./main.scss";
import { useTranslation } from "react-i18next";
import UK from "../images/uk_united_kingdom_britain_british_flag-512.webp";
import ES from "../images/spainflagni.webp";
import { useState, useEffect } from "react";

function Main() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [activeLang, setActiveLang] = useState(i18n.language || "en");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActiveLang(lng);
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <Link to="/" className="logo-link">
          <div className="logo-mark">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2L2 8V12C2 19.73 7.11 26.81 14 28C20.89 26.81 26 19.73 26 12V8L14 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M10 14L13 17L18 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="logo-text">Easy<span className="logo-accent">Law</span></span>
        </Link>

        <div className="header-center">
          <p className="tagline">{t("slogan")}</p>
        </div>

        <div className="header-actions">
          <div className="lang-switcher">
            <button
              className={`lang-btn ${activeLang === "en" ? "active" : ""}`}
              onClick={() => changeLanguage("en")}
              aria-label="Switch to English"
            >
              <img src={UK} alt="English" />
              <span>EN</span>
            </button>
            <button
              className={`lang-btn ${activeLang === "es" ? "active" : ""}`}
              onClick={() => changeLanguage("es")}
              aria-label="Cambiar a Español"
            >
              <img src={ES} alt="Español" />
              <span>ES</span>
            </button>
          </div>
        </div>
      </div>

      <div className="header-disclaimer">
        <div className="disclaimer-inner">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span>{t("header_warning")}</span>
        </div>
      </div>
    </header>
  );
}

export default Main;

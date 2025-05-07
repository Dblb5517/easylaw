import { Link } from "react-router-dom";
import "./main.scss";
import { useTranslation } from "react-i18next";
import UK from "../images/uk_united_kingdom_britain_british_flag-512.webp";
import ES from "../images/spainflagni.webp";

function Main() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="mainPage">
      <Link to="/">
        <div className="headerPage"></div>
      </Link>
      <div className="mainUp">
        <h1>{t("slogan")}</h1>
        <h3>{t("header_warning")}</h3>
      </div>
      <div className="flags">
        <img src={UK} alt="uk" onClick={() => changeLanguage("en")} />
        <img src={ES} alt="es" onClick={() => changeLanguage("es")} />
      </div>
      <div className="mainDown"></div>
    </div>
  );
}

export default Main;

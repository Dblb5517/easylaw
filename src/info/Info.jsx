import { Link } from "react-router-dom";
import "./info.scss";
import { data } from "../data";
import { useTranslation } from "react-i18next";

function Info() {
  const { t } = useTranslation();

  return (
    <div className="info-container">
      {Object.keys(data).map((item, i) => {
        return (
          <Link to={`/inside/${item}`} key={i}>
            <div className="info">
              <div className="text">
                <span>{t(item)}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Info;

import { Link } from "react-router-dom";
import "./info.scss";
import { data } from "../data";

function Info() {
  return (
    <div className="info-container">
      {Object.keys(data).map((item, i) => {
        return (
          <Link to={`/inside/${item}`}>
            <div className="info" key={i}>
              <div className="text">
                <span>{item}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Info;

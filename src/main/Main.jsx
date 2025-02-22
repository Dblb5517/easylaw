import { Link } from "react-router-dom";
import "./main.scss";

function Main() {
  return (
    <div className="mainPage">
      <Link to="/">
        <div className="headerPage"></div>
      </Link>
      <div className="mainUp">
        <h1>We are your guide in Law!</h1>
      </div>
      <div className="mainDown"></div>
    </div>
  );
}

export default Main;

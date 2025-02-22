import { useParams, Link } from "react-router-dom";
import "./infoInside.scss";
import { data } from "../data";

function InfoInside() {
  const { page } = useParams();
  const videoLinks = {
    "Privacy and Data Protection":
      "https://www.youtube.com/embed/ZNEPaGFApX4?si=CZUlQetDc6AeBPAB",
    "Healthcare Rights": "https://www.youtube.com/embed/DublqkOSBBA?si=KCf-hJ8E0rXXUGiK",
    "Family Roles": "https://www.youtube.com/embed/u4IHqAKsbrA?si=4k9nrqdStCXFG1zL",
    "Hunting Laws": "https://www.youtube.com/embed/1FsGMO-o7mQ?si=YyR3mOqRM4gcC2n4",
    "Drugs and Alcohol": "https://www.youtube.com/embed/1S_X1dl8BRI?si=3D6GMsVbUQ3AFUdk",
    "Workers right": "https://www.youtube.com/embed/lP-y9_NXVAU?si=uLN9sPELUzb25Lax",
    "Healthcare Roles": "https://www.youtube.com/embed/w1MU6Y48ma4?si=k7NbZooPEpjPSLAD",
    "Child and parenting laws in the U.S.":
      "https://www.youtube.com/embed/UqTaoxILNJU?si=di473yB6G4LbZ7KI",
    Immigration: "https://www.youtube.com/embed/8fAGGJoC8BA?si=fEHA1QBlNAYYWQSa",
    "Driving Law": "https://www.youtube.com/embed/xmNYLKYcdrw?si=q90K7PZdIFsoxSHB",
    "Work Law": "https://www.youtube.com/embed/dLF72MmkuCE?si=BlYbRnPye76e0ZOg",
  };

  return (
    <div className="infoInside">
      <h1>{page}</h1>
      {data[page].paragraphs.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
      <div className="back-button">
        <Link to="/">
          <button>Back to Menu</button>
        </Link>
      </div>
      {videoLinks[page] && (
        <div className="video-container">
          <iframe
           width="80%"
           height="600"
           src={videoLinks[page]}
           title={page}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default InfoInside;

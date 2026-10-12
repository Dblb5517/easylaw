import { useParams, Link } from "react-router-dom";
import "./infoInside.scss";
import { data } from "../data";
import { useTranslation } from "react-i18next";

function InfoInside() {
  const { t } = useTranslation();
  const { page } = useParams();

  const videoLinks = {
    "Privacy and Data Protection Law":
      "https://www.youtube.com/embed/ZNEPaGFApX4?si=CZUlQetDc6AeBPAB",
    "Healthcare Law":
      "https://www.youtube.com/embed/DublqkOSBBA?si=KCf-hJ8E0rXXUGiK",
    "Family Roles":
      "https://www.youtube.com/embed/u4IHqAKsbrA?si=4k9nrqdStCXFG1zL",
    "Hunting Laws":
      "https://www.youtube.com/embed/1FsGMO-o7mQ?si=YyR3mOqRM4gcC2n4",
    "Substance Abuse":
      "https://www.youtube.com/embed/1S_X1dl8BRI?si=3D6GMsVbUQ3AFUdk",
    "Workers right":
      "https://www.youtube.com/embed/lP-y9_NXVAU?si=uLN9sPELUzb25Lax",
    "Child and parenting laws in the U.S.":
      "https://www.youtube.com/embed/UqTaoxILNJU?si=di473yB6G4LbZ7KI",
    "Immigration Law":
      "https://www.youtube.com/embed/8fAGGJoC8BA?si=fEHA1QBlNAYYWQSa",
    "Traffic Code":
      "https://www.youtube.com/embed/xmNYLKYcdrw?si=q90K7PZdIFsoxSHB",
    "Work Law":
      "https://www.youtube.com/embed/dLF72MmkuCE?si=BlYbRnPye76e0ZOg",
  };

  // Guard against invalid pages
  if (!data[page]) {
    return (
      <section className="detail-section">
        <div className="detail-container">
          <h1 className="detail-title">Page not found</h1>
          <Link to="/" className="back-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            <span>{t("Back to Menu")}</span>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="detail-section">
      <div className="detail-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span>{t("Back to Menu")}</span>
          </Link>
          <svg className="breadcrumb-separator" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
          <span className="breadcrumb-current">{t(page)}</span>
        </nav>

        {/* Title */}
        <header className="detail-header">
          <h1 className="detail-title">{t(page)}</h1>
          <div className="title-decoration"></div>
        </header>

        {/* Content paragraphs */}
        <div className="detail-content">
          {data[page].paragraphs.map((key, index) => (
            <div key={index} className="content-block" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="block-indicator">
                <span className="block-number">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <p className="block-text">{t(key)}</p>
            </div>
          ))}
        </div>

        {/* Video section */}
        {videoLinks[page] && (
          <div className="video-section">
            <h2 className="video-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              {t("video_title") !== "video_title" ? t("video_title") : "Related Video"}
            </h2>
            <div className="video-wrapper">
              <iframe
                src={videoLinks[page]}
                title={page}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Back button */}
        <div className="detail-footer">
          <Link to="/" className="back-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            <span>{t("Back to Menu")}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default InfoInside;

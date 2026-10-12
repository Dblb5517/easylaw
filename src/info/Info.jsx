import { Link } from "react-router-dom";
import "./info.scss";
import { data } from "../data";
import { useTranslation } from "react-i18next";

// SVG icons for each law category
const categoryIcons = {
  "Work Law": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
  "Immigration Law": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  "Traffic Code": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2" ry="2"/><polygon points="16 8 20 4 20 16 16 12 16 8"/><circle cx="9" cy="22" r="1"/><circle cx="4" cy="22" r="1"/>
      <path d="M7 17h3l2 5H4l2-5z"/>
    </svg>
  ),
  "Workers right": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  "Substance Abuse": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
      <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  ),
  "Child and parenting laws in the U.S.": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  "Healthcare Law": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  "Family Roles": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  "Hunting Laws": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  "Privacy and Data Protection Law": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
};

// Accent colors per category for subtle variety
const categoryColors = {
  "Work Law": "#3b82f6",
  "Immigration Law": "#8b5cf6",
  "Traffic Code": "#f59e0b",
  "Workers right": "#10b981",
  "Substance Abuse": "#ef4444",
  "Child and parenting laws in the U.S.": "#ec4899",
  "Healthcare Law": "#06b6d4",
  "Family Roles": "#f97316",
  "Hunting Laws": "#84cc16",
  "Privacy and Data Protection Law": "#6366f1",
};

function Info() {
  const { t } = useTranslation();

  return (
    <section className="info-section">
      <div className="info-hero">
        <h1 className="info-title">
          {t("slogan")}
        </h1>
        <p className="info-subtitle">
          {t("hero_subtitle") !== "hero_subtitle" 
            ? t("hero_subtitle") 
            : "Explore essential legal topics explained in clear, plain language."
          }
        </p>
      </div>

      <div className="info-grid">
        {Object.keys(data).map((item, i) => {
          const color = categoryColors[item] || "#c9a84c";
          return (
            <Link to={`/inside/${item}`} key={i} className="card-link">
              <article 
                className="law-card"
                style={{ '--card-accent': color }}
              >
                <div className="card-icon-wrapper">
                  <div className="card-icon">
                    {categoryIcons[item] || (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                      </svg>
                    )}
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{t(item)}</h3>
                  <span className="card-cta">
                    {t("learn_more") !== "learn_more" ? t("learn_more") : "Learn more"}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                </div>
                <div className="card-shine"></div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Info;

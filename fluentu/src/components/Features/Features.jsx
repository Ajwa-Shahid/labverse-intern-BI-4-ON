import React from "react";
import "./Features.css";

const features = [
  {
    id: 1,
    icon: "/images/icons/InteractiveSubtitles.jpg",
    title: "Interactive subtitles",
  },
  {
    id: 2,
    icon: "/images/icons/2.jpg",
    title: "Crafted by experts",
  },
  {
    id: 3,
    icon: "/images/icons/3.jpg",
    title: "Grammar explanations",
  },
  {
    id: 4,
    icon: "/images/icons/4.jpg",
    title: "Review with spaced repetition",
  },
  {
    id: 5,
    icon: "/images/icons/5.jpg",
    title: "Personalized quiz and exercises",
  },
  {
    id: 6,
    icon: "/images/icons/6.jpg",
    title: "Beginner-friendly tv show clips & movie scenes",
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <div className="section-indicator"></div>
          <h2>Engaging Self-paced Language Courses</h2>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-item">
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

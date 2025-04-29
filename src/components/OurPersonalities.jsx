import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurPersonalities.css";

const OurPersonalities = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  const videos = [
    {
      id: "OO2-TINI01U",
      title: "Meet the Faces of Youth Engage",
    },
    {
      id: "hyXIn9Osx84",
      title: "The Drive Behind Our Team",
    },
    {
      id: "lUKu7zULEN8",
      title: "Inspiring Youth Stories",
    },
    {
      id: "2CM9zgSr8wY",
      title: "What Makes Us Unique",
    },
  ];

  return (
    <section className="personalities-section" id="personalities">
      <div className="container">
        <div className="section-header" data-aos="fade-down">
          <div className="header-content">
            <img src="/images/yelogo.png" alt="Logo" className="logo" />
            <div>
              <h2>Our Personalities</h2>
              <div className="underline"></div>
            </div>
          </div>
        </div>

        <div className="videos-grid">
          {videos.map((video, index) => (
            <div className="video-card" key={video.id} data-aos="zoom-in-up">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className="video-title">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPersonalities;

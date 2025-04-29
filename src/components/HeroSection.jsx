import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const images = [
    "/images/ye.1.png",
    "/images/ye.6.png.png",
    "/images/ye.3.png",
    "/images/ye.4.png",
    "/images/ye.5.png",
  ];

  const texts = [
    "Empowering the Next Generation",
    "Join Our Mission to Create Change",
    "Make a Difference in Your Community",
    "Youth Engaged, Future Strengthened",
    "Together, We Can Achieve More",
  ];

  const [currentText, setCurrentText] = useState(texts[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeEffect, setFadeEffect] = useState(false);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = texts.indexOf(prevText);
        return texts[(currentIndex + 1) % texts.length];
      });

      setFadeEffect(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeEffect(false);
      }, 1500); // Wait 1.5 seconds before changing the image (fade-out duration)
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(textInterval);
  }, []);

  return (
    <header className="hero-section">
      {/* Background images with fade-in/fade-out effect */}
      <div className="background-container">
        {images.map((url, idx) => (
          <div
            key={idx}
            style={{
              backgroundImage: `url(${url})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              opacity: currentImageIndex === idx && !fadeEffect ? 1 : 0,
              transition: "opacity 1.5s ease-in-out",
              height: "100vh",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        ))}
      </div>

      {/* Text and Call-to-Action */}
      <div className="text-overlay">
        <h1 data-aos="fade-up" className="display-4 fw-bold">
          Welcome to Youth Engage
        </h1>
        <p data-aos="fade-up" data-aos-delay="300" className="lead mt-3">
          {currentText}
        </p>
        <p data-aos="fade-up" data-aos-delay="600" className="lead mt-3">
          Join our mission to create change.
        </p>
        <a href="#contact" className="btn btn-primary mt-4" data-aos="fade-up" data-aos-delay="900">
          Get Involved
        </a>
      </div>

      <style jsx="true">{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }

        .background-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
        }

        .text-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 20px;
        }

        @media only screen and (max-width: 768px) {
          .background-container {
            height: 100vh;
          }
        }
      `}</style>
    </header>
  );
}

export default HeroSection;

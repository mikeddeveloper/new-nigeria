import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Vision.css";

const Vision = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
      offset: 120,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="vision-section" id="vision">
      <div className="container">
        <div className="section-header" data-aos="fade-down">
          <h2>Our Vision</h2>
          <div className="underline"></div>
        </div>

        <div className="vision-content">
          <div className="text-section" data-aos="fade-up">
            <h3>Inspiring a Generation</h3>
            <p>
              At Youth Engage, our vision is to ignite a movement of young leaders who are bold, passionate,
              and driven to create positive change in their communities and beyond. We envision a future where
              every youth is empowered, confident, and capable of shaping a better tomorrow.
            </p>
            <div className="logo-box" data-aos="zoom-in">
              <img src="/images/yelogo.png" alt="Youth Engage Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Mission.css";

const Mission = () => {
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
    <section className="mission-section" id="mission">
      <div className="container">
        <div className="section-header" data-aos="fade-down">
          <h2>Our Mission</h2>
          <div className="underline"></div>
        </div>

        <div className="mission-content">
          <div className="text-section" data-aos="fade-right">
            <h3>Empowering Youth Everywhere</h3>
            <p>
            Youth Engage therefore seeks to get our youths and teens to meet our 
            eminent and accomplished citizens and have them share their success 
            stories, especially the challenges they surmounted to get to the top.
            </p>
            <div className="logo-box" data-aos="zoom-in">
              <img src="/images/yelogo.png" alt="Youth Engage Logo" />
            </div>
          </div>

          <div className="image-section" data-aos="fade-left">
            <img src="/images/mission.png" alt="Our Mission in Action" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Mission;
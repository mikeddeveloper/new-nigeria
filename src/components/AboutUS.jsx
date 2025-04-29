import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutUs.css";

const AboutUs = () => {
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
    <section className="about-us-section" id="about">
      <div className="container">
        <div className="section-header" data-aos="fade-down">
          <h2>About Us</h2>
          <div className="underline"></div>
        </div>

        <div className="about-content">
          <div className="text-section" data-aos="fade-right">
            <h3>Who We Are</h3>
            <p>
              Youth Engage is a passionate movement focused on nurturing and empowering the next generation.
              We believe every youth carries incredible potential, and through mentorship, events, and growth 
              opportunities, we help them unlock it. Together, we are building leaders, creators, and changemakers!
            </p>
            <div className="logo-box" data-aos="zoom-in">
              <img src="/images/yelogo.png" alt="Youth Engage Logo" />
            </div>
          </div>

          <div className="image-section" data-aos="fade-left">
            <img src="/images/ye.4.png" alt="Our Team" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
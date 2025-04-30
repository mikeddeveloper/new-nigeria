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
            Youth Engage is a Television Magazine programme concept, borne out of the minds of researching the minds of various youths in our society, to provide a platform for the transfer and inculcation of societal core values with a view  to securing a better future for our society.
            
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
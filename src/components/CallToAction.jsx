
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CallToAction.css";

const CallToAction = () => {
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
    <section className="cta-section" id="cta">
      <div className="container">
        <div className="cta-content" data-aos="zoom-in">
          <h2>Ready to Make a Difference?</h2>
          <p>Join Youth Engage today and become a catalyst for change in your community and beyond.</p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-primary">Join Us</a>
            <a href="#" className="btn btn-secondary">Volunteer</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Testimonial.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Youth Engage changed my life. The mentorship and opportunities helped me discover who I am and what I can achieve.",
      image: "/images/obafemi.jpg",
    },
    {
      name: "David Emmanuel",
      text: "Being a part of Youth Engage opened doors for me. I’ve grown in confidence, skills, and leadership.",
      image: "/images/funke.jpg",
    },
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header" data-aos="fade-down">
          <h2>Testimonials</h2>
          <div className="underline"></div>
        </div>

        <div className="testimonials-wrapper">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index} data-aos="zoom-in-up">
              <img src={testimonial.image} alt={testimonial.name} />
              <p className="testimonial-text">“{testimonial.text}”</p>
              <h4 className="testimonial-name">— {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

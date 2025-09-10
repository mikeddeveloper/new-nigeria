import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Join.css";
import { FaInstagram, FaTwitter, FaYoutube, FaTelegramPlane } from "react-icons/fa";

const Join = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="movement-section">
      <div className="container">
        <h2 className="movement-title" data-aos="fade-down">
          Join the Movement 🚀
        </h2>
        <p className="movement-subtitle" data-aos="fade-up">
          Become part of our growing community by connecting with us on all platforms.
        </p>

        <div className="movement-grid">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="movement-card"
            data-aos="zoom-in"
          >
            <FaInstagram className="movement-icon insta" />
            <h3>Instagram</h3>
            <p>Follow us for updates & inspiration.</p>
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="movement-card"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <FaTwitter className="movement-icon twitter" />
            <h3>Twitter</h3>
            <p>Stay updated with real-time news.</p>
          </a>

          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="movement-card"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaYoutube className="movement-icon youtube" />
            <h3>YouTube</h3>
            <p>Watch powerful stories and events.</p>
          </a>

          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="movement-card"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <FaTelegramPlane className="movement-icon telegram" />
            <h3>Telegram</h3>
            <p>Join the conversation in our community.</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Join;

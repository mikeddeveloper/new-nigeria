import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
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
    <footer className="footer-section" id="contact">
      <div className="footer-container">
        <div className="footer-top" data-aos="fade-up">
          <div className="footer-logo">
            <img src="/images/yelogo.png" alt="Youth Engage Logo" />
            <h3>Youth Engage</h3>
          </div>

          <div className="footer-contact">
            <h4>Our Address</h4>
            <p>19A Aina Eleko by Cantonment Maryla, Lagos</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://www.youtube.com/@youthengageprogramme" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="footer-map" data-aos="zoom-in-up">
          <iframe
            title="Youth Engage Map"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5248.187839700587!2d3.3609849209615117!3d6.569309944297284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92767bc00001%3A0xebcd40c92f2b682c!2s19A%20Aina%20Eleko%20St%2C%20Ikeja%2C%20Lagos%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1756979150651!5m2!1sen!2sng"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="footer-bottom" data-aos="fade-up">
          <p>&copy; {new Date().getFullYear()} Youth Engage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

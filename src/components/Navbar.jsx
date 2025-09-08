import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);

    const collapse = document.getElementById("navbarNav");
    if (collapse && collapse.classList.contains("show")) {
      collapse.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container d-flex align-items-center">
        <div className="d-flex align-items-center">
          <img
            src="/images/yelogo.png"
            alt="Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <span className="navbar-brand mb-0 h1 fs-5">
            Youth Engage Programme
          </span>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Gallery Page (instead of Home) */}
            <li className="nav-item">
              <RouterLink
                className={`nav-link small-text ${
                  activeLink === "gallery" ? "active" : ""
                }`}
                to="/gallery"
                onClick={() => handleLinkClick("gallery")}
              >
                Gallery
              </RouterLink>
            </li>

            {/* About Us - stays same-page section */}
            <li className="nav-item">
              <a
                href="#about"
                className={`nav-link small-text ${
                  activeLink === "about" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("about")}
              >
                About Us
              </a>
            </li>

            {/* Our Team - new page */}
            <li className="nav-item">
              <RouterLink
                className={`nav-link small-text ${
                  activeLink === "team" ? "active" : ""
                }`}
                to="/team"
                onClick={() => handleLinkClick("team")}
              >
                Our Team
              </RouterLink>
            </li>

            {/* Contact - stays same-page section */}
            <li className="nav-item">
              <a
                href="#contact"
                className={`nav-link small-text ${
                  activeLink === "contact" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("contact")}
              >
                Contact
              </a>
            </li>

            {/* Events - new page */}
            <li className="nav-item">
              <RouterLink
                className={`nav-link small-text ${
                  activeLink === "events" ? "active" : ""
                }`}
                to="/events"
                onClick={() => handleLinkClick("events")}
              >
                Events
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);

    // Close the collapse on mobile
    const collapse = document.getElementById("navbarNav");
    if (collapse.classList.contains("show")) {
      collapse.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container d-flex align-items-center">
        <div className="d-flex align-items-center">
          <img src="/images/yelogo.png" alt="Logo" width="40" height="40" className="me-2" />
          <span className="navbar-brand mb-0 h1 fs-5">Youth Engage</span>
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
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About Us" },
              { id: "event", label: "Events" },
              { id: "team", label: "Our Team" },
              { id: "contact", label: "Contact" },
            ].map((link) => (
              <li className="nav-item" key={link.id}>
                <Link
                  className={`nav-link small-text ${activeLink === link.id ? "active" : ""}`}
                  to={link.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

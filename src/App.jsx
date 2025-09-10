import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUS";
import Vision from "./components/Vision";
import Mission from "./components/Mission";
import Personalities from "./components/Personalities";
import Testimonials from "./components/Testimonial";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

import Eventpages from "./components/Eventpages";
import GalleryPage from "./components/GalleryPage";
import Team from "./components/Team";
import VolunteerForm from "./components/VolunteerForm"; // ✅ New Volunteer form page
import Join from "./components/Join";


function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Vision />
      <Mission />
      <Personalities />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Default homepage (with scroll sections) */}
        <Route path="/" element={<HomePage />} />

        {/* New pages */}
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Eventpages />} />
        <Route path="/volunteer" element={<VolunteerForm />} /> {/* ✅ New route */}
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;

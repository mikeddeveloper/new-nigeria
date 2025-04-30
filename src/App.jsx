import React, { useEffect } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUS";
import Vision from "./components/Vision";
import Mission from "./components/Mission";
import OurPersonalities from "./components/OurPersonalities";
import Testimonials from "./components/Testimonial";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
function App() {
  
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Vision />
      <Mission />
      <OurPersonalities />
      <Testimonials />
      <CallToAction />
      <Footer />
  
    {/* Add other components here */}
    </>
  );
}

export default App;

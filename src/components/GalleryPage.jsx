import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./GalleryPage.css";

const images = [
  { src: "/images/fela1.jpg", caption: "Moments of Joy" },
  { src: "/images/fela2.jpg", caption: "Beautiful Memories" },
  { src: "/images/fela3.jpg", caption: "Capturing Love" },
  { src: "/images/fela4.jpg", caption: "Cherished Times" },
  { src: "/images/fela5.jpg", caption: "Golden Hours" },
  { src: "/images/fela6.jpg", caption: "Unforgettable Smiles" },
  { src: "/images/fela7.jpg", caption: "Radiant Evenings" },
  { src: "/images/fela8.jpg", caption: "Timeless Bonds" },
];

const aosEffects = [
  "fade-up",
  "fade-down",
  "zoom-in",
  "zoom-in-up",
  "flip-left",
  "flip-right",
  "fade-up-right",
  "fade-up-left",
];

const GalleryPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  const nextImage = () =>
    setSelectedIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="gallery-page">
      <div className="gallery-header" data-aos="fade-down">
        <h1 className="gradient-text">Our Gallery</h1>
        <p>A collection of treasured and unforgettable moments ✨</p>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            className="gallery-card"
            key={index}
            data-aos={aosEffects[index % aosEffects.length]}
            onClick={() => setSelectedIndex(index)}
          >
            <img src={img.src} alt={img.caption} />
            <div className="overlay">
              <span>{img.caption}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="lightbox" onClick={() => setSelectedIndex(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
          >
            <button className="close-btn" onClick={() => setSelectedIndex(null)}>
              ✕
            </button>

            <button className="nav-btn prev" onClick={prevImage}>
              ⟵
            </button>
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].caption}
            />
            <button className="nav-btn next" onClick={nextImage}>
              ⟶
            </button>

            <p>{images[selectedIndex].caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;

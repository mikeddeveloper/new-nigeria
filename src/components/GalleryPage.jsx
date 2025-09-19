import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./GalleryPage.css";

const images = [
  { src: "/images/cm.jpg", caption: "Moments of Joy" },
  { src: "/src/assets/gallery/funke.jpg", caption: "Beautiful Memories" },
  { src: "/src/assets/gallery/funke.jpg", caption: "Capturing Love" },
  { src: "/src/assets/gallery/funke.jpg", caption: "Cherished Times" },
  { src: "/src/assets/gallery/funke.jpg", caption: "Golden Hours" },
  { src: "/src/assets/gallery/funke.jpg", caption: "Unforgettable Smiles" },
  { src: "/src/assets/gallery/funke.jpg", caption: "Moments of Joy" },
  { src: "/src/assets/gallery/funke.jpg", caption: "Beautiful Memories" },
  { src: "/src/assets/gallery/funke.jpg", caption: "Capturing Love" },
  { src: "/src/assets/gallery/funke.jpg", caption: "Cherished Times" },
  { src: "/src/assets/gallery/funke.jpg", caption: "Golden Hours" },
  { src: "/src/assets/gallery/funke.jpg", caption: "Unforgettable Smiles" },
  { src: "/src/assets/gallery/funke.jpg", caption: "Moments of Joy" },
  { src: "/src/assets/gallery/funke.jpg", caption: "Beautiful Memories" },
  { src: "/src/assets/gallery/funke.jpg", caption: "Capturing Love" },
  { src: "/src/assets/gallery/funke.jpg", caption: "Cherished Times" },
  { src: "/src/assets/gallery/funke.jpg", caption: "Golden Hours" },
  { src: "/src/assets/gallery/funke.jpg", caption: "Unforgettable Smiles" },
];

const aosEffects = [
  "fade-up",
  "zoom-in",
  "flip-left",
  "fade-up-right",
  "fade-up-left",
  "zoom-in-up",
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="gallery-page">
      <h1 className="gallery-title" data-aos="fade-down">Our Gallery</h1>
      <p className="gallery-subtitle" data-aos="fade-down">
        A collection of our most treasured moments
      </p>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            className="gallery-card"
            key={index}
            data-aos={aosEffects[index % aosEffects.length]}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img.src} alt={img.caption} />
            <div className="overlay">
              <span>{img.caption}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>✕</button>
            <img src={selectedImage.src} alt={selectedImage.caption} />
            <p>{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;

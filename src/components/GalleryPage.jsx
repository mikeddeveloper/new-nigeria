import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./GalleryPage.css";

const images = [
  { src: "/images/fela1.jpg", caption: "Moments of Joy" },
  { src: "/images/fela2.jpg", caption: "Beautiful Memories" },
  { src: "/images/fela3.jpg", caption: "Capturing Love" },
  { src: "/images/fela4.jpg", caption: "Cherished Times" },
  { src: "/images/fela5.jpg", caption: "Golden Hours" },
  { src: "/images/fela6.jpg", caption: "Unforgettable Smiles" },
  { src: "/images/fela7.jpg", caption: "Golden Hours" },
  { src: "/images/fela8.jpg", caption: "Unforgettable Smiles" },
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
            {/* LazyLoadImage with blur effect */}
            <LazyLoadImage
              src={img.src}
              alt={img.caption}
              effect="blur"
              className="gallery-img"
            />
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

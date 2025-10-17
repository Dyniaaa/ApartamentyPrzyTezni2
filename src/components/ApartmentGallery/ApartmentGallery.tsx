import React, { useState } from "react";
import style from "./ApartmentGallery.module.scss";

type GalleryProps = {
  images: string[];
};

const ApartmentGallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={style.apartmentGallery}>
      <div className="relative w-full max-w-3xl mx-auto">
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
        >
          &#10094;
        </button>
        <div className={style.imageContainer}>
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex}`}
            className="w-full h-[500px] object-cover rounded-2xl transition-transform duration-500"
          />
        </div>

        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default ApartmentGallery;

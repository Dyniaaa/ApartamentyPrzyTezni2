import React, { useState } from "react";
import styles from "./ApartmentGallery.module.scss";

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

  const changePhoto = (id: number) => {
    setCurrentIndex(id);
  };

  return (
    <section className={styles.apartmentGallery}>
      <div className={styles.imageDiv}>
        <button onClick={prevImage}>&#10094;</button>
        <div className={styles.imageContainer}>
          <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
        </div>

        <button onClick={nextImage}>&#10095;</button>
      </div>
      <div className={styles.tilesDiv}>
        {images.map((image, id) => (
          <button key={images[id]} onClick={() => changePhoto(id)}>
            <img
              src={image}
              className={currentIndex === id ? styles.activeTile : undefined}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default ApartmentGallery;

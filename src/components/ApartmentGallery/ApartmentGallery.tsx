import React, { useState } from "react";
import styles from "./ApartmentGallery.module.scss";
import { motion } from "framer-motion";

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

  let timeDelay = 0.1;

  return (
    <section className={styles.apartmentGallery}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={styles.imageDiv}
      >
        <button onClick={prevImage}>&#10094;</button>
        <div className={styles.imageContainer}>
          <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
        </div>

        <button onClick={nextImage}>&#10095;</button>
      </motion.div>
      <div className={styles.tilesDiv}>
        {images.map((image, id) => (
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (timeDelay += 0.1) }}
            viewport={{ once: true }}
            key={images[id]}
            onClick={() => changePhoto(id)}
          >
            <img
              src={image}
              className={currentIndex === id ? styles.activeTile : undefined}
            />
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default ApartmentGallery;

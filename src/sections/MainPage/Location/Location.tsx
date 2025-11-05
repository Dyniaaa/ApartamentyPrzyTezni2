import React from "react";
import styles from "./Location.module.scss";
import { motion } from "framer-motion";

const Location: React.FC = () => {
  return (
    <section className={styles.location}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={styles.textContainer}
      >
        <h1>Lokalizacja</h1>
        <p>ul.Kusocińskiego 57, 28-100 Busko-Zdrój</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={styles.mapContainer}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.5514777092467!2d20.713703877130186!3d50.46300607159438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717c318b603749b%3A0x7c2c791c19b52654!2sApartamenty%20Przy%20T%C4%99%C5%BCni!5e1!3m2!1spl!2spl!4v1760364609443!5m2!1spl!2spl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </section>
  );
};
export default Location;

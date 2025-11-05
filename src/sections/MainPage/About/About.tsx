import React from "react";
import styles from "./About.module.scss";
import locationicon from "../../../assets/Icons/location.svg";
import aboutImage from "../../../assets/AboutPhoto.jpg";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.textContainer}
        viewport={{ once: true }}
      >
        <h1>O Busku-Zdrój</h1>
        <p>
          Busko-Zdrój to jedno z najstarszych uzdrowisk w Polsce, słynące z
          leczniczych wód siarczkowych i borowinowych. Miasto oferuje doskonałe
          warunki do regeneracji i wypoczynku.
        </p>
        <p>
          Nasze apartamenty znajdują się w strategicznej lokalizacji,
          umożliwiającej łatwy dostęp do wszystkich atrakcji miasta - od
          zabytków po nowoczesne centra spa i wellness.
        </p>
        <div>
          <img
            src={locationicon}
            alt="Ikona Lokalizacji"
            width={20}
            height={20}
          />
          <p className={styles.iconText}>50m od tężni solankowej</p>
        </div>
        <div>
          <img
            src={locationicon}
            alt="Ikona Lokalizacji"
            width={20}
            height={20}
          />
          <p className={styles.iconText}>200m od basenu termalnego</p>
        </div>
        <div>
          <img
            src={locationicon}
            alt="Ikona Lokalizacji"
            width={20}
            height={20}
          />
          <p className={styles.iconText}>
            3 min spacerem do centrum uzdrowiska
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.imageContainer}
        viewport={{ once: true }}
      >
        <img
          src={aboutImage}
          alt="Zdjecie całego budynku apartamenty przy tężni"
        />
      </motion.div>
    </section>
  );
};
export default About;

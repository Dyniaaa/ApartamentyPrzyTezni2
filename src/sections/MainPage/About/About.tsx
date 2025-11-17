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
          Busko-Zdrój to uzdrowisko, które od ponad 180 lat przyciąga tych,
          którzy chcą zadbać o zdrowie albo po prostu zanurzyć się w
          atmosferze pełnej solankowej pary i cykad parkowych drzew. Miasto
          słynie z wód siarczkowych, które uchodzą za jedne z najmocniejszych w
          Europie, oraz borowiny o jakości, którą miejscowi traktują z niemal
          nabożnym szacunkiem.
        </p>
        <p>
          To miejsce nie tylko leczy, lecz potrafi też rozpieszczać. Park
          Zdrojowy rozciąga się jak elegancka zielona aleja czasu, gdzie każdy
          zakręt skrywa ławeczkę lub skwer pachnący lipą. Latem miasto tętni
          kulturą: koncerty, wydarzenia plenerowe, festiwale, spacery z
          przewodnikiem po architekturze uzdrowiskowej. Zimą natomiast Busko
          staje się spokojniejsze, przytulniejsze, otulone aromatem gorących wód
          i ciepłych wnętrz sanatoriów.
        </p>
        <div>
          <img
            src={locationicon}
            alt="Ikona Lokalizacji"
            width={20}
            height={20}
          />
          <p className={styles.iconText}>150m od Parku Zdrojowego</p>
        </div>
        <div>
          <img
            src={locationicon}
            alt="Ikona Lokalizacji"
            width={20}
            height={20}
          />
          <p className={styles.iconText}>300m do Tężni Solankowej</p>
        </div>
        <div>
          <img
            src={locationicon}
            alt="Ikona Lokalizacji"
            width={20}
            height={20}
          />
          <p className={styles.iconText}>
            800m do Sanatorium Marconi
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

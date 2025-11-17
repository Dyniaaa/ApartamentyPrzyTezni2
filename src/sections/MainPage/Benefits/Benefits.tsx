import DetailsCard from "../../../components/DetailsCard/DetailsCard";
import styles from "./Benefits.module.scss";
import React from "react";
import waterDrop from "../../../assets/Icons/waterdrop.svg";
import car from "../../../assets/Icons/car.svg";
import coffe from "../../../assets/Icons/cutlery.svg";
import wifi from "../../../assets/Icons/wifi.svg";
import { motion } from "framer-motion";

const Benefits: React.FC = () => {
  return (
    <section className={styles.benefits}>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 100, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Dlaczego Apartamenty&nbsp;przy&nbsp;tężni?
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 100, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={styles.description}
      >
        Zanurz się w wyjątkowym uroku lokalnego luksusu Twój prywatny świat w
        sercu tego miejsca.
      </motion.p>
      <ul>
        <motion.li
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <DetailsCard
            classs={styles.detailsCard}
            icon={waterDrop}
            title="Przy tężni solankowej"
            description="250m od leczniczej tężni - oddychaj zdrowiem"
            alt="Ikona Kropli Wody"
          />
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <DetailsCard
            classs={styles.detailsCard}
            icon={car}
            title="Parking bezpłatny"
            description="Własne miejsca parkingowe dla gości"
            alt="Ikona Auta"
          />
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <DetailsCard
            classs={styles.detailsCard}
            icon={coffe}
            title="Pełne wyposażenie"
            description="Aneks kuchenny ze wszystkimi udogodnieniami"
            alt="Ikona Sztućców"
          />
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <DetailsCard
            classs={styles.detailsCard}
            icon={wifi}
            title="WiFi & więcej"
            description="Szybki internet, TV, klimatyzacja"
            alt="Ikona WiFi"
          />
        </motion.li>
      </ul>
    </section>
  );
};

export default Benefits;

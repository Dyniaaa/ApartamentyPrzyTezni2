import React from "react";
import styles from "./Description.module.scss";
import DetailsCard from "../../../components/DetailsCard/DetailsCard";
import PeopleIcon from "../../../assets/Icons/people.svg";
import BathIcon from "../../../assets/Icons/bath.svg";
import BedIcon from "../../../assets/Icons/bed.svg";
import UtilityCard from "../../../components/UtilityCard/UtilityCard";
import utilityData from "../../../data/utilities.json";
import checkmark from "../../../assets/Icons/checkmark.svg";
import { motion } from "framer-motion";

const Description: React.FC = () => {
  return (
    <section className={styles.description}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={styles.numbersDiv}
      >
        <DetailsCard
          classs={styles.numbersCard}
          description="Goście"
          title="2"
          icon={PeopleIcon}
          alt="Ikona Osób"
        />
        <DetailsCard
          classs={styles.numbersCard}
          description="Sypialnie"
          title="1"
          icon={BedIcon}
          alt="Ikona Łóżek"
        />
        <DetailsCard
          classs={styles.numbersCard}
          description="Łazienki"
          title="1"
          icon={BathIcon}
          alt="Ikona Wanny"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={styles.descriptionTextDiv}
      >
        <h1>O apartamencie</h1>
        <p>
          Luksusowy apartament z widokiem na park. Idealny dla par szukających
          komfortu i elegancji. Ten elegancki apartament łączy w sobie
          nowoczesny design z funkcjonalnością. Przestronna sypialnia zapewnia
          komfortowy sen, a w pełni wyposażona kuchnia pozwala na przygotowanie
          posiłków. Duże okna wpuszczają dużo naturalnego światła, a z balkonu
          rozciąga się malowniczy widok na okoliczny park. Apartament jest
          idealny dla par poszukujących spokojnego, komfortowego miejsca na
          wypoczynek w Busku-Zdroju.
        </p>
      </motion.div>

      <div className={styles.utilitiesDiv}>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Udogodnienia
        </motion.h1>
        <div className={styles.gridDiv}>
          {utilityData.map((section, index) => (
            <UtilityCard
              key={index}
              title={section.title}
              utilities={section.utilities}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={styles.regulationDiv}
      >
        <h1>Regulamin</h1>
        <ul>
          <motion.li
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img src={checkmark} />
            <p>Check-in: 15:00 - 22:00</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src={checkmark} />
            <p>Check-out: do 11:00</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={checkmark} />
            <p>Zakaz palenia w apartamencie</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img src={checkmark} />
            <p>Zwierzęta domowe mile widziane (po wcześniejszym uzgodnieniu)</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={checkmark} />
            <p>Bezpłatne anulowanie do 24h przed przyjazdem</p>
          </motion.li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Description;

import React from "react";
import style from "./Informations.module.scss";
import phoneIcon from "../../../assets/Icons/telephone.svg";
import mailIcon from "../../../assets/Icons/email.svg";
import locationIcon from "../../../assets/Icons/location.svg";
import { motion } from "framer-motion";

const Informations: React.FC = () => {
  return (
    <section className={style.informations}>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Informacje kontaktowe
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ x: 15, transition: { delay: 0 } }}
        className={style.contactDiv}
      >
        <img className={style.contactIcon} src={phoneIcon} />
        <div>
          <p>+48 508 500 886</p>
          <p className={style.moreInfo}>Codziennie 8:00 - 20:00</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ x: 15, transition: { delay: 0 } }}
        className={style.contactDiv}
      >
        <img className={style.contactIcon} src={mailIcon} />
        <div>
          <p>beata.sciubisz1977@gmail.com</p>
          <p className={style.moreInfo}>Odpowiadamy w ciągu 24h</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ x: 15, transition: { delay: 0 } }}
        className={style.contactDiv}
      >
        <img className={style.contactIcon} src={locationIcon} />
        <div>
          <p>ul. Kusocińskiego 12</p>
          <p className={style.moreInfo}>28-100 Busko-Zdrój</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className={style.checkinDiv}
      >
        <p>Godziny check-in/out</p>
        <p className={style.moreInfo}>Check-in: 15:00 | Check-out: 10:00</p>
      </motion.div>
    </section>
  );
};

export default Informations;

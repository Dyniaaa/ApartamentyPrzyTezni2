import React from "react";
import style from "./ApartmentsTitle.module.scss";
import { motion } from "framer-motion";

const ApartmentsTitle: React.FC = () => {
  return (
    <section className={style.apartmentsTitle}>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Nasze Apartamenty
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Wybierz spośród 7 wyjątkowych apartamentów, każdy z unikalnym
        charakterem i pełnym wyposażeniem.
      </motion.p>
    </section>
  );
};

export default ApartmentsTitle;

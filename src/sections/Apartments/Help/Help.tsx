import React from "react";
import style from "./Help.module.scss";
import { motion } from "framer-motion";

const Help: React.FC = () => {
  return (
    <section className={style.help}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={style.helpContainer}
      >
        <h1>Nie możesz się zdecydować?</h1>
        <p>
          Skontaktuj się z nami, a pomożemy Ci wybrać idealny apartament
          dopasowany do Twoich potrzeb i budżetu. Oferujemy także rabaty dla
          dłuższych pobytów.
        </p>
        <ul>
          <li>
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                transition: { delay: 0 },
              }}
            >
              Rabat 10% dla pobytów powyżej 7 dni
            </motion.p>
          </li>
          <li>
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                transition: { delay: 0 },
              }}
            >
              Bezpłatne anulowanie do 24h przed przyjazdem
            </motion.p>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Help;

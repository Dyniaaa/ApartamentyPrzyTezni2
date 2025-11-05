import React from "react";
import style from "./ContactTitle.module.scss";
import { motion } from "framer-motion";

const ContactTitle: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={style.contactTitle}
    >
      <h1>Kontakt</h1>
      <p>Masz pytania? Skontaktuj się z nami.</p>
    </motion.section>
  );
};

export default ContactTitle;

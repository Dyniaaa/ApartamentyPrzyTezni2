import React from "react";
import style from "./Form.module.scss";
import { motion } from "framer-motion";

const Form: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={style.form}
    >
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Wyślij wiadomość
      </motion.p>
      <form method="POST">
        <motion.label
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Imię i nazwisko
        </motion.label>
        <motion.input
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          placeholder="Jan Kowalski"
          type="text"
          id="name"
          name="name"
          required
        />

        <motion.label
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Email
        </motion.label>
        <motion.input
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          placeholder="jan@example.com"
          type="email"
          id="email"
          name="email"
          required
        />

        <motion.label
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Wiadomość
        </motion.label>
        <motion.input
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          placeholder="Twoja wiadomość..."
          type="text"
          id="message"
          name="message"
          required
        />

        <motion.button
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          type="submit"
        >
          Wyślij wiadomość
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Form;

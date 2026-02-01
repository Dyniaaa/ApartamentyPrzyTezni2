import React from "react";
import style from "./Form.module.scss";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

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

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Nie wypełniaj tego pola: <input name="bot-field" />
          </label>
        </p>

        <motion.label
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          htmlFor="name"
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
          htmlFor="email"
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
          htmlFor="message"
        >
          Wiadomość
        </motion.label>
        <motion.textarea
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          placeholder="Twoja wiadomość..."
          id="message"
          name="message"
          rows={6}
          required
        />
        <motion.span
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className={style.privacy}
        >
          Administratorem danych osobowych jest właściciel strony. Dane
          przetwarzane są wyłącznie w celu udzielenia odpowiedzi na zapytanie.
          Szczegóły znajdują się w
          <span className={style.privacyLink}>
            <NavLink to="/PrivacyPolicy"> polityce prywatności</NavLink>
          </span>
          .
        </motion.span>

        <motion.button
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          type="submit"
        >
          Wyślij wiadomość
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Form;

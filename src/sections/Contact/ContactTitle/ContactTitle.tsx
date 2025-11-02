import React from "react";
import style from "./ContactTitle.module.scss";

const ContactTitle: React.FC = () => {
  return (
    <section className={style.contactTitle}>
      <h1>Kontakt</h1>
      <p>Masz pytania? Skontaktuj się z nami.</p>
    </section>
  );
};

export default ContactTitle;

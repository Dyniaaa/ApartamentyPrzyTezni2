import React from "react";
import style from "./Form.module.scss";

const Form: React.FC = () => {
  return (
    <section className={style.form}>
      <p>Wyślij wiadomość</p>
      <form method="POST">
        <label>Imię i nazwisko</label>
        <input
          placeholder="Jan Kowalski"
          type="text"
          id="name"
          name="name"
          required
        />

        <label>Email</label>
        <input
          placeholder="jan@example.com"
          type="email"
          id="email"
          name="email"
          required
        />

        <label>Wiadomość</label>
        <input
          placeholder="Twoja wiadomość..."
          type="text"
          id="message"
          name="message"
          required
        />

        <button type="submit">Wyślij wiadomość</button>
      </form>
    </section>
  );
};

export default Form;

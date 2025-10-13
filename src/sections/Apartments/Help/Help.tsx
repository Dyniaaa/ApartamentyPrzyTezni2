import React from "react";
import style from "./Help.module.scss";

const Help: React.FC = () => {
  return (
    <section className={style.help}>
      <div className={style.helpContainer}>
        <h1>Nie możesz się zdecydować?</h1>
        <p>
          Skontaktuj się z nami, a pomożemy Ci wybrać idealny apartament
          dopasowany do Twoich potrzeb i budżetu. Oferujemy także rabaty dla
          dłuższych pobytów.
        </p>
        <ul>
          <li>
            <p>Rabat 10% dla pobytów powyżej 7 dni</p>
          </li>
          <li>
            <p>Bezpłatne anulowanie do 24h przed przyjazdem</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Help;

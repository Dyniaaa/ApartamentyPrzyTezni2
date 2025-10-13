import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <section className={styles.footer}>
      <div>
        <ul>
          <li>
            <h1 className={styles.title}>Apartamenty przy Tężni</h1>
          </li>
          <li>
            <p>
              Wyjątkowe apartamenty przy tężni solankowej. Komfort, elegancja i
              zdrowotne właściwości natury.
            </p>
          </li>
          <li>
            <p>ul. Mickiewicza 15 28-100 Busko-Zdrój</p>
          </li>
        </ul>
        <ul>
          <li>
            <h1>Kontakt</h1>
          </li>
          <li>
            <p>Telefon: +48 123 456 789</p>
          </li>
          <li>
            <p>Email: rezerwacje@apartamenty-busko.pl</p>
          </li>
          <li>
            <p>Godziny: 8:00 - 22:00</p>
          </li>
          <li>
            <p>Awaryjny 24/7: +48 500 123 456</p>
          </li>
        </ul>
        <ul>
          <li>
            <h1>Informacje</h1>
          </li>
          <li>
            <p>Check-in: 15:00</p>
          </li>
          <li>
            <p>Check-out: 11:00</p>
          </li>
          <li>
            <p>Parking: bezpłatny</p>
          </li>
          <li>
            <p>WiFi: bezpłatne</p>
          </li>
          <li>
            <p>Zwierzęta: na życzenie</p>
          </li>
        </ul>
      </div>
      <p className={styles.copyright}>
        © 2024 Apartamenty przy Tężni. Wszystkie prawa zastrzeżone.
      </p>
    </section>
  );
};

export default Footer;

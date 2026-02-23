import React from "react";
import styles from "./BikesHero.module.scss";

const BikesHero: React.FC = () => {
  return (
    <section className={styles.bikesHero}>
      <p className={styles.title}>
        Wynajem <span>Rowerów Elektrycznych</span>
      </p>
      <p className={styles.titleDescription}>
        Nowoczesne rowery elektryczne dla naszych gości. Zwiedzaj okolicę bez
        wysiłku.
      </p>
    </section>
  );
};

export default BikesHero;

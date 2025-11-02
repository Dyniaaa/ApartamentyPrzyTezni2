import React from "react";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h1>Tężnia&nbsp;w&nbsp;zasięgu,</h1>
      <h1>Komfort&nbsp;w&nbsp;apartamencie,</h1>
      <h1>Twoje&nbsp;miejsce&nbsp;na&nbsp;relaks.</h1>
    </section>
  );
};
export default Hero;

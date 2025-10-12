import React from "react";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h1>Tężnia w zasięgu,</h1>
      <h1>Komfort w apartamencie,</h1>
      <h1>Twoje miejsce na relaks.</h1>
    </section>
  );
};
export default Hero;

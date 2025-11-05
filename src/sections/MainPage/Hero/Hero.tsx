import React from "react";
import styles from "./Hero.module.scss";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <motion.section
      className={styles.hero}
    >
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Tężnia&nbsp;w&nbsp;zasięgu,
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Komfort&nbsp;w&nbsp;apartamencie,
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Twoje&nbsp;miejsce&nbsp;na&nbsp;relaks.
      </motion.h1>
    </motion.section>
  );
};
export default Hero;

import React from "react";
import styles from "./UtilityCard.module.scss";
import { motion } from "framer-motion";

type Utility = {
  icon: string;
  text: string;
};

type ApartmentDetailProps = {
  title: string;
  utilities: Utility[];
};

const UtilityCard: React.FC<ApartmentDetailProps> = ({ title, utilities }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={styles.utilityCard}
    >
      <h3>{title}</h3>

      <ul>
        {utilities.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={item.icon} alt="Icon" />
            <p>{item.text}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default UtilityCard;

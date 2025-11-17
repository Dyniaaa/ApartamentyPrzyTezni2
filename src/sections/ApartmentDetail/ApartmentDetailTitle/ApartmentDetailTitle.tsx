import React from "react";
import styles from "./ApartmentDetailTitle.module.scss";
import locationIcon from "../../../assets/Icons/location.svg";
import { motion } from "framer-motion";

type ApartmentDetailTitleProps = {
  title: string;
  meters: string;
};

const ApartmentDetailTitle: React.FC<ApartmentDetailTitleProps> = ({
  title,
  meters,
}) => {
  return (
    <section className={styles.apartmentDetailTitle}>
      <div className={styles.nameAndLoctionDiv}>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        <div className={styles.locationDiv}>
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            src={locationIcon}
            alt="Location Icon"
            height={20}
            width={20}
          />
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {" "}
            ul.Kusocińskiego 12, Busko-Zdrój{" "}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={styles.meters}
          >
            {meters}&nbsp;m<sup>2</sup>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ApartmentDetailTitle;

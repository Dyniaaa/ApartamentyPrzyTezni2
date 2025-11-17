import React from "react";
import styles from "./ApartamentCard.module.scss";
import peopleIcon from "../../assets/Icons/people.svg";
import bedIcon from "../../assets/Icons/bed.svg";
import bathroomIcon from "../../assets/Icons/bath.svg";
import sofaIcon from "../../assets/Icons/sofa.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

type ApartamentCardProps = {
  description: string;
  title: string;
  altPhoto: string;
  photoUrl: string;
  amountPeople: number;
  amountBed: number;
  amountBathrooms: number;
  link: string;
  delayTime: number;
  sofa: boolean;
};

const ApartamentCard: React.FC<ApartamentCardProps> = ({
  photoUrl,
  altPhoto,
  title,
  description,
  amountPeople,
  amountBed,
  amountBathrooms,
  link,
  delayTime,
  sofa,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 100, y: 0 }}
      transition={{ duration: 0.5, delay: delayTime }}
      className={styles.ApartamentCard}
    >
      <div className={styles.photoDiv}>
        <img className={styles.mainPhoto} src={photoUrl} alt={altPhoto} />
      </div>
      <div className={styles.titleDiv}>
        <h1>{title}</h1>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.iconsDiv}>
        <div>
          <img className={styles.icon} src={peopleIcon} alt="peopleIcon" />
          <p>{amountPeople}&nbsp;gości</p>
        </div>
        <div>
          <img className={styles.icon} src={bedIcon} alt="bedIcon" />
          <p>{amountBed}&nbsp;sypialnia</p>
        </div>
        {sofa ? (
          <div>
            <img
              className={styles.icon}
              src={sofaIcon}
              alt="sofaIcon"
            />
            <p>{amountBathrooms}&nbsp;sofa</p>
          </div>
        ) : null}
        <div>
          <img className={styles.icon} src={bathroomIcon} alt="bathroomIcon" />
          <p>{amountBathrooms}&nbsp;łazienka</p>
        </div>
      </div>
      <NavLink className={styles.navLink} to={link}>
        Zobacz szczegóły
      </NavLink>
    </motion.div>
  );
};

export default ApartamentCard;

import React from "react";
import styles from "./ApartamentCard.module.scss";
import peopleIcon from "../../assets/Icons/people.svg";
import bedIcon from "../../assets/Icons/bed.svg";
import bathroomIcon from "../../assets/Icons/bath.svg";
import { NavLink } from "react-router-dom";

type ApartamentCardProps = {
  description: string;
  title: string;
  altPhoto: string;
  photoUrl: string;
  price: string;
  amountPeople: string;
  amountBed: string;
  amountBathrooms: string;
  link: string;
};

const ApartamentCard: React.FC<ApartamentCardProps> = ({
  photoUrl,
  altPhoto,
  title,
  price,
  description,
  amountPeople,
  amountBed,
  amountBathrooms,
  link,
}) => {
  return (
    <div className={styles.ApartamentCard}>
      <div className={styles.photoDiv}>
        <img className={styles.mainPhoto} src={photoUrl} alt={altPhoto} />
      </div>
      <div className={styles.titleDiv}>
        <h1>{title}</h1>
        <div>
          <h1>{price}&nbsp;zł</h1>
          <p className={styles.perNight}>za noc</p>
        </div>
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
        <div>
          <img className={styles.icon} src={bathroomIcon} alt="bathroomIcon" />
          <p>{amountBathrooms}&nbsp;łazienka</p>
        </div>
      </div>
      <NavLink className={styles.navLink} to={link}>
        Zobacz szczegóły
      </NavLink>
    </div>
  );
};

export default ApartamentCard;

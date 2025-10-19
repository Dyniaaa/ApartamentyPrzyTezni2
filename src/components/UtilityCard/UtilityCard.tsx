import React from "react";
import styles from "./UtilityCard.module.scss";

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
    <div className={styles.utilityCard}>
      <h3>{title}</h3>
      <ul>
        {utilities.map((item, index) => (
          <li key={index}>
            <img src={item.icon} alt="Icon" />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UtilityCard;

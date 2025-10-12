import React from "react";
import styles from "./BenefitCard.module.scss";

type BenefitCardProps = {
  description: string;
  title: string;
  icon: string;
  alt: string;
};

const BenefitCard: React.FC<BenefitCardProps> = ({
  description,
  title,
  icon,
  alt,
}) => {
  return (
    <div className={styles.benefitCard}>
      <img src={icon} alt={alt} width={40} height={40} />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default BenefitCard;

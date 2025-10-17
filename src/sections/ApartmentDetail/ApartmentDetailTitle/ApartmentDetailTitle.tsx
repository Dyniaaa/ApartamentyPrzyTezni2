import React from "react";
import styles from "./ApartmentDetailTitle.module.scss";

import locationIcon from "../../../assets/Icons/location.svg";

type ApartmentDetailTitleProps = {
  title: string;
  price: string;
  meters: string;
};

const ApartmentDetailTitle: React.FC<ApartmentDetailTitleProps> = ({
  title,
  price,
  meters,
}) => {
  return (
    <section className={styles.apartmentDetailTitle}>
      <div className={styles.nameAndLoctionDiv}>
        <h1>{title}</h1>
        <div className={styles.locationDiv}>
          <img src={locationIcon} alt="Location Icon" height={20} width={20} />
          <p> ul.Kusocińskiego 12, Busko-Zdrój</p>
          <p>
            {meters} m
            <sup>2</sup>
          </p>
        </div>
      </div>
      <div className={styles.priceDiv}>
        <h1>{price} zł</h1>
        <p>za noc</p>
      </div>
    </section>
  );
};

export default ApartmentDetailTitle;

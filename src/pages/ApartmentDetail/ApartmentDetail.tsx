import React from "react";
import ApartmentDetailTitle from "../../sections/ApartmentDetail/ApartmentDetailTitle/ApartmentDetailTitle";
import ApartmentGallery from "../../components/ApartmentGallery/ApartmentGallery";
import styles from "./ApartmentDetail.module.scss";
import { NavLink } from "react-router-dom";
import arrowIcon from "../../assets/Icons/leftArrow.svg";
import Description from "../../sections/ApartmentDetail/Description/Description";
import Location from "../../sections/ApartmentDetail/Location/Location";
import Reservation from "../../sections/ApartmentDetail/Reservation/Reservation";

type ApartmentDetailProps = {
  title: string;
  price: string;
  images: string[];
  meters: string;
};

const ApartmentDetail: React.FC<ApartmentDetailProps> = ({
  title,
  price,
  images,
  meters,
}) => {
  return (
    <>
      <div className={styles.returnButtonDiv}>
        <div className={styles.buttonConatainer}>
          <NavLink className={styles.button} to="/Apartments">
            <img src={arrowIcon} height={20} width={20} />
            <p>Powrót do apartamentów</p>
          </NavLink>
        </div>
      </div>
      <ApartmentDetailTitle title={title} price={price} meters={meters} />
      <ApartmentGallery images={images} />
      <div className={styles.detailsDiv}>
        <Description />
        <Reservation />
      </div>
      <Location />
    </>
  );
};

export default ApartmentDetail;

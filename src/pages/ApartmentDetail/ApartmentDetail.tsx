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
  images: string[];
  meters: string;
  airConditioner: boolean;
  sofa: boolean;
  description: string;
};

const ApartmentDetail: React.FC<ApartmentDetailProps> = ({
  title,
  images,
  meters,
  airConditioner,
  description,
  sofa,
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
      <div className={styles.container}>
        <div className={styles.detailsContainer}>
          <ApartmentDetailTitle title={title} meters={meters} />
          <ApartmentGallery images={images} />
          <div className={styles.detailsDiv}>
            <Description
              airConditioner={airConditioner}
              description={description}
              sofa={sofa}
            />
            <Reservation />
          </div>
          <Location />
        </div>
      </div>
    </>
  );
};

export default ApartmentDetail;

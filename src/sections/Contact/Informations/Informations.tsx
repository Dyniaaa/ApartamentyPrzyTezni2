import React from "react";
import style from "./Informations.module.scss";
import phoneIcon from "../../../assets/Icons/telephone.svg";
import mailIcon from "../../../assets/Icons/email.svg";
import locationIcon from "../../../assets/Icons/location.svg";

const Informations: React.FC = () => {
  return (
    <section className={style.informations}>
      <h1>Informacje kontaktowe</h1>
      <div className={style.contactDiv}>
        <img className={style.contactIcon} src={phoneIcon} />
        <div>
          <p>+48 123 456 789</p>
          <p className={style.moreInfo}>Codziennie 8:00 - 22:00</p>
        </div>
      </div>
      <div className={style.contactDiv}>
        <img className={style.contactIcon} src={mailIcon} />
        <div>
          <p>kontakt@apartamenty-teznia.pl</p>
          <p className={style.moreInfo}>Odpowiadamy w ciągu 24h</p>
        </div>
      </div>
      <div className={style.contactDiv}>
        <img className={style.contactIcon} src={locationIcon} />
        <div>
          <p>ul. Mickiewicza 15</p>
          <p className={style.moreInfo}>28-100 Busko-Zdrój</p>
        </div>
      </div>
      <div className={style.checkinDiv}>
        <p>Godziny check-in/out</p>
        <p className={style.moreInfo}>Check-in: 15:00 | Check-out: 11:00</p>
      </div>
    </section>
  );
};

export default Informations;

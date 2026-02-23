import React from "react";
import styles from "./BikesInformation.module.scss";
import DetailsCard from "../../../components/DetailsCard/DetailsCard";
import battery from "../../../assets/Icons/battery.svg";
import shield from "../../../assets/Icons/shield.svg";
import clock from "../../../assets/Icons/clock.svg";
import medal from "../../../assets/Icons/medal.svg";
import eBike from "../../../assets/Apt - photos/ChlopRower.jpg";
import ebikeIcon from "../../../../public/Icons/bicycle.svg";
import locationIcon from "../../../assets/Icons/location.svg";
import { motion } from "framer-motion";

const BikesInformation: React.FC = () => {
  return (
    <section className={styles.bikesInformation}>
      <div className={styles.why}>
        <h1>Dlaczego nasze rowery?</h1>
        <p>
          Oferujemy nowoczesne rowery elektryczne, które zapewniają komfortową,
          lekką i wydajną jazdę.
        </p>
      </div>
      <div className={styles.benefits}>
        <DetailsCard
          title="Bateria długodystansowa"
          description="Do 100km na jednym ładowaniu"
          icon={battery}
          alt="Bateria"
          classs={styles.detailsCard}
        />
        <DetailsCard
          title="Ubezpieczenie w cenie"
          description="Pełne pokrycie podczas wypożyczenia"
          icon={shield}
          alt="Tarcza"
          classs={styles.detailsCard}
        />
        <DetailsCard
          title="Elastyczne godziny"
          description="Wynajem na godziny lub cały dzień"
          icon={clock}
          alt="Zegar"
          classs={styles.detailsCard}
        />
        <DetailsCard
          title="Najnowsze modele"
          description="Wysokiej klasy rowery elektryczne"
          icon={medal}
          alt="Medal"
          classs={styles.detailsCard}
        />
      </div>
      <div className={styles.eBikes}>
        <div className={styles.eBikeDiv}>
          <motion.img
            src={eBike}
            alt="eBike"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.25 }}
            className={styles.eBikeImage}
          />
        </div>
        <div className={styles.eBikeInfo}>
          <h1 className={styles.eBikeTitle}>Nowoczesne e-bike'i</h1>
          <p className={styles.eBikeDescription}>
            Nasza flota składa się z najnowszych modeli rowerów elektrycznych,
            regularnie serwisowanych i przystosowanych do różnych typów tras.
            Każdy rower wyposażony jest w GPS, oświetlenie LED oraz wygodne
            siodełko.
          </p>
          <div className={styles.eBikeFeature}>
            <img src={ebikeIcon} alt="eBike Icon" />
            <div>
              <h3>Pełne wyposażenie</h3>
              <p>
                Kask, koszyk, uchwyt na telefon, pompka - wszystko w zestawie
              </p>
            </div>
          </div>
          <div className={styles.eBikeFeature}>
            <img src={locationIcon} alt="Location Icon" />
            <div>
              <h3>Mapy tras w prezencie</h3>
              <p>
                Otrzymasz szczegółowe mapy z zaznaczonymi ciekawymi miejscami
              </p>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className={styles.eBikePriceDiv}
          >
            <h3>Cennik wynajmu</h3>
            <div className={styles.priceRow}>
              <p>1 godzina</p>
              <p>25 PLN</p>
            </div>
            <div className={styles.priceRow}>
              <p>4 godziny</p>
              <p>80 PLN</p>
            </div>
            <div className={styles.priceRow}>
              <p>Cały dzień</p>
              <p>120 PLN</p>
            </div>
            <p className={styles.discount}>
              * Dla gości apartamentów - 10% rabatu
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BikesInformation;

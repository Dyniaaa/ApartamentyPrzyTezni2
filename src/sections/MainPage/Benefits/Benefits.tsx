import BenefitCard from "../../../components/BenefitCard/BenefitCard";
import styles from "./Benefits.module.scss";
import React from "react";
import waterDrop from "../../../assets/Icons/waterdrop.svg";
import car from "../../../assets/Icons/car.svg";
import coffe from "../../../assets/Icons/cutlery.svg";
import wifi from "../../../assets/Icons/wifi.svg";

const Benefits: React.FC = () => {
  return (
    <section className={styles.benefits}>
      <h1>Dlaczego Apartamenty przy tężni?</h1>
      <p className={styles.description}>
        Jedyne Apartamenty w Busku-Zdroju położone bezpośrednio przy tężni
        solankowej. Ciesz się zdrowotnymi właściwościami solanki nie wychodząc z
        okolicy.
      </p>
      <ul>
        <li>
          <BenefitCard
            icon={waterDrop}
            title="Przy tężni solankowej"
            description="50m od leczniczej tężni - oddychaj zdrowiem"
            alt="Ikona Kropli Wody"
          />
        </li>
        <li>
          <BenefitCard
            icon={car}
            title="Parking bezpłatny"
            description="Własne miejsca parkingowe dla gości"
            alt="Ikona Auta"
          />
        </li>
        <li>
          <BenefitCard
            icon={coffe}
            title="Pełne wyposażenie"
            description="Aneks kuchenny ze wszystkimi udogodnieniami"
            alt="Ikona Sztućców"
          />
        </li>
        <li>
          <BenefitCard
            icon={wifi}
            title="WiFi & więcej"
            description="Szybki internet, TV, klimatyzacja"
            alt="Ikona WiFi"
          />
        </li>
      </ul>
    </section>
  );
};

export default Benefits;

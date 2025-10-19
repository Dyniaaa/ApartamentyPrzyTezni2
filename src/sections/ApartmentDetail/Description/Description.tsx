import React from "react";
import styles from "./Description.module.scss";
import DetailsCard from "../../../components/DetailsCard/DetailsCard";
import PeopleIcon from "../../../assets/Icons/people.svg";
import BathIcon from "../../../assets/Icons/bath.svg";
import BedIcon from "../../../assets/Icons/bed.svg";
import UtilityCard from "../../../components/UtilityCard/UtilityCard";
import utilityData from "../../../data/utilities.json";

const Description: React.FC = () => {
  return (
    <section className={styles.description}>
      <div className={styles.numbersDiv}>
        <DetailsCard
          classs={styles.numbersCard}
          description="Goście"
          title="2"
          icon={PeopleIcon}
          alt="Ikona Osób"
        />
        <DetailsCard
          classs={styles.numbersCard}
          description="Sypialnie"
          title="1"
          icon={BedIcon}
          alt="Ikona Łóżek"
        />
        <DetailsCard
          classs={styles.numbersCard}
          description="Łazienki"
          title="1"
          icon={BathIcon}
          alt="Ikona Wanny"
        />
      </div>

      <div className={styles.descriptionTextDiv}>
        <h1>O apartamencie</h1>
        <p>
          Luksusowy apartament z widokiem na park. Idealny dla par szukających
          komfortu i elegancji. Ten elegancki apartament łączy w sobie
          nowoczesny design z funkcjonalnością. Przestronna sypialnia zapewnia
          komfortowy sen, a w pełni wyposażona kuchnia pozwala na przygotowanie
          posiłków. Duże okna wpuszczają dużo naturalnego światła, a z balkonu
          rozciąga się malowniczy widok na okoliczny park. Apartament jest
          idealny dla par poszukujących spokojnego, komfortowego miejsca na
          wypoczynek w Busku-Zdroju.
        </p>
      </div>

      <div className={styles.utilitiesDiv}>
        <h1>Udogodnienia</h1>
        <div className={styles.gridDiv}>
          {utilityData.map((section, index) => (
            <UtilityCard
              key={index}
              title={section.title}
              utilities={section.utilities}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Description;

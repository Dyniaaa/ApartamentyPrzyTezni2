import React from "react";
import styles from "./Description.module.scss";
import DetailsCard from "../../../components/DetailsCard/DetailsCard";
import PeopleIcon from "../../../assets/Icons/people.svg";
import BathIcon from "../../../assets/Icons/bath.svg";
import BedIcon from "../../../assets/Icons/bed.svg";
import SofaIcon from "../../../assets/Icons/sofa.svg";
import UtilityCard from "../../../components/UtilityCard/UtilityCard";
import checkmark from "../../../assets/Icons/checkmark.svg";
import { motion } from "framer-motion";

type DescriptionDetailProps = {
  airConditioner: boolean;
  sofa: boolean;
  description: string;
  amountPeople: string;
  amountBed: string;
  amountBathrooms: string;
};

const Description: React.FC<DescriptionDetailProps> = ({
  airConditioner,
  description,
  sofa,
  amountPeople,
  amountBed,
  amountBathrooms,
}) => {
  return (
    <section className={styles.description}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={styles.numbersDiv}
      >
        <DetailsCard
          classs={styles.numbersCard}
          description="Goście"
          title={amountPeople}
          icon={PeopleIcon}
          alt="Ikona Osób"
        />
        <DetailsCard
          classs={styles.numbersCard}
          description="Sypialnie"
          title={amountBed}
          icon={BedIcon}
          alt="Ikona Łóżek"
        />
        {sofa ? (
          <DetailsCard
            classs={styles.numbersCard}
            description="Sofa"
            title="1"
            icon={SofaIcon}
            alt="Ikona Kanapy"
          />
        ) : null}
        <DetailsCard
          classs={styles.numbersCard}
          description="Łazienki"
          title={amountBathrooms}
          icon={BathIcon}
          alt="Ikona Wanny"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={styles.descriptionTextDiv}
      >
        <h1>O apartamencie</h1>
        <p>{description}</p>
      </motion.div>

      <div className={styles.utilitiesDiv}>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Udogodnienia
        </motion.h1>
        <div className={styles.gridDiv}>
          <UtilityCard
            title="Sypialnia"
            utilities={[
              {
                icon: "/Icons/bed.svg",
                text: "podwójne łóżko lub dwa pojedyncze",
              },
              { icon: "/Icons/wardrobe.svg", text: "szafa" },
              { icon: "/Icons/sideTable.svg", text: "stolik" },
              { icon: "/Icons/blanket.svg", text: "pościel" },
            ]}
          />
          <UtilityCard
            title="Łazienka"
            utilities={[
              { icon: "/Icons/shower.svg", text: "Prysznic" },
              { icon: "/Icons/hairdryer.svg", text: "Suszarka do włosów" },
              { icon: "/Icons/bathTowel.svg", text: "Komplet ręczników" },
              {
                icon: "/Icons/beautyAndCosmetics.svg",
                text: "Kosmetyki hotelowe",
              },
            ]}
          />
          <UtilityCard
            title="Aneks kuchenny"
            utilities={[
              { icon: "/Icons/fridge.svg", text: "Lodówka" },
              { icon: "/Icons/hob.svg", text: "Kuchenka indukcyjna" },
              {
                icon: "/Icons/electricKettle.svg",
                text: "Czajnik elektryczny",
              },
              { icon: "/Icons/cutlery.svg", text: "Naczynia i sztućce" },
              { icon: "/Icons/coffeeMachine.svg", text: "Ekspres do kawy" },
            ]}
          />
          <UtilityCard
            title="Internet i rozrywka"
            utilities={[
              { icon: "/Icons/wifi.svg", text: "WiFi 100 Mb/s" },
              { icon: "/Icons/netflix.svg", text: "Netflix" },
              { icon: "/Icons/youtube.svg", text: "YouTube" },
              { icon: "/Icons/newsReport.svg", text: "Kanały TV" },
            ]}
          />
          <UtilityCard
            title="Salon"
            utilities={[
              { icon: "/Icons/smartTv.svg", text: "Telewizor Smart TV" },
              { icon: "/Icons/coffeeTable.svg", text: "Stolik kawowy" },
              ...(sofa
                ? [{ icon: "/Icons/sofa.svg", text: "Rozkładana sofa" }]
                : []),
              ...(airConditioner
                ? [{ icon: "/Icons/airConditioner.svg", text: "Klimatyzacja" }]
                : []),
            ]}
          />

          <UtilityCard
            title="Dodatkowe"
            utilities={[
              { icon: "/Icons/car.svg", text: "Parking prywatny" },
              { icon: "/Icons/ironingBoard.svg", text: "Żelazko i deska" },
              { icon: "/Icons/vacuumCleaner.svg", text: "Odkurzacz" },
              { icon: "/Icons/cleaningSet.svg", text: "Rowery elektryczne" },
            ]}
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={styles.regulationDiv}
      >
        <h1>Regulamin</h1>
        <ul>
          <motion.li
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img src={checkmark} />
            <p>Check-in: 15:00 - 22:00</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src={checkmark} />
            <p>Check-out: do 10:00</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={checkmark} />
            <p>Zakaz palenia w apartamencie</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img src={checkmark} />
            <p>Zwierzęta domowe mile widziane (po wcześniejszym uzgodnieniu)</p>
          </motion.li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Description;

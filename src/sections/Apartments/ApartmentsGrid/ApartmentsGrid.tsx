import React from "react";
import style from "./ApartmentsGrid.module.scss";
import ApartamentCard from "../../../components/ApartamentCard/ApartamentCard";
import apartmentsData from "../../../data/apartments.json";

const ApartmentsGrid: React.FC = () => {
  let time = 0.2;
  return (
    <section className={style.apartmentsGrid}>
      {apartmentsData.map((apartment, index) => (
        <ApartamentCard
          key={index}
          photoUrl={apartment.photoUrl}
          altPhoto={apartment.altPhoto}
          title={apartment.title}
          price={apartment.price}
          description={apartment.description}
          amountPeople={apartment.amountPeople}
          amountBed={apartment.amountBed}
          amountBathrooms={apartment.amountBathrooms}
          link={apartment.link}
          delayTime={(time += 0.2)}
        />
      ))}
    </section>
  );
};

export default ApartmentsGrid;

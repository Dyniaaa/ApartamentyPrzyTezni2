import React from "react";
import style from "./ApartmentsGrid.module.scss";
import ApartamentCard from "../../../components/ApartamentCard/ApartamentCard";
import apartmentsData from "../../../Data/apartments.json";

const ApartmentsGrid: React.FC = () => {
  return (
    <section className={style.apartmentsGrid}>
      <ApartamentCard
        photoUrl={apartmentsData[0].photoUrl}
        altPhoto={apartmentsData[0].altPhoto}
        title={apartmentsData[0].title}
        price={apartmentsData[0].price}
        description={apartmentsData[0].description}
        amountPeople={apartmentsData[0].amountPeople}
        amountBed={apartmentsData[0].amountBed}
        amountBathrooms={apartmentsData[0].amountBathrooms}
        link={apartmentsData[0].link}
      />
    </section>
  );
};

export default ApartmentsGrid;

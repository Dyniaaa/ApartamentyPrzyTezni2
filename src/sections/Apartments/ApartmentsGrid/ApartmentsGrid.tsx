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
      <ApartamentCard
        photoUrl={apartmentsData[1].photoUrl}
        altPhoto={apartmentsData[1].altPhoto}
        title={apartmentsData[1].title}
        price={apartmentsData[1].price}
        description={apartmentsData[1].description}
        amountPeople={apartmentsData[1].amountPeople}
        amountBed={apartmentsData[1].amountBed}
        amountBathrooms={apartmentsData[1].amountBathrooms}
        link={apartmentsData[1].link}
      />
      <ApartamentCard
        photoUrl={apartmentsData[2].photoUrl}
        altPhoto={apartmentsData[2].altPhoto}
        title={apartmentsData[2].title}
        price={apartmentsData[2].price}
        description={apartmentsData[2].description}
        amountPeople={apartmentsData[2].amountPeople}
        amountBed={apartmentsData[2].amountBed}
        amountBathrooms={apartmentsData[2].amountBathrooms}
        link={apartmentsData[2].link}
      />
      <ApartamentCard
        photoUrl={apartmentsData[3].photoUrl}
        altPhoto={apartmentsData[3].altPhoto}
        title={apartmentsData[3].title}
        price={apartmentsData[3].price}
        description={apartmentsData[3].description}
        amountPeople={apartmentsData[3].amountPeople}
        amountBed={apartmentsData[3].amountBed}
        amountBathrooms={apartmentsData[3].amountBathrooms}
        link={apartmentsData[3].link}
      />
      <ApartamentCard
        photoUrl={apartmentsData[4].photoUrl}
        altPhoto={apartmentsData[4].altPhoto}
        title={apartmentsData[4].title}
        price={apartmentsData[4].price}
        description={apartmentsData[4].description}
        amountPeople={apartmentsData[4].amountPeople}
        amountBed={apartmentsData[4].amountBed}
        amountBathrooms={apartmentsData[4].amountBathrooms}
        link={apartmentsData[4].link}
      />
      <ApartamentCard
        photoUrl={apartmentsData[5].photoUrl}
        altPhoto={apartmentsData[5].altPhoto}
        title={apartmentsData[5].title}
        price={apartmentsData[5].price}
        description={apartmentsData[5].description}
        amountPeople={apartmentsData[5].amountPeople}
        amountBed={apartmentsData[5].amountBed}
        amountBathrooms={apartmentsData[5].amountBathrooms}
        link={apartmentsData[5].link}
      />
      <ApartamentCard
        photoUrl={apartmentsData[6].photoUrl}
        altPhoto={apartmentsData[6].altPhoto}
        title={apartmentsData[6].title}
        price={apartmentsData[6].price}
        description={apartmentsData[6].description}
        amountPeople={apartmentsData[6].amountPeople}
        amountBed={apartmentsData[6].amountBed}
        amountBathrooms={apartmentsData[6].amountBathrooms}
        link={apartmentsData[6].link}
      />
    </section>
  );
};

export default ApartmentsGrid;

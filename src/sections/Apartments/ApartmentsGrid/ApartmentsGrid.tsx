import React from "react";
import style from "./ApartmentsGrid.module.scss";
import ApartamentCard from "../../../components/ApartamentCard/ApartamentCard";
import mainPhoto01 from "../../../assets/Photos/Apt 0.1/Sal 0.jpg";
import mainPhoto02 from "../../../assets/Photos/Apt 0.2/A-s-02.jpg";
import mainPhoto21 from "../../../assets/Photos/Apt 2.1/11.jpg";
import mainPhoto22 from "../../../assets/Photos/Apt 2.2/11.jpg";
import mainPhoto23 from "../../../assets/Photos/Apt 2.3/11.jpg";
import mainPhoto31 from "../../../assets/Photos/Apt 3.1/11.jpg";
import mainPhoto32 from "../../../assets/Photos/Apt 3.2/Salon 1.jpg";

const ApartmentsGrid: React.FC = () => {
  return (
    <section className={style.apartmentsGrid}>
      <ApartamentCard
        photoUrl={mainPhoto01}
        altPhoto="Zdjęcie apartamentu 0.1"
        title="Apartament 0.1"
        price="300"
        description="Luksusowy apartament z widokiem na park. Idealny dla par szukających komfortu i elegancji."
        amountPeople="4"
        amountBed="2"
        amountBathrooms="1"
      />
      <ApartamentCard
        photoUrl={mainPhoto02}
        altPhoto="Zdjęcie apartamentu 0.2"
        title="Apartament 0.2"
        price="300"
        description="Przestronny apartament rodzinny z dwoma sypialniami. Doskonały dla rodzin z dziećmi."
        amountPeople="4"
        amountBed="2"
        amountBathrooms="1"
      />
      <ApartamentCard
        photoUrl={mainPhoto21}
        altPhoto="Zdjęcie apartamentu 2.1"
        title="Apartament 2.1"
        price="280"
        description="Nowoczesne studio z otwartą przestrzenią. Idealne dla osób indywidualnych lub par."
        amountPeople="4"
        amountBed="2"
        amountBathrooms="1"
      />
      <ApartamentCard
        photoUrl={mainPhoto22}
        altPhoto="Zdjęcie apartamentu 2.2"
        title="Apartament 2.2"
        price="280"
        description="Przytulny apartament z komfortowym salonem. Doskonały na dłuższe pobyty."
        amountPeople="4"
        amountBed="2"
        amountBathrooms="1"
      />
      <ApartamentCard
        photoUrl={mainPhoto23}
        altPhoto="Zdjęcie apartamentu 2.3"
        title="Apartament 2.3"
        price="250"
        description="Apartament z luksusową łazienką spa. Relaks na najwyższym poziomie."
        amountPeople="4"
        amountBed="2"
        amountBathrooms="1"
      />
      <ApartamentCard
        photoUrl={mainPhoto31}
        altPhoto="Zdjęcie apartamentu 3.1"
        title="Apartament 3.1"
        price="350"
        description="Apartament z przestronnym balkonem i widokiem na zieleń. Ideał na letni wypoczynek."
        amountPeople="4"
        amountBed="2"
        amountBathrooms="1"
      />
      <ApartamentCard
        photoUrl={mainPhoto32}
        altPhoto="Zdjęcie apartamentu 3.2"
        title="Apartament 3.2"
        price="350"
        description="Nowoczesny loft z wysokimi sufitami i designerskim wystrojem. Dla wymagających gości."
        amountPeople="4"
        amountBed="2"
        amountBathrooms="1"
      />
    </section>
  );
};

export default ApartmentsGrid;

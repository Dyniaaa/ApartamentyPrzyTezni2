import React from "react";
import Title from "../../sections/Apartments/Title/Title.tsx";
import ApartmentsGrid from "../../sections/Apartments/ApartmentsGrid/ApartmentsGrid";
import Help from "../../sections/Apartments/Help/Help.tsx";

const Apartments: React.FC = () => {
  return (
    <>
      <Title />
      <ApartmentsGrid />
      <Help />
    </>
  );
};

export default Apartments;

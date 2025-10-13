import React from "react";
import ApartmentsTitle from "../../sections/Apartments/ApartmentsTitle/ApartmentsTitle.tsx";
import ApartmentsGrid from "../../sections/Apartments/ApartmentsGrid/ApartmentsGrid";
import Help from "../../sections/Apartments/Help/Help.tsx";

const Apartments: React.FC = () => {
  return (
    <>
      <ApartmentsTitle />
      <ApartmentsGrid />
      <Help />
    </>
  );
};

export default Apartments;

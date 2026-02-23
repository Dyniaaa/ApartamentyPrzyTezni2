import React from "react";
import BikesHero from "../../sections/Bikes/BikesHero/BikesHero";
import styles from "./Bikes.module.scss";
import BikesInformation from "../../sections/Bikes/BikesInformation/BikesInformation";
import BikeRoutes from "../../sections/Bikes/Routes/BikeRoutes";

const Bikes: React.FC = () => {
  return (
    <>
      <BikesHero />
      <div className={styles.container}>
        <BikesInformation />
      </div>
      <div className={styles.routesContainer}>
        <BikeRoutes />
      </div>
    </>
  );
};

export default Bikes;

import React from "react";
import styles from "./BikeRoutes.module.scss";
import eBike from "../../../assets/Apt - photos/RoweryLas.jpg";
import { motion } from "framer-motion";
import RouteCard from "../../../components/RouteCard/RouteCard";

const BikeRoutes: React.FC = () => {
  return (
    <section className={styles.routes}>
      <h1>Polecane trasy rowerowe</h1>
      <p>
        Odkryj piękno regionu na jednej z wielu malowniczych tras rowerowych
        wokół Buska-Zdroju.
      </p>
      <div className={styles.routesContent}>
        <div className={styles.imgDiv}>
          <motion.img
            src={eBike}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.25 }}
            className={styles.eBikeImage}
          />
        </div>
        <div className={styles.routesList}>
          <RouteCard
            difficulty="easy"
            time="2h 30m"
            distance="15km"
            title="Trasa lasowa"
            description="Malownicza trasa przez las, idealna na relaks i wypoczynek."
          />
          <RouteCard
            difficulty="medium"
            time="2h 30m"
            distance="15km"
            title="Trasa lasowa"
            description="Malownicza trasa przez las, idealna na relaks i wypoczynek."
          />
          <RouteCard
            difficulty="hard"
            time="2h 30m"
            distance="15km"
            title="Trasa lasowa"
            description="Malownicza trasa przez las, idealna na relaks i wypoczynek."
          />
          <RouteCard
            difficulty="medium"
            time="2h 30m"
            distance="15km"
            title="Trasa lasowa"
            description="Malownicza trasa przez las, idealna na relaks i wypoczynek."
          />
        </div>
      </div>
      <div className={styles.helpDiv}>
        <h1>Potrzebujesz pomocy przy planowaniu trasy?</h1>
        <p>
          Nasz zespół chętnie pomoże Ci wybrać odpowiednią trasę dostosowaną do
          Twoich możliwości i zainteresowań. Przygotujemy dla Ciebie
          spersonalizowaną mapę z punktami widokowymi i lokalnymi atrakcjami.
        </p>
        <a href="/contact">Skontaktuj się z nami</a>
      </div>
    </section>
  );
};

export default BikeRoutes;

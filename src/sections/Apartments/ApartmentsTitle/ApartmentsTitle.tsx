import React from "react";
import style from "./ApartmentsTitle.module.scss";

const ApartmentsTitle: React.FC = () => {
  return (
    <section className={style.apartmentsTitle}>
      <h1>Nasze Apartamenty</h1>
      <p>
        Wybierz spośród 7 wyjątkowych apartamentów, każdy z unikalnym
        charakterem i pełnym wyposażeniem. Wszystkie apartamenty są
        klimatyzowane i oferują bezpłatny dostęp do WiFi oraz parkingu.
      </p>
    </section>
  );
};

export default ApartmentsTitle;

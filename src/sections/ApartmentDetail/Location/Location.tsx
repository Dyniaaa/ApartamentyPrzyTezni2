import React from "react";
import styles from "./Location.module.scss";
import locationIcon from "../../../assets/Icons/location.svg";

const Location: React.FC = () => {
  return (
    <section className={styles.location}>
      <div className={styles.locationDiv}>
        <h1>Lokalizacja</h1>
        <div className={styles.contentDiv}>
          <div className={styles.infoDiv}>
            <p>
              Apartament znajduje się w doskonałej lokalizacji, zaledwie 50
              metrów od leczniczej tężni solankowej. W pobliżu znajdują się
              wszystkie niezbędne udogodnienia oraz główne atrakcje Buska-Zdrój.
            </p>
            <ul>
              <li>
                <img src={locationIcon} />
                <p>50m do tężni solankowej</p>
              </li>
              <li>
                <img src={locationIcon} />
                <p>200m do basenu termalnego</p>
              </li>
              <li>
                <img src={locationIcon} />
                <p>300m do centrum miasta</p>
              </li>
              <li>
                <img src={locationIcon} />
                <p>5 min pieszo do parku zdrojowego</p>
              </li>
            </ul>
          </div>
          <div className={styles.mapDiv}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5316.90131934672!2d20.712631102048018!3d50.46454738916135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717c318b603749b%3A0x7c2c791c19b52654!2sApartamenty%20Przy%20T%C4%99%C5%BCni!5e1!3m2!1spl!2spl!4v1761031450594!5m2!1spl!2spl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

import React, { useEffect } from "react";
import styles from "./Reservation.module.scss";

declare global {
  interface Window {
    w1?: (...args: any[]) => void;
    "BB-Widget"?: string;
  }
}

const Reservation: React.FC = () => {
  useEffect(() => {
    const scriptId = "w1-calendar-widget-script";

    (function (w: any, d: Document, s: string, o: string, f: string) {
      if (w[o]) return;
      w["BB-Widget"] = o;
      w[o] =
        w[o] ||
        function (...args: any[]) {
          (w[o].q = w[o].q || []).push(args);
        };
      if (d.getElementById(scriptId)) return;

      const js = d.createElement(s) as HTMLScriptElement;
      const fjs = d.getElementsByTagName(s)[0];
      js.id = scriptId;
      js.src = f;
      js.async = true;
      if (fjs && fjs.parentNode) fjs.parentNode.insertBefore(js, fjs);
    })(
      window,
      document,
      "script",
      "w1",
      "https://bed-booking.com/widget/widget.js"
    );

    const timer = setTimeout(() => {
      if (window.w1) {
        window.w1("init", {
          targetElementId: "widgetHolder_7qfi86255",
          widgetId: "05a639dda6e261e91eaf8e099b8f145886f6da42",
          type: "calendar",
          room: "1687222,1687223,1478080,1355031,1355032,1478081,1486941",
        });
      }
    }, 800);

    return () => {
      clearTimeout(timer);
      const widgetContainer = document.getElementById("widgetHolder_7qfi86255");
      if (widgetContainer) widgetContainer.innerHTML = "";
    };
  }, []);

  return (
    <section className={styles.reservation}>
      <p>Zapytaj o dostępność apartamentu!</p>
      <div id="widgetHolder_7qfi86255" className={styles.widgetContainer}></div>
    </section>
  );
};

export default Reservation;

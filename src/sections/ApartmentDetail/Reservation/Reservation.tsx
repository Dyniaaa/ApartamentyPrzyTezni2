import React, { useEffect } from "react";
import styles from "./Reservation.module.scss";

declare global {
  interface Window {
    w1?: (...args: any[]) => void;
    "BB-Widget"?: string;
  }
}

const CalendarReservation: React.FC = () => {
  useEffect(() => {
    const widgetScriptId = "w1-calendar-widget-script";

    // jeśli widget już istnieje, nie ładuj ponownie
    if (!window.w1) {
      (function (w: any, d: Document, s: string, o: string) {
        if (w[o]) return;
        w["BB-Widget"] = o;
        w[o] =
          w[o] ||
          function (...args: any[]) {
            (w[o].q = w[o].q || []).push(args);
          };

        // Tworzymy element jako HTMLScriptElement
        const js = d.createElement(s) as HTMLScriptElement;
        const fjs = d.getElementsByTagName(s)[0];
        if (fjs && fjs.parentNode) {
          js.id = widgetScriptId;
          js.src = "https://bed-booking.com/widget/widget.js";
          js.async = true;
          fjs.parentNode.insertBefore(js, fjs);
        }
      })(window, document, "script", "w1");
    }

    // Inicjalizacja widgetu typu calendar
    window.w1?.("init", {
      targetElementId: "widgetHolder_7qfi86255",
      widgetId: "05a639dda6e261e91eaf8e099b8f145886f6da42",
      type: "calendar",
      room: "1687222,1687223,1478080,1355031,1355032,1478081,1486941",
    });

    // Czyszczenie przy odmontowaniu komponentu
    return () => {
      const widgetContainer = document.getElementById("widgetHolder_7qfi86255");
      if (widgetContainer) widgetContainer.innerHTML = "";

      const existingScript = document.getElementById(widgetScriptId);
      if (existingScript) existingScript.remove();

      delete window.w1;
    };
  }, []);

  return (
    <section className={styles.reservation}>
      <div id="widgetHolder_7qfi86255" className={styles.widgetContainer}></div>
    </section>
  );
};

export default CalendarReservation;

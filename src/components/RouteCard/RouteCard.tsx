import styles from "./RouteCard.module.scss";
import clock from "../../assets/Icons/clock.svg";
import location from "../../assets/Icons/location.svg";

type Difficulty = "easy" | "medium" | "hard";

interface RouteCardProps {
  difficulty: Difficulty;
  time: string;
  distance: string;
  title: string;
  description: string;
}

const difficultyMap = {
  easy: {
    label: "Łatwa",
    className: styles.easy,
  },
  medium: {
    label: "Średnia",
    className: styles.medium,
  },
  hard: {
    label: "Trudna",
    className: styles.hard,
  },
};

export default function RouteCard({
  difficulty,
  time,
  distance,
  title,
  description,
}: RouteCardProps) {
  const difficultyData = difficultyMap[difficulty];

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <span className={`${styles.badge} ${difficultyData.className}`}>
          {difficultyData.label}
        </span>
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.meta}>
        <div className={styles.metaItem}>
          <img src={clock} alt="Clock icon" />
          <span>{distance}</span>
        </div>
        <div className={styles.metaItem}>
          <img src={location} alt="Location icon" />
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./ImpressionCard.module.scss";
import { ImpressionWithMetadata } from "./models/ImpressionCardModels";

type ImpressionCardProps = {
  impression: ImpressionWithMetadata;
  onClick: () => void;
};

const ImpressionCard: React.FC<ImpressionCardProps> = ({
  impression,
  onClick,
}) => {
  return (
    <div
      className={`${styles.impressionCard} ${
        impression.isActive ? styles.active : ""
      }`}
      onClick={onClick}
    >
      <div className={styles.imageWrapper}>
        <img
          src={impression.imageUrl}
          alt={impression.title}
          className={styles.halfVisibleImage}
        />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.impressionTitle}>{impression.title}</h3>
        <p className={styles.impressionContent}>{impression.content}</p>
      </div>
    </div>
  );
};

export default ImpressionCard;

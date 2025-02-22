import React from "react";
import "./JournalCard.css";
import JournalCardModel from "./models/JournalCardModel";

const JournalCard: React.FC<JournalCardModel> = ({
  title,
  description,
  image,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`journal-card ${isEven ? "even" : "odd"}`}>
      <img src={image} alt={title} className="journal-image" />

      <div className="journal-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="#" className="view-more">
          View More
        </a>
      </div>
    </div>
  );
};

export default JournalCard;

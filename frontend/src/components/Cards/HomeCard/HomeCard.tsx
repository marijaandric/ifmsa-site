import "./HomeCard.css";
import HomeCardModel from "./models/HomeCardModel";

const HomeCard: React.FC<HomeCardModel> = ({ image, title, onButtonClick }) => {
  return (
    <div className="home-card">
      <div className="content-container">
        <img src={image} alt={title} />
        <div className="overlay">
          <h3>{title}</h3>
          <p>Description 1 2 3 </p>
          <button
            className="button-red button-home-card"
            onClick={onButtonClick}
          >
            Hi
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;

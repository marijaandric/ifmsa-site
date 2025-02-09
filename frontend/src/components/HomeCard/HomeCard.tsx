import "./HomeCard.css";
import HomeCardModel from "./models/HomeCardModel";

const HomeCard: React.FC<HomeCardModel> = ({ image, title, onButtonClick }) => {
  return (
    <div className="home-card">
      <div className="image-container">
        <img src={image} alt={title} />
        <div className="overlay">
          <h3>{title}</h3>
          <button className="button-red" onClick={onButtonClick}>
            Hi
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;

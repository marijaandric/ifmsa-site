import "./NewsCard.css";
import NewsCardModel from "./models/NewsCardModel";

const NewsCard: React.FC<NewsCardModel> = ({
  title,
  imageUrl,
  category,
  description,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="news-card">
      <img src={imageUrl} alt="News" className="news-card-image" />
      <div className="news-card-content">
        <div className="news-card-header">
          <span className="news-card-category">
            <p>{category}</p>
          </span>
          <span className="news-card-read-more">
            <p>Read more</p>
          </span>
        </div>
        <h3>{title}</h3>
        <p className="news-card-description">{description}</p>
        <div className="space-between">
          <button onClick={onDelete} className="button button-red">
            Delete
          </button>
          <button onClick={onEdit} className="button">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

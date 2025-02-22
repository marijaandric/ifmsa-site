import "./OrganizationCard.css";
import OrgnizationCardModel from "./models/OrganizationCardModel";

const OrganizationCard: React.FC<OrgnizationCardModel> = ({
  icon,
  number,
  description,
}) => {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <div className="number">{number}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default OrganizationCard;

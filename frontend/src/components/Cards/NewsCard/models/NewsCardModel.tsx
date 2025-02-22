export default interface HomeCardModel {
  title: string;
  imageUrl: string;
  category: string;
  description: string;
  onDelete: () => void;
  onEdit: () => void;
}

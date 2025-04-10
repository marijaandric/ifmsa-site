export type Impression = {
  id: string | number;
  title: string;
  content: string;
  imageUrl: string;
};
export type ExchangeImpressionsCarouselProps = {
  impressions: Impression[];
};

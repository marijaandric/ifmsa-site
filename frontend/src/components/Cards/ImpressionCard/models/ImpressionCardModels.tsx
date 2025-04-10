import { Impression } from "../../../Carousel/ExchangeImpressionsCarousel/models/ExchangeImpressionsCarouselModels";

export type ImpressionWithMetadata = Impression & {
  index: number;
  isActive: boolean;
  imageUrl: string;
};

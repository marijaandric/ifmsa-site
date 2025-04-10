import React, { useState, useEffect, useRef } from "react";
import styles from "./ExchangeImpressionsCarousel.module.scss";
import { ExchangeImpressionsCarouselProps } from "./models/ExchangeImpressionsCarouselModels";
import { ImpressionWithMetadata } from "../../Cards/ImpressionCard/models/ImpressionCardModels";
import ImpressionCard from "../../Cards/ImpressionCard/ImpressionCard";
import { useMediaQuery } from "react-responsive";

const ExchangeImpressionsCarousel: React.FC<
  ExchangeImpressionsCarouselProps
> = ({ impressions }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === impressions.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? impressions.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1000000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  useEffect(() => {
    if (carouselRef.current && !isMobile) {
      const carousel = carouselRef.current;
      const activeCard = carousel.querySelector(
        `.${styles.active}`
      ) as HTMLElement;

      if (activeCard) {
        const containerWidth = carousel.offsetWidth;
        const cardLeft = activeCard.offsetLeft;
        const cardWidth = activeCard.offsetWidth;
        const scrollTo = cardLeft - containerWidth / 2 + cardWidth / 2;

        carousel.scrollTo({
          left: scrollTo,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex, isMobile]);

  const getVisibleImpressions = (): ImpressionWithMetadata[] => {
    if (isMobile) {
      return [
        {
          ...impressions[activeIndex],
          index: activeIndex,
          isActive: true,
        },
      ];
    }

    const visibleIndices: number[] = [];
    const length = impressions.length;

    if (length <= 3) {
      return impressions.map((imp, index) => ({
        ...imp,
        index,
        isActive: index === activeIndex,
      }));
    }

    const prevIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : length - 1;
    const nextIndex = activeIndex + 1 < length ? activeIndex + 1 : 0;

    visibleIndices.push(prevIndex, activeIndex, nextIndex);

    return visibleIndices.map((index) => ({
      ...impressions[index],
      index,
      isActive: index === activeIndex,
    }));
  };

  const visibleImpressions = getVisibleImpressions();

  return (
    <div className={styles.wrapper}>
      <div className={styles.carouselContainer}>
        <button className={styles.navButton} onClick={prevSlide}>
          &lt;
        </button>

        <div className={styles.impressionsCards} ref={carouselRef}>
          {visibleImpressions.map((impression) => (
            <ImpressionCard
              key={`${impression.id}-${impression.index}`}
              impression={impression}
              onClick={() => goToSlide(impression.index)}
            />
          ))}
        </div>

        <button className={styles.navButton} onClick={nextSlide}>
          &gt;
        </button>
      </div>

      <div className={styles.dotsContainer}>
        {impressions.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              index === activeIndex ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExchangeImpressionsCarousel;

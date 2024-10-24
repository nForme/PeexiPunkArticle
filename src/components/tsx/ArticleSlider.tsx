import { useRef, useState } from "react";
import "../scss/ArticleSlider.scss";

const ArticleSlider: React.FC = () => {
  const images = ["./PhotoTop.png", "./PhotoTop.png", "./PhotoTop.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const startTouch = useRef(0);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    startTouch.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const endTouch = event.changedTouches[0].clientX;
    const touchDiff = startTouch.current - endTouch;

    const minSwipeDistance = 50;

    if (touchDiff > minSwipeDistance) {
      goToNext();
    } else if (touchDiff < -minSwipeDistance) {
      goToPrevious();
    }
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? images.length - 1 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  return (
    <>
      <div
        className="slider"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticleSlider;

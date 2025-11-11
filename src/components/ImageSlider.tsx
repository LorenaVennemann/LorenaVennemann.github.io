import { useState } from 'react';
import './ImageSlider.css';

interface ImageSliderProps {
  images: string[];
  alt: string;
}

const ImageSlider = ({ images, alt }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div className="image-slider">
      <div className="slider-container">
        <div 
          className="slider-wrapper" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`${alt} - Screenshot ${index + 1}`} />
            </div>
          ))}
        </div>
        
        {images.length > 1 && (
          <>
            <button className="slider-btn slider-btn-prev" onClick={goToPrevious}>
              <span>‹</span>
            </button>
            <button className="slider-btn slider-btn-next" onClick={goToNext}>
              <span>›</span>
            </button>
            
            <div className="slider-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
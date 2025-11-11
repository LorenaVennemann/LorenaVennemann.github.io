import { useState, useEffect, useRef } from 'react';
import './ImageGallery.css';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  className?: string;
}

const ImageGallery = ({ images, className = '' }: ImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(prev => 
        prev === 0 ? images.length - 1 : (prev || 1) - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(prev => 
        prev === images.length - 1 ? 0 : (prev || 0) + 1
      );
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        if (event.key === 'Escape') {
          closeLightbox();
        } else if (event.key === 'ArrowLeft') {
          goToPrevious();
        } else if (event.key === 'ArrowRight') {
          goToNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImageIndex]);

  // Close lightbox when clicking outside image
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (lightboxRef.current && !lightboxRef.current.contains(event.target as Node)) {
        closeLightbox();
      }
    };

    if (selectedImageIndex !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedImageIndex]);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={`gallery-loading ${className}`}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className={`image-gallery ${className}`}>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <div className="gallery-icon">🔍</div>
                {image.caption && (
                  <div className="gallery-caption">{image.caption}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div className="lightbox-overlay">
          <div className="lightbox-container" ref={lightboxRef}>
            <button 
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ×
            </button>
            
            {images.length > 1 && (
              <>
                <button 
                  className="lightbox-nav lightbox-prev"
                  onClick={goToPrevious}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button 
                  className="lightbox-nav lightbox-next"
                  onClick={goToNext}
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}
            
            <img 
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].alt}
              className="lightbox-image"
            />
            
            {images[selectedImageIndex].caption && (
              <div className="lightbox-caption">
                {images[selectedImageIndex].caption}
              </div>
            )}
            
            {images.length > 1 && (
              <div className="lightbox-counter">
                {selectedImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
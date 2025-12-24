import { useState, useEffect } from 'react'
import './ImageSlideshow.css'

const ImageSlideshow = ({ images, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrevious()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  if (!images || images.length === 0) return null

  return (
    <div className={`slideshow ${className}`}>
      <div
        className="slideshow-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="slideshow-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="slideshow-slide">
              {image.wrapperClassName ? (
                <div className={image.wrapperClassName}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={image.className || 'slideshow-image'}
                  />
                </div>
              ) : (
                <img
                  src={image.src}
                  alt={image.alt}
                  className={image.className || 'slideshow-image'}
                />
              )}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              className="slideshow-button slideshow-button-prev"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="slideshow-button slideshow-button-next"
              onClick={goToNext}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Dots Navigation */}
      {images.length > 1 && (
        <div className="slideshow-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`slideshow-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to image ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <div className="slideshow-counter" aria-live="polite">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}

export default ImageSlideshow

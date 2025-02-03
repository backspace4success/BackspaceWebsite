import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsSliderProps {
  images: string[];
}

function TestimonialsSlider({ images }: TestimonialsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(1);

  // Detect screen size and adjust slidesToShow
  useEffect(() => {
    const updateSlidesToShow = () => {
      setSlidesToShow(window.innerWidth >= 1024 ? 3 : 1);
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % images.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length, slidesToShow]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % images.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - slidesToShow + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex / slidesToShow) * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-2"
              style={{ flex: `0 0 ${100 / slidesToShow}%` }}
            >
              <img
                src={image}
                alt={`Testimonial ${index + 1}`}
                className="w-full h-auto object-cover rounded-md shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
        aria-label="Previous"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
        aria-label="Next"
      >
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: Math.ceil(images.length / slidesToShow) }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentIndex(index * slidesToShow);
            }}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIndex === index * slidesToShow ? 'w-6 bg-primary' : 'bg-gray-300 hover:bg-primary/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialsSlider;

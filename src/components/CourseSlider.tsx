import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Clock, ArrowRight } from 'lucide-react';

interface Course {
  title: string;
  description: string;
  level: string;
  duration: string;
  rating: number;
  image: string;
  topics: string[];
}

interface CourseSliderProps {
  courses: Course[];
  onViewCourse: () => void;
}

function CourseSlider({ courses, onViewCourse }: CourseSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    // Adjust items per page based on screen size
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };

    updateItemsPerPage(); // Initial call
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(courses.length / itemsPerPage);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex + itemsPerPage >= courses.length ? 0 : prevIndex + itemsPerPage
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, courses.length, itemsPerPage]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= courses.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0 ? courses.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index * itemsPerPage);
  };

  const currentCourses = courses.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className={`grid grid-cols-1 md:grid-cols-${itemsPerPage} gap-8`}>
          {currentCourses.map((course, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition transform hover:-translate-y-1"
            >
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary">{course.level}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-secondary fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{course.title}</h3>
                <p className="text-black/70 mb-4 line-clamp-2">{course.description}</p>
                <div className="flex items-center text-sm text-black/60 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.topics.slice(0, 3).map((topic, i) => (
                    <span key={i} className="bg-accent/10 text-primary text-sm px-3 py-1 rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={onViewCourse}
                  className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition flex items-center justify-center"
                >
                  View Course <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-md text-primary hover:text-primary/80 transition"
        aria-label="Previous courses"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-md text-primary hover:text-primary/80 transition"
        aria-label="Next courses"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="flex justify-center space-x-2 mt-8">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex / itemsPerPage) === index ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
            }`}
            aria-label={`Go to course set ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseSlider;

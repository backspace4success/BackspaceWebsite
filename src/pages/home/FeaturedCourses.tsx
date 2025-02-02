import React from 'react';
import { ArrowRight } from 'lucide-react';
import CourseSlider from '../../components/CourseSlider';
import { courses } from '../../data/courses';

interface FeaturedCoursesProps {
  setActivePage: (page: string) => void;
}

function FeaturedCourses({ setActivePage }: FeaturedCoursesProps) {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Featured Courses</h2>
          <p className="text-xl text-black/70">Start your learning journey with our most popular courses</p>
        </div>
        <CourseSlider 
          courses={courses} 
          onViewCourse={() => setActivePage('courses')} 
        />
        <div className="text-center mt-12">
          <button 
            onClick={() => setActivePage('courses')}
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition inline-flex items-center"
          >
            View All Courses <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCourses;
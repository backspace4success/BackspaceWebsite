import React, { useState } from 'react';
import { Clock, Star, Users, ArrowRight } from 'lucide-react';
import { courses } from '../data/courses';

interface CoursesProps {
  onViewCourse: (courseId: number) => void;
}

interface Filters {
  level: string;
  category: string;
  duration: string;
}

function Courses({ onViewCourse }: CoursesProps) {
  const [filters, setFilters] = useState<Filters>({
    level: 'All Levels',
    category: 'All Categories',
    duration: 'Any'
  });

  const filterCourses = (courses: typeof import('../data/courses').courses) => {
    return courses.filter(course => {
      const matchesLevel = filters.level === 'All Levels' || course.level === filters.level;
      
      // Extract unique categories from course topics for category filtering
      const courseCategories = new Set(course.topics.map(topic => {
        if (topic.includes('Python')) return 'Programming Languages';
        if (topic.includes('Web') || topic.includes('Frontend') || topic.includes('Backend')) return 'Web Development';
        if (topic.includes('Data')) return 'Data Science';
        if (topic.includes('Algorithm') || topic.includes('Structure')) return 'Computer Science';
        if (topic.includes('Network')) return 'Networking';
        if (topic.includes('Security')) return 'Cybersecurity';
        return 'Other';
      }));
      const matchesCategory = filters.category === 'All Categories' || courseCategories.has(filters.category);

      // Duration filtering
      const weeksDuration = parseInt(course.duration);
      const matchesDuration = filters.duration === 'Any' ||
        (filters.duration === '0-4 weeks' && weeksDuration <= 4) ||
        (filters.duration === '5-8 weeks' && weeksDuration > 4 && weeksDuration <= 8) ||
        (filters.duration === '9+ weeks' && weeksDuration > 8);

      return matchesLevel && matchesCategory && matchesDuration;
    });
  };

  const filteredCourses = filterCourses(courses);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Courses Hero */}
      <div className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Our Courses</h1>
            <p className="text-xl text-white/80">Choose from our comprehensive selection of programming courses</p>
          </div>
        </div>
      </div>

      {/* Course Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select 
              className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              value={filters.level}
              onChange={(e) => setFilters(prev => ({ ...prev, level: e.target.value }))}
            >
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            
            <select 
              className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              value={filters.category}
              onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
            >
              <option>All Categories</option>
              <option>Programming Languages</option>
              <option>Web Development</option>
              <option>Data Science</option>
              <option>Computer Science</option>
              <option>Networking</option>
              <option>Cybersecurity</option>
            </select>
            
            <select 
              className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              value={filters.duration}
              onChange={(e) => setFilters(prev => ({ ...prev, duration: e.target.value }))}
            >
              <option>Any</option>
              <option>0-4 weeks</option>
              <option>5-8 weeks</option>
              <option>9+ weeks</option>
            </select>

            <button 
              onClick={() => setFilters({ level: 'All Levels', category: 'All Categories', duration: 'Any' })}
              className="bg-primary text-white rounded-md py-2 px-4 hover:bg-primary/90 transition"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-8">
          <p className="text-black/70">
            Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
          </p>
        </div>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-black mb-2">No courses found</h3>
            <p className="text-black/70">Try adjusting your filters to find more courses</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
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
                  <p className="text-black/70 mb-4">{course.description}</p>
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
                    onClick={() => onViewCourse(index)}
                    className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition flex items-center justify-center"
                  >
                    View Course <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Courses;
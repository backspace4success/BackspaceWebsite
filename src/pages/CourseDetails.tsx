import React from 'react';
import { ArrowLeft, Clock, Users, Star, CheckCircle, BookOpen, Target, Briefcase, Award } from 'lucide-react';
import { courses } from '../data/courses';

interface CourseDetailsProps {
  courseId: number;
  setActivePage: (page: string) => void;
}

function CourseDetails({ courseId, setActivePage }: CourseDetailsProps) {
  const course = courses[courseId];

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">Course not found</h1>
          <button
            onClick={() => setActivePage('courses')}
            className="text-primary hover:text-primary/90 flex items-center"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setActivePage('courses')}
            className="text-white/80 hover:text-white flex items-center mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Courses
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-accent/20 text-white px-4 py-1 rounded-full text-sm">
                  {course.level}
                </span>
                <div className="flex items-center text-white/80">
                  <Star className="h-5 w-5 text-secondary fill-current" />
                  <span className="ml-1">{course.rating}</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">{course.title}</h1>
              <p className="text-xl text-white/80 mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-4 text-white/80">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  {/* <Users className="h-5 w-5 mr-2" />
                  {course.students.toLocaleString()} students */}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-lg blur-lg"></div>
              <img
                src={course.image}
                alt={course.title}
                className="relative rounded-lg shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What You'll Learn */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
                <Target className="h-6 w-6 mr-2 text-primary" />
                What You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Course Content */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
                <BookOpen className="h-6 w-6 mr-2 text-primary" />
                Course Content
              </h2>
              <div className="space-y-4">
                {course.topics.map((topic, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-black">{topic}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
                <Briefcase className="h-6 w-6 mr-2 text-primary" />
                Practical Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.projects.map((project, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-accent mr-2" />
                      <h3 className="font-semibold text-black">Project {index + 1}</h3>
                    </div>
                    <p className="text-black/70">{project}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-black mb-2">Prerequisites</h3>
                  <p className="text-black/70">{course.prerequisites}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Duration</h3>
                  <div className="flex items-center text-black/70">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    {course.duration}
                  </div>
                </div>
                <div>
                  {/* <h3 className="font-semibold text-black mb-2">Enrolled</h3>
                  <div className="flex items-center text-black/70">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    {course.students.toLocaleString()} students
                  </div> */}
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
import React from 'react';
import { GraduationCap, Target, Users, Clock, Award, Shield } from 'lucide-react';

function WhyChooseUs() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">Why Choose Backspace?</h2>
          <p className="text-xl text-black/70">We provide the best learning experience for our students</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Expert Instructors</h3>
            <p className="text-black/70">
              Learn from industry professionals with years of real-world experience.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Practical Learning</h3>
            <p className="text-black/70">
              Hands-on projects and real-world applications to build your portfolio.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Community Support</h3>
            <p className="text-black/70">
              Join a community of learners and get help when you need it.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Flexible Learning</h3>
            <p className="text-black/70">
              Learn at your own pace with lifetime access to course content.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Certifications</h3>
            <p className="text-black/70">
              Earn industry-recognized certificates upon course completion.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Money-Back Guarantee</h3>
            <p className="text-black/70">
              30-day money-back guarantee if you're not satisfied.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
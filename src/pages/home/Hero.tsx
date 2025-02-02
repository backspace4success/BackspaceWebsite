import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  setActivePage: (page: string) => void;
}

function Hero({ setActivePage }: HeroProps) {
  return (
    <div className="relative bg-primary overflow-hidden h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90"></div>
        <img
          src="https://github.com/anwar211944/BackspaceWebsite/blob/main/img/hero.png?raw=true"
          alt="Students learning"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Learn Anything, Anytime, Anywhere
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Access over 10,000+ courses in programming, design, and business. Learn from industry experts and transform your career.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setActivePage('courses')}
                  className="bg-secondary text-black px-8 py-3 rounded-full hover:bg-secondary/90 transition flex items-center"
                >
                  Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="bg-white/10 text-white px-8 py-3 rounded-full hover:bg-white/20 transition">
                  Start Free Trial
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-lg blur-lg"></div>
              <img
                src="https://github.com/anwar211944/BackspaceWebsite/blob/main/img/Backspace-Logo.png?raw=true"
                alt="Online learning"
                className="relative rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
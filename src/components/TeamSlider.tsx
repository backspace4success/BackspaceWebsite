import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Github } from 'lucide-react';
import { TeamMember } from '../data/team';

interface TeamSliderProps {
  members: TeamMember[];
}

function TeamSlider({ members }: TeamSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(members.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= members.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 ? members.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const currentMembers = members.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="relative">
      <div className="flex items-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 text-primary hover:text-primary/80 transition transform -translate-x-full"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {currentMembers.map((member) => (
            <div key={member.id} className="text-center p-6 transition-all duration-300">
              <div className="relative group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    {member.socialLinks?.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full hover:bg-primary hover:text-white transition"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {member.socialLinks?.twitter && (
                      <a
                        href={member.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full hover:bg-primary hover:text-white transition"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                    {member.socialLinks?.github && (
                      <a
                        href={member.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full hover:bg-primary hover:text-white transition"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-black">{member.name}</h3>
              <p className="text-primary mb-2">{member.role}</p>
              <p className="text-black/70">{member.bio}</p>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 text-primary hover:text-primary/80 transition transform translate-x-full"
          aria-label="Next slide"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * itemsPerPage)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex / itemsPerPage) === index
                ? 'bg-primary w-6'
                : 'bg-gray-300 hover:bg-primary/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamSlider;
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

function DemoVideo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">See Backspace in Action</h2>
          <p className="text-xl text-black/70">Watch how our platform transforms the learning experience</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Video Thumbnail */}
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
              alt="Platform Demo"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white/90 hover:bg-white text-primary p-4 rounded-full transition transform hover:scale-110"
                aria-label="Play demo video"
              >
                <Play className="h-8 w-8 fill-current" />
              </button>
            </div>
          </div>

          {/* Video Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-2">Interactive Learning</h3>
              <p className="text-black/70">Engage with hands-on exercises and real-time feedback</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-2">Expert Support</h3>
              <p className="text-black/70">Get help from industry professionals whenever you need</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-black mb-2">Project-Based</h3>
              <p className="text-black/70">Build a portfolio with real-world projects</p>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-6xl mx-auto">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-white/80 transition"
                aria-label="Close video"
              >
                <X className="h-8 w-8" />
              </button>
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src="https://www.youtube.com/embed/your-video-id?autoplay=1"
                  title="Platform Demo Video"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DemoVideo;
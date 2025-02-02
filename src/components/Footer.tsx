import React from 'react';
import { Code2, Facebook, Instagram, Linkedin, Link2, MessageCircleMore } from 'lucide-react';

interface FooterProps {
  setActivePage?: (page: string) => void;
}

function Footer({ setActivePage }: FooterProps) {
  const handleNavigation = (page: string) => {
    if (setActivePage) {
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => handleNavigation('home')}
            >
              <Code2 className="h-8 w-8 text-secondary" />
              <span className="ml-2 text-xl font-bold text-secondary">Backspace</span>
            </div>
            <p className="mt-4 text-white/80">Empowering the next generation of developers</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('home')}
                  className="text-white/80 hover:text-secondary cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('courses')}
                  className="text-white/80 hover:text-secondary cursor-pointer"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('pricing')}
                  className="text-white/80 hover:text-secondary cursor-pointer"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('blog')}
                  className="text-white/80 hover:text-secondary cursor-pointer"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('contact')}
                  className="text-white/80 hover:text-secondary cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('courses')}
                  className="text-white/80 hover:text-secondary cursor-pointer"
                >
                  Documentation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('contact')}
                  className="text-white/80 hover:text-secondary cursor-pointer"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('blog')}
                  className="text-white/80 hover:text-secondary cursor-pointer"
                >
                  Community
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="mt-4 flex space-x-4">
              <a 
                href="https://wa.me/message/XRJUIWGWHUBLA1" 
                className="text-white/80 hover:text-secondary" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircleMore className="h-6 w-6" />
              </a>
              <a 
                href="https://www.facebook.com/backspace4succes" 
                className="text-white/80 hover:text-secondary" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/backspace4success/" 
                className="text-white/80 hover:text-secondary" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/101676727" 
                className="text-white/80 hover:text-secondary" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://linktr.ee/backspace4success" 
                className="text-white/80 hover:text-secondary" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Link2 className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-white/80">
          <p>&copy; 2024 Backspace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
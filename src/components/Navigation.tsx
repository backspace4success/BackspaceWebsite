import React, { useState } from 'react';
import { Code2, Menu, X } from 'lucide-react';

interface NavigationProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

function Navigation({ activePage, setActivePage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page: string) => {
    setActivePage(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-primary/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <Code2 className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-primary">Backspace</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-primary"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavClick('courses')}
              className={`${activePage === 'courses' ? 'text-primary' : 'text-black'} hover:text-primary`}
            >
              Courses
            </button>
            <button 
              onClick={() => handleNavClick('pricing')}
              className={`${activePage === 'pricing' ? 'text-primary' : 'text-black'} hover:text-primary`}
            >
              Pricing
            </button>
            <button 
              onClick={() => handleNavClick('blog')}
              className={`${activePage === 'blog' ? 'text-primary' : 'text-black'} hover:text-primary`}
            >
              Blog
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={`${activePage === 'contact' ? 'text-primary' : 'text-black'} hover:text-primary`}
            >
              Contact
            </button>
          </div>

          {/* Desktop CTA button */}
          <div className="hidden md:block">
            <button className="bg-secondary text-black px-6 py-2 rounded-full hover:bg-secondary/90 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-primary/10">
            <button
              onClick={() => handleNavClick('courses')}
              className={`${
                activePage === 'courses' ? 'text-primary' : 'text-black'
              } block px-3 py-2 w-full text-left hover:text-primary`}
            >
              Courses
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className={`${
                activePage === 'pricing' ? 'text-primary' : 'text-black'
              } block px-3 py-2 w-full text-left hover:text-primary`}
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavClick('blog')}
              className={`${
                activePage === 'blog' ? 'text-primary' : 'text-black'
              } block px-3 py-2 w-full text-left hover:text-primary`}
            >
              Blog
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`${
                activePage === 'contact' ? 'text-primary' : 'text-black'
              } block px-3 py-2 w-full text-left hover:text-primary`}
            >
              Contact
            </button>
            <button className="w-full bg-secondary text-black px-6 py-2 rounded-full hover:bg-secondary/90 transition mt-4">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
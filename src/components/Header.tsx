import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Instagram, Youtube, Phone, MessageSquare } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const logoImg = new Image();
    logoImg.onload = () => {
      console.log('Logo image loaded successfully');
      setLogoLoaded(true);
      setLogoError(false);
    };
    logoImg.onerror = (e) => {
      console.error('Failed to load logo image', e);
      setLogoLoaded(false);
      setLogoError(true);
    };
    logoImg.src = '/logo.png';
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white rangoli-shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        {/* Top bar with social media */}
        <div className="hidden md:flex items-center justify-end space-x-4 mb-2">
          <a href="https://www.instagram.com/tammewarseema?igsh=djk5Z2VwanI1YTBs" target="_blank" rel="noopener noreferrer" 
            className="inline-flex items-center text-sm text-rangoli-purple hover:text-pink-500 transition-all transform hover:scale-105">
            <Instagram size={16} className="mr-1" />
            <span>@tammewarseema</span>
          </a>
          <a href="https://youtube.com/@akankshacreations268?si=HBonbqsm8QAifcdL" target="_blank" rel="noopener noreferrer" 
            className="inline-flex items-center text-sm text-rangoli-purple hover:text-red-600 transition-all transform hover:scale-105">
            <Youtube size={16} className="mr-1" />
            <span>Akanksha Creations</span>
          </a>
          <a href="tel:+919665493102" 
            className="inline-flex items-center text-sm text-rangoli-purple hover:text-green-600 transition-all">
            <Phone size={16} className="mr-1" />
            <span>+91 9665493102</span>
          </a>
          <a href="https://wa.me/919665493102" target="_blank" rel="noopener noreferrer" 
            className="inline-flex items-center text-sm text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded-full transition-all">
            <MessageSquare size={16} className="mr-1" />
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="flex justify-between items-center">
          {/* Logo & Business Name */}
          <div className="flex items-center">
            <div className="h-24 w-24 rounded-full overflow-hidden mr-3 shadow-md bg-gray-100">
              {!logoLoaded && !logoError && (
                <Skeleton className="h-full w-full" />
              )}
              {!logoError && (
                <img 
                  src="/logo.png" 
                  alt="Akanksha Creations Logo" 
                  className={`w-full h-full object-cover ${logoLoaded ? 'block' : 'hidden'}`}
                  onError={() => setLogoError(true)}
                />
              )}
              {logoError && (
                <div className="h-full w-full flex items-center justify-center text-rangoli-purple text-2xl font-bold">
                  AC
                </div>
              )}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-rangoli-purple">Akanksha Creations</h1>
              <p className="text-sm text-rangoli-purple/70">Rangoli Arts & Classes</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-rangoli-purple hover:text-rangoli-orange transition-colors">Home</a>
            <a href="#gallery" className="text-rangoli-purple hover:text-rangoli-orange transition-colors">Gallery</a>
            <a href="#order" className="text-rangoli-purple hover:text-rangoli-orange transition-colors">Order</a>
            <a href="#enquiry" className="text-rangoli-purple hover:text-rangoli-orange transition-colors">Classes</a>
            <a href="#feedback" className="text-rangoli-purple hover:text-rangoli-orange transition-colors">Feedback</a>
            <a href="#contact" className="text-rangoli-purple hover:text-rangoli-orange transition-colors">Contact</a>
            <Button 
              className="bg-rangoli-purple hover:bg-rangoli-orange text-white"
              onClick={() => window.location.href="#enquiry"}
            >
              Enquire Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              onClick={toggleMenu} 
              variant="ghost" 
              size="icon"
              className="text-rangoli-purple"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-accordion-down">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-rangoli-purple hover:text-rangoli-orange transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#gallery" 
                className="text-rangoli-purple hover:text-rangoli-orange transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#order" 
                className="text-rangoli-purple hover:text-rangoli-orange transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Order
              </a>
              <a 
                href="#enquiry" 
                className="text-rangoli-purple hover:text-rangoli-orange transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Classes
              </a>
              <a 
                href="#feedback" 
                className="text-rangoli-purple hover:text-rangoli-orange transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Feedback
              </a>
              <a 
                href="#contact" 
                className="text-rangoli-purple hover:text-rangoli-orange transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              
              {/* Social Media Icons - Mobile */}
              <div className="flex justify-between p-2 mt-2 border-t border-gray-200 pt-4">
                <a href="https://www.instagram.com/tammewarseema?igsh=djk5Z2VwanI1YTBs" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full text-white transform hover:scale-105 transition-all duration-300">
                  <Instagram size={22} />
                </a>
                <a href="https://youtube.com/@akankshacreations268?si=HBonbqsm8QAifcdL" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full text-white transform hover:scale-105 transition-all duration-300">
                  <Youtube size={22} />
                </a>
                <a href="tel:+919665493102" 
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full text-white transform hover:scale-105 transition-all duration-300">
                  <Phone size={22} />
                </a>
                <a href="https://wa.me/919665493102" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full text-white transform hover:scale-105 transition-all duration-300">
                  <MessageSquare size={22} />
                </a>
              </div>
              
              <Button 
                className="bg-rangoli-purple hover:bg-rangoli-orange text-white w-full mt-2"
                onClick={() => {
                  window.location.href="#enquiry";
                  setIsMenuOpen(false);
                }}
              >
                Enquire Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

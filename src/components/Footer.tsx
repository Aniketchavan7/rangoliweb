import React, { useEffect, useState } from 'react';
import { Instagram, Youtube, Phone, MessageSquare, MapPin, Mail } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const Footer = () => {
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

  return (
    <footer id="contact" className="bg-rangoli-purple text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="h-16 w-16 rounded-full overflow-hidden mr-3 bg-white">
                {!logoLoaded && !logoError && (
                  <Skeleton className="h-full w-full bg-white/20" />
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
                  <div className="h-full w-full flex items-center justify-center text-white text-xl font-bold">
                    AC
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-dancing font-bold">Akanksha Creations</h3>
            </div>
            <p className="text-white/80 mb-6">
              Bringing the ancient art of rangoli to modern celebrations. 
              We create beautiful designs for all occasions and offer classes 
              to keep this traditional art form alive.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/tammewarseema?igsh=djk5Z2VwanI1YTBs" target="_blank" rel="noopener noreferrer" 
                className="social-icon-link bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 p-3 rounded-full transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
                <Instagram size={22} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://youtube.com/@akankshacreations268?si=HBonbqsm8QAifcdL" target="_blank" rel="noopener noreferrer" 
                className="social-icon-link bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 p-3 rounded-full transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
                <Youtube size={22} />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="tel:+919665493102" 
                className="social-icon-link bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 p-3 rounded-full transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
                <Phone size={22} />
                <span className="sr-only">Phone</span>
              </a>
              <a href="https://wa.me/919665493102" target="_blank" rel="noopener noreferrer" 
                className="social-icon-link bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 p-3 rounded-full transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
                <MessageSquare size={22} />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#order" className="text-white/80 hover:text-white transition-colors">Order</a>
              </li>
              <li>
                <a href="#enquiry" className="text-white/80 hover:text-white transition-colors">Class Enquiry</a>
              </li>
              <li>
                <a href="#feedback" className="text-white/80 hover:text-white transition-colors">Feedback</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  Flat no. 1, Abhinav Apartment, Laxminagar,<br />
                  suit girni chowk, Garkheda,<br />
                  Chh. Sambhajinagar, Maharashtra 431001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <a href="tel:+919665493102" className="text-white/80 hover:text-white transition-colors">
                  +91 9665493102
                </a>
              </li>
              <li className="flex items-center">
                <MessageSquare size={20} className="mr-3 flex-shrink-0" />
                <a href="https://wa.me/919665493102" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                  WhatsApp: +91 9665493102
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <a href="mailto:AkankshaCreations102@gmail.com" className="text-white/80 hover:text-white transition-colors">
                  AkankshaCreations102@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8 mb-4">
          <p className="text-lg font-bold mb-2">Follow us on social media</p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/tammewarseema?igsh=djk5Z2VwanI1YTBs" target="_blank" rel="noopener noreferrer" 
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transform hover:scale-105 transition-all duration-300">
              <Instagram size={20} className="mr-2" />
              <span>@tammewarseema</span>
            </a>
            <a href="https://youtube.com/@akankshacreations268?si=HBonbqsm8QAifcdL" target="_blank" rel="noopener noreferrer" 
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 transform hover:scale-105 transition-all duration-300">
              <Youtube size={20} className="mr-2" />
              <span>Akanksha Creations</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Akanksha Creations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

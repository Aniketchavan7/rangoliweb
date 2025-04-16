
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  // Use one of the new festival rangoli images
  const logoImage = "/lovable-uploads/852c9fb0-93da-4047-b604-c9bfaad71c7f.png";
  const isMobile = useIsMobile();

  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rangoli-orange/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rangoli-purple/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 mt-12 md:mt-0 z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-rangoli-purple">
              Beautiful <span className="text-rangoli-orange">Rangoli</span> Designs for Every Occasion
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Akanksha Creations brings the ancient art of rangoli to your doorstep. 
              We create stunning designs for weddings, festivals, and other special occasions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-rangoli-purple hover:bg-rangoli-orange text-white px-8 py-6 text-lg group" 
                onClick={() => window.location.href="#order"}
              >
                Book a Design
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="border-rangoli-purple text-rangoli-purple hover:bg-rangoli-purple/5 px-8 py-6 text-lg"
                onClick={() => window.location.href="#enquiry"}
              >
                Join Our Classes
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative z-10 flex justify-center items-center mb-8 md:-mt-16">
            <div className="relative p-6 rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl border-2 border-rangoli-gold/30 group animate-fade-in max-w-[250px] md:max-w-none">
              {/* Decorative corner elements */}
              <div className="absolute w-8 h-8 border-t-4 border-l-4 top-0 left-0 border-rangoli-purple rounded-tl-lg"></div>
              <div className="absolute w-8 h-8 border-t-4 border-r-4 top-0 right-0 border-rangoli-orange rounded-tr-lg"></div>
              <div className="absolute w-8 h-8 border-b-4 border-l-4 bottom-0 left-0 border-rangoli-teal rounded-bl-lg"></div>
              <div className="absolute w-8 h-8 border-b-4 border-r-4 bottom-0 right-0 border-rangoli-pink rounded-br-lg"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-rangoli-gold/20 to-rangoli-purple/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating particles */}
              <div className="absolute top-5 right-10 w-3 h-3 bg-rangoli-orange/50 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
              <div className="absolute bottom-10 left-12 w-2 h-2 bg-rangoli-purple/50 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/2 right-5 w-4 h-4 bg-rangoli-gold/50 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              
              {/* Logo */}
              <img 
                src={logoImage} 
                alt="Akanksha Creations Logo" 
                className="relative z-10 max-w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-300" 
                onError={(e) => console.error("Failed to load logo image", e)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

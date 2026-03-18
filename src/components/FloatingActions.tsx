import { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`bg-slate-800 text-white p-3 rounded-full shadow-lg hover:bg-slate-700 transition-all duration-300 flex items-center justify-center group relative ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to Top"
      >
        <ArrowUp className="h-6 w-6" />
        <span className="absolute right-full mr-4 bg-slate-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Back to Top
        </span>
      </button>

      <a
        href="tel:+919685312236"
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center group relative"
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute right-full mr-4 bg-slate-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Call Now
        </span>
      </a>
      
      <a
        href="https://wa.me/919685312236"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center group relative"
        aria-label="WhatsApp Now"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-full mr-4 bg-slate-800 text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          WhatsApp Now
        </span>
      </a>
    </div>
  );
}

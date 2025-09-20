import React, { useState, useEffect } from "react";
import {Star, ChevronLeft, ChevronRight, } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroMovies = [
    {
      title: "Avatar",
      genres: ["Action", "Adventure", "Science Fiction"],
      year: "2022",
      duration: "3:12:00",
      rating: 8.5,
      description: "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      bgGradient: "from-blue-900 to-purple-900",
      imageUrl: "https://wallpapers.com/images/hd/avatar-pictures-vohr0oeq1ld3lpbp.jpg"
    },
    {
      title: "Top Gun: Maverick",
      genres: ["Action", "Drama", "Adventure"],
      year: "2022",
      duration: "2:10:00",
      rating: 8.7,
      description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
      bgGradient: "from-orange-900 to-red-900",
      imageUrl: "https://media.modernluxury.com/ntgpghfuax/uploads/2024/11/13/Top-Gun-Fashion-Cars-And-Memorabilia-Go-Viral-As-Sequel-Smashes-Box-Offices_Header.png"
    },
    {
      title: "Kung Fu Panda 4",
      genres: ["Action", "Adventure", "Drama"],
      year: "2022",
      duration: "2:41:00",
      rating: 7.3,
      description: "Kung Fu Panda 4 features Po's transition to the spiritual leader of the Valley of Peace, requiring him to find and train a new Dragon Warrior. He teams up with a cunning fox thief named Zhen and confronts the powerful sorceress, The Chameleon",
      imageUrl: "https://livewire.thewire.in/wp-content/uploads/2020/06/kung-fu.jpg"
    },
    {
      title: "The Batman",
      genres: ["Action", "Crime", "Drama"],
      year: "2022",
      duration: "2:56:00",
      rating: 8.2,
      description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement in the conspiracy that threatens to destroy the city.",
      bgGradient: "from-gray-900 to-black",
      imageUrl: "https://images.wallpapersden.com/image/download/the-batman-8k_bmVmbW6UmZqaraWkpJRsa21lrWloZ2Y.jpg"
    },
    {
      title: "The Wild Robot",
      genres: ["Action", "Adventure", "Fantasy"],
      year: "2022",
      duration: "2:06:00",
      rating: 7.0,
      description: "The Wild Robot is a popular book by Peter Brown and a recent DreamWorks animated film about a service robot, ROZZUM unit 7134 (Roz), who is shipwrecked on a wilderness island and must learn to adapt and survive by building relationships with the island's animals",
      imageUrl: "https://www.awn.com/sites/default/files/styles/original/public/image/attached/1077562-10e58fp00678-1280.jpg?itok=02LTPyik"
    }
];

const currentMovie = heroMovies[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroMovies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroMovies.length) % heroMovies.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);  




return (
  <div className="relative h-[100vh] sm:h-[550px] md:h-[650px] lg:h-[550px] xl:h-[650px] 2xl:h-[700px] flex items-center justify-start overflow-hidden">
    {/* Background Image Layer with Enhanced Transitions */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out transform scale-105"
      style={{
        backgroundImage: `url(${currentMovie.imageUrl})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll"
      }}
    />

    {/* Professional Multi-Layer Overlay System - Same as Movie Detail Page */}
    <div className="absolute inset-0 bg-black/10 transition-opacity duration-1000"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/70 transition-opacity duration-1000"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent transition-opacity duration-1000"></div>
    
    {/* Additional Cinematic Overlays */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent"></div>

    {/* Foreground Content with Enhanced Typography */}
    <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
      <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl text-left">
        
        {/* Enhanced Title with Better Readability */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight drop-shadow-2xl transition-all duration-800 ease-out transform translate-y-0 opacity-100">
          {currentMovie.title}
        </h1>

        {/* Enhanced Genre + Info Section with Better Cards */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6 transition-all duration-600 delay-200 ease-out transform translate-y-0 opacity-100">
          {currentMovie.genres.map((genre, index) => (
            <span
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-white/20 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ease-out hover:bg-red-600/80 hover:border-red-500/50 hover:scale-105"
            >
              {genre}
            </span>
          ))}
          
          {/* Rating Badge */}
          <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center space-x-1 sm:space-x-2">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-white font-semibold text-xs sm:text-sm">{currentMovie.rating}</span>
          </div>
          
          {/* Year Badge */}
          <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
            <span className="text-white font-medium text-xs sm:text-sm">{currentMovie.year}</span>
          </div>
          
          {/* Duration Badge - Hidden on small screens */}
          <div className="hidden sm:flex bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
            <span className="text-white font-medium text-xs sm:text-sm">{currentMovie.duration}</span>
          </div>
        </div>

        {/* Enhanced Description with Better Readability */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 md:mb-8 border border-white/10 transition-all duration-600 delay-300 ease-out transform translate-y-0 opacity-100">
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed line-clamp-2 sm:line-clamp-3 md:line-clamp-4 drop-shadow-lg">
            {currentMovie.description}
          </p>
        </div>

        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 transition-all duration-600 delay-400 ease-out transform translate-y-0 opacity-100">
          <button
            onClick={() => alert(`⏰ Added to Watch Later: ${currentMovie.title}`)}
            className="group bg-red-600 hover:bg-red-700 text-white px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ease-out flex items-center justify-center hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform duration-300 group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Watch Now</span>
          </button>
          
          <button
            onClick={() => alert(`📋 Added to Watchlist: ${currentMovie.title}`)}
            className="group bg-black/40 backdrop-blur-sm hover:bg-black/60 border border-white/20 hover:border-white/40 text-white px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ease-out flex items-center justify-center hover:scale-105"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform duration-300 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M12 4v16m8-8H4" />
            </svg>
            <span className="hidden sm:inline">Add to Watchlist</span>
            <span className="sm:hidden">Watchlist</span>
          </button>
        </div>
      </div>
    </div>

    {/* Enhanced Slide Indicators */}
    <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
      {heroMovies.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`transition-all duration-500 ease-out hover:scale-125 ${
            index === currentSlide
              ? "w-8 h-3 sm:w-10 sm:h-4 bg-red-500 rounded-full shadow-lg shadow-red-500/50"
              : "w-3 h-3 sm:w-4 sm:h-4 bg-white/50 hover:bg-white/80 rounded-full backdrop-blur-sm"
          }`}
        />
      ))}
    </div>

    {/* Enhanced Progress Bar */}
    <div className="absolute bottom-0 left-0 w-full h-1 sm:h-1.5 bg-black/40 backdrop-blur-sm z-10">
      <div
        className="h-full bg-gradient-to-r from-red-500 to-red-600 shadow-lg shadow-red-500/30 transition-all duration-300 ease-linear"
        style={{
          width: `${((currentSlide + 1) / heroMovies.length) * 100}%`,
        }}
      />
    </div>

    {/* Bottom Fade Effect */}
    <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>

    {/* Enhanced Responsive Styles */}
    <style jsx>{`
      /* Ultra responsive breakpoints */
      
      /* Extra small devices */
      @media (max-width: 320px) {
        .hero-title {
          font-size: 1.5rem;
          line-height: 1.3;
        }
        .hero-container {
          padding: 0.75rem;
        }
      }

      /* Small mobile landscape */
      @media (max-height: 500px) and (orientation: landscape) {
        .hero-section {
          height: 350px;
        }
        .hero-content {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
        .hero-description {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }

      /* Medium mobile */
      @media (min-width: 375px) and (max-width: 474px) {
        .hero-button {
          padding: 0.875rem 1.25rem;
          font-size: 0.875rem;
        }
      }

      /* Large mobile */
      @media (min-width: 475px) and (max-width: 639px) {
        .hero-title {
          font-size: 2.25rem;
        }
        .hero-description {
          font-size: 1rem;
        }
      }

      /* Tablet portrait */
      @media (min-width: 640px) and (max-width: 767px) {
        .hero-section {
          height: 400px;
        }
        .hero-content {
          max-width: 28rem;
        }
      }

      /* Tablet landscape */
      @media (min-width: 768px) and (max-width: 1023px) {
        .hero-section {
          height: 500px;
        }
        .hero-content {
          max-width: 36rem;
        }
      }

      /* Desktop */
      @media (min-width: 1024px) {
        .hero-section {
          height: 600px;
        }
      }

      /* Large desktop */
      @media (min-width: 1280px) {
        .hero-section {
          height: 700px;
        }
        .hero-content {
          max-width: 48rem;
        }
      }

      /* 4K and large screens */
      @media (min-width: 1920px) {
        .hero-section {
          height: 800px;
        }
        .hero-title {
          font-size: 5rem;
        }
      }

      /* Smooth animations */
      @keyframes slideInFromLeft {
        from {
          transform: translateX(-30px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }

      @keyframes fadeInUp {
        from {
          transform: translateY(20px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }

      /* Performance optimizations */
      .hero-background {
        will-change: transform;
        transform: translateZ(0);
      }

      .hero-overlay {
        will-change: opacity;
      }

      /* High DPI optimization */
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .hero-background {
          background-attachment: scroll;
        }
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `}</style>
  </div>
);





};



export default HeroSection;
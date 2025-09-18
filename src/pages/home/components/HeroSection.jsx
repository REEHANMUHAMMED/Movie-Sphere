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
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[480px] flex items-center justify-start overflow-hidden">
      {/* Background Layer - Your exact code */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${currentMovie.imageUrl})`,
          backgroundPosition: "top",
        }}
      />

      {/* Perfect Linear Gradient Overlay - Multi-layered for cinematic effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent transition-opacity duration-1000 ease-in-out"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 transition-opacity duration-1000 ease-in-out"></div>

      {/* Foreground Content - Your exact code with smooth transitions */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-left">
          {/* Title - Adding smooth transition only */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight transition-all duration-800 ease-out transform translate-y-0 opacity-100">
            {currentMovie.title}
          </h1>

          {/* Genre + Info - Your exact code with transition */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-2 md:gap-3 mb-2 sm:mb-3 md:mb-4 transition-all duration-600 delay-200 ease-out transform translate-y-0 opacity-100">
            {currentMovie.genres.map((genre, index) => (
              <span
                key={index}
                className="bg-gray-700/80 text-white px-2 py-1 sm:px-3 rounded text-xs sm:text-sm border border-gray-600 transition-all duration-300 ease-out"
              >
                {genre}
              </span>
            ))}
            <span className="text-yellow-400 flex items-center text-xs sm:text-sm">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {currentMovie.year}
            </span>
            <span className="text-white text-xs sm:text-sm hidden sm:inline">
              {currentMovie.duration}
            </span>
            <div className="flex items-center">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
              <span className="text-white ml-1 text-xs sm:text-sm">
                {currentMovie.rating}
              </span>
            </div>
          </div>

          {/* Description - Your exact code with transition */}
          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 leading-relaxed line-clamp-2 sm:line-clamp-3 max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl transition-all duration-600 delay-300 ease-out transform translate-y-0 opacity-100">
            {currentMovie.description}
          </p>

          {/* Button - Your exact code with transition */}
          <div className="flex space-x-2 sm:space-x-4 transition-all duration-600 delay-400 ease-out transform translate-y-0 opacity-100">
            <button
              onClick={() =>
                alert(`⏰ Added to Watch Later: ${currentMovie.title}`)
              }
              className="cursor-pointer bg-transparent hover:bg-gray-700/50 text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-md transition-all duration-300 ease-out flex items-center font-semibold border-2 border-gray-400 hover:border-gray-300 text-xs sm:text-sm md:text-base hover:scale-105"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="hidden sm:inline">View More</span>
              <span className="sm:hidden">View</span>
            </button>
          </div>
        </div>
      </div>     

      {/* Slide Indicators - Your exact code with smooth transitions */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
        {heroMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 ease-out hover:scale-110 ${
              index === currentSlide
                ? "w-6 h-2 sm:w-8 sm:h-3 bg-red-500 rounded-full"
                : "w-2 h-2 sm:w-3 sm:h-3 bg-white/60 hover:bg-white/80 rounded-full"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar - Your exact code with smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gray-800/60 z-10">
        <div
          className="h-full bg-red-600 transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / heroMovies.length) * 100}%`,
          }}
        />
      </div>

      {/* Custom CSS for slide transitions */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in {
          animation: slideIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );






};



export default HeroSection;
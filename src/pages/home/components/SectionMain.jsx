import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "../../../components/movie-card/MovieCard";

const SectionMain = ({ title, movies, isLarge = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % movies.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + movies.length) % movies.length);
  };

  return (
    <div className="px-6 py-6 z-10 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-red-400 text-xl font-bold">{title}</h2>
        <button className="text-gray-400 hover:text-red-400 flex items-center text-sm cursor-pointer ">
          View all
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
      
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} isLarge={isLarge} />
          ))}
        </div>
        
        {/* <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
        </button> */}
      </div>
    </div>
  );
};

export default SectionMain



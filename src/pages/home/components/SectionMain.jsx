import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "../../../components/movie-card/MovieCard";
import { useNavigate } from "react-router-dom";

const SectionMain = ({ title, movies, isLarge = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % movies.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + movies.length) % movies.length);
  };

  return (
    <div className="px-6 py-6 z-10 max-w-7xl mx-auto">
      <div className="flex items-left justify-between mb-6">
        <h2 className="text-red-400 text-xl font-bold">{title}</h2>
        <button onClick={() => navigate("/viewall",{state: {title} })} className="text-gray-400 hover:text-red-400 flex items-center text-sm cursor-pointer ">
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
      </div>
    </div>
  );


};

export default SectionMain




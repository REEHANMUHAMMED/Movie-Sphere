import React from 'react'
import {  Star } from 'lucide-react';
import { useNavigate } from "react-router";
// Movie Card Component
const MovieCard = ({ movie, isLarge = false, image }) => {
  let navigate = useNavigate();

  return (
    <div 
      onClick={() => { navigate(`/movie/${movie.id}`) }} 
      className={`relative group cursor-pointer ${isLarge ? 'min-w-72' : 'min-w-48'}`}
    >
      <div className="relative overflow-hidden rounded-lg">
        {/* Background image */}
        <div 
          className={`${isLarge ? 'h-48' : 'h-72'} bg-top bg-gray-800 flex items-center justify-center bg-cover bg-center` } 
          style={{ backgroundImage: movie.poster ? `url(${movie.poster})` : undefined }}
        >
          {/* Fallback if no image */}
          {!movie.poster && (
            <div className="text-white text-center">
              <div className="text-lg font-bold mb-2">{movie.title}</div>
              {movie.year && (
                <div className="text-xs text-gray-300">{movie.year}</div>
              )}
            </div>
          )}
        </div>
        
        {/* Rating Badge */}
        {movie.imdbRating && (
          <div className="absolute top-2 right-2  bg-opacity-70 text-white px-2 py-1 rounded text-xs flex items-center">
            <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
            {movie.imdbRating}
          </div>
        )}
        
        {/* Duration Badge */}
        {movie.runtime && (
          <div className="absolute bottom-2 left-2  bg-opacity-70 text-white px-2 py-1 rounded text-xs">
            {movie.runtime}
          </div>
        )}
        
        {/* Quality Badge */}
        {movie.rated && (
          <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs">
            {movie.rated}
          </div>
        )}
      </div>
      
      {/* Movie Info below card */}
      <div className="mt-2">
        <h3 className="text-white font-medium text-sm truncate">{movie.title}</h3>
        {movie.year && (
          <p className="text-gray-400 text-xs">{movie.year}</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;

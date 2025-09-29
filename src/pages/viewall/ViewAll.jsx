import React, { useState, useMemo, useEffect } from 'react';
import HeaderSection from '../../components/header-section/HeaderSection.jsx';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import logo from '../../components/header-section/logo.png';


const ViewAll = () => {
  
  const [movies,setMovies] = useState([])
  const navigate = useNavigate(); 
  const {state} = useLocation(); 
  const title = state.title;


 

    useEffect(() => {
    axios.get('https://fooapi.com/api/movies')
    .then(response => {
      const movieData = response.data.data;
      setMovies(movieData);     
    });
  },[])
   




  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
    // In a real app, this would use React Router
    console.log(`Navigating to: /movie/${movieId}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Search is handled automatically via filteredMovies
  };

return (


//page loading//























  <div className="relative overflow-hidden min-h-screen bg-gray-900">
    {/* Same Multi-layer Overlay System as Movie Info */}
    <div className="absolute inset-0 bg-black/70 z-0"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/70 z-0"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60 z-0"></div>
    
    {/* Content Container */}
    <div className="relative z-10">
      {/* Navigation */}
      <HeaderSection />

      {/* Hero Section with Search */}
      <div className="relative py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="text-3xl sm:text-4xl md:text-5xl animate-bounce">🎬</div>
                <img className="w-24 sm:w-32 md:w-40 lg:w-38 h-auto drop-shadow-lg" src={logo} alt="Logo" />
              </div>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto drop-shadow-sm">
                Dive Into Our Complete Movie Library
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <h1 className="text-red-400 text-2xl font-bold text-center my-8">{title}</h1>
      
      {/* Search Results Section - Only shows when movies exist */}
      {movies.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {movies.map((movie, index) => (
              <div
                key={movie.id}
                onClick={() => handleMovieClick(movie.id)}
                className="group bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer hover:border-red-400/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x450/1f2937/9CA3AF?text=No+Image';
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-red-600/90 backdrop-blur-sm rounded-full p-3 sm:p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/70 backdrop-blur-sm text-yellow-400 px-2 py-1 rounded-lg text-xs sm:text-sm font-semibold border border-yellow-400/30">
                    ⭐ {movie.imdbRating}
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 lg:p-6">
                  <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-2 group-hover:text-red-400 transition-colors duration-300 line-clamp-2 drop-shadow-sm">
                    {movie.title}
                  </h3>
                  <div className="flex justify-between items-center text-xs sm:text-sm text-gray-400">
                    <span className="drop-shadow-sm">{movie.year}</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="drop-shadow-sm">IMDb: {movie.imdbRating}</span>
                    </div>
                  </div>
                  
                  {movie.genre && (
                    <div className="mt-2 sm:mt-3">
                      <span className="inline-block bg-red-600/20 text-red-300 px-2 py-1 rounded-md text-xs border border-red-600/30">
                        {movie.genre.split(',')[0].trim()}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>

    {/* Bottom Gradient Fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent pointer-events-none z-0"></div>
  </div>
);

};

export default ViewAll;
import React, { useState, useMemo, useEffect } from 'react';
import HeaderSection from '../../components/header-section/HeaderSection.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const SearchList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentRoute, setCurrentRoute] = useState('/');
  const [movies,setMovies] = useState([])
  const navigate = useNavigate()

    useEffect(() => {
    axios.get('https://fooapi.com/api/movies')
    .then(response => {
      const movieData = response.data.data;
      setMovies(movieData);     
    });
  },[])
   


  // Filter movies based on search term
  const filteredMovies = useMemo(() => {
    if (!searchTerm) return movies;
    return movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm,movies]);

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
    // In a real app, this would use React Router
    console.log(`Navigating to: /movie/${movieId}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Search is handled automatically via filteredMovies
  };

  if (currentRoute !== '/') {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <button 
          onClick={() => setCurrentRoute('/')}
          className="mb-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
        >
          ← Back to Search
        </button>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Movie Details</h1>
          <p className="text-gray-300">Route: {currentRoute}</p>
          <p className="text-gray-400 mt-2">Movie details would be loaded here...</p>
        </div>
      </div>
    );
  }

  // return (
  //   <div className="min-h-screen bg-gray-900">
  //     {/* Navigation */}
  //     <HeaderSection />

  //     {/* Hero Section with Search */}
  //     <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 py-20">
  //       <div className="max-w-2xl mx-auto px-6">
  //         <div className="bg-gray-700 rounded-lg p-8 shadow-2xl">
  //           <div className="text-center mb-8">
  //             <div className="flex items-center justify-center space-x-2 mb-4">
  //               <div className="text-4xl">🎬</div>
  //               <h1 className="text-4xl font-bold text-white">
  //                 <span className="text-red-600">Movie</span>Sphere 
  //               </h1>
  //             </div>
  //           </div>
            
  //           <form onSubmit={handleSearch} className="space-y-4">
  //             <div className="relative">
  //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
  //                 <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  //                 </svg>
  //               </div>
  //               <input
  //                 type="text"
  //                 placeholder="Search movies..."
  //                 value={searchTerm}
  //                 onChange={(e) => setSearchTerm(e.target.value)}
  //                 className="w-full pl-10 pr-4 py-3 bg-gray-600 text-white placeholder-gray-400 rounded-lg border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors"
  //               />
  //             </div>
  //             <button
  //               type="submit"
  //               className="w-full bg-red-600 hover:bg-red-800 hover:text-white-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-[1.02]"
  //             >
  //               Search
  //             </button>
  //           </form>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Search Results */}
  //     <div className="max-w-7xl mx-auto px-6 py-12">
  //       {searchTerm && (
  //         <div className="mb-8">
  //           <h2 className="text-2xl font-bold text-white">
  //             Search Results for: <span className="text-red-500">{searchTerm.toUpperCase()}</span>
  //           </h2>
  //           <p className="text-gray-400 mt-2">Found {filteredMovies.length} movies</p>
  //         </div>
  //       )}

  //       {!searchTerm && (
  //         <div className="text-center py-12">
  //           <h2 className="text-2xl font-bold text-white mb-4">Your Search Results Will Appear Below</h2>
  //           <p className="text-gray-400">Try searching for "red" to see sample results</p>
  //         </div>
  //       )}

  //       {searchTerm && filteredMovies.length === 0 && (
  //         <div className="text-center py-12">
  //           <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>
  //           <p className="text-gray-400">Try searching for different keywords</p>
  //         </div>
  //       )}

  //       {filteredMovies.length > 0 && (
  //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  //           {filteredMovies.map((movie) => (
  //             <div
  //               key={movie.id}
  //               onClick={() => handleMovieClick(movie.id)}
  //               className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group"
  //             >
  //               <div className="relative">
  //                 <img
  //                   src={movie.poster}
  //                   alt={movie.title}
  //                   className="w-full h-80 object-cover group-hover:opacity-90 transition-opacity"
  //                   onError={(e) => {
  //                     e.target.src = 'https://via.placeholder.com/300x450/374151/9CA3AF?text=No+Image';
  //                   }}
  //                 />
  //                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
  //               </div>
  //               <div className="p-4">
  //                 <h3 className="text-white font-bold text-lg mb-2 group-hover:text-red-500 transition-colors">
  //                   {movie.title}
  //                 </h3>
  //                 <div className="flex justify-between items-center text-sm text-gray-400">
  //                   <span>{movie.year}</span>
  //                   <div className="flex items-center space-x-1">
  //                     <span className="text-yellow-400">★</span>
  //                     <span>IMDb: {movie.imdbRating}</span>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       )}
  //     </div>

      
  //   </div>
  // );

return (
  <div 
    className="min-h-screen relative overflow-hidden"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1489599904472-c91b5c2f8b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`, // Replace with your preferred background
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed"
    }}
  >
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
            
            {/* Title Section */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="text-3xl sm:text-4xl md:text-5xl animate-bounce">🎬</div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                  <span className="text-red-500 drop-shadow-lg">Movie</span>Sphere 
                </h1>
              </div>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto drop-shadow-sm">
                Discover your next favorite movie from our extensive collection
              </p>
            </div>
            
            {/* Search Form */}
            <form onSubmit={handleSearch} className="space-y-4 sm:space-y-6">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-focus-within:text-red-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search movies, actors, genres..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 sm:pl-14 pr-4 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 rounded-xl sm:rounded-2xl border border-white/20 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-400/50 transition-all duration-300 text-sm sm:text-base hover:bg-white/20 focus:bg-white/20"
                />
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-red-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-600/50 active:scale-[0.98] text-sm sm:text-base"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Search Movies</span>
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Search Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        
        {/* Search Results Header */}
        {searchTerm && (
          <div className="mb-8 sm:mb-12 bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
              Search Results for: <span className="text-red-400 drop-shadow-lg">{searchTerm.toUpperCase()}</span>
            </h2>
            <p className="text-gray-300 mt-2 sm:mt-3 text-sm sm:text-base drop-shadow-sm">
              Found {filteredMovies.length} movies matching your search
            </p>
          </div>
        )}

        {/* Empty State - No Search */}
        {!searchTerm && (
          <div className="text-center py-16 sm:py-20 lg:py-24 bg-black/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10">
            <div className="max-w-md mx-auto px-4">
              <div className="text-6xl sm:text-7xl lg:text-8xl mb-6 opacity-60">🔍</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
                Start Your Movie Discovery
              </h2>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg drop-shadow-sm">
                Use the search above to find your favorite movies, actors, or explore by genre
              </p>
              <div className="mt-6 sm:mt-8">
                <p className="text-red-400 text-xs sm:text-sm font-medium drop-shadow-sm">
                  💡 Try searching for "action", "comedy", or your favorite actor's name
                </p>
              </div>
            </div>
          </div>
        )}

        {/* No Results State */}
        {searchTerm && filteredMovies.length === 0 && (
          <div className="text-center py-16 sm:py-20 lg:py-24 bg-black/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10">
            <div className="max-w-md mx-auto px-4">
              <div className="text-6xl sm:text-7xl lg:text-8xl mb-6 opacity-60">😕</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
                No Results Found
              </h2>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg drop-shadow-sm">
                We couldn't find any movies matching "{searchTerm}"
              </p>
              <div className="mt-6 sm:mt-8">
                <p className="text-red-400 text-xs sm:text-sm font-medium drop-shadow-sm">
                  💡 Try different keywords or check your spelling
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Movie Results Grid */}
        {filteredMovies.length > 0 && (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {filteredMovies.map((movie, index) => (
              <div
                key={movie.id}
                onClick={() => handleMovieClick(movie.id)}
                className="group bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer hover:border-red-400/50"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Movie Poster */}
                <div className="relative overflow-hidden">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x450/1f2937/9CA3AF?text=No+Image';
                    }}
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-red-600/90 backdrop-blur-sm rounded-full p-3 sm:p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/70 backdrop-blur-sm text-yellow-400 px-2 py-1 rounded-lg text-xs sm:text-sm font-semibold border border-yellow-400/30">
                    ⭐ {movie.imdbRating}
                  </div>
                </div>
                
                {/* Movie Info */}
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
                  
                  {/* Genre Tags */}
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
        )}
      </div>
    </div>

    {/* Bottom Gradient Fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent pointer-events-none z-0"></div>

    {/* Professional Responsive Styles */}
    <style jsx>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Ultra small devices */
      @media (max-width: 320px) {
        .search-container {
          padding: 1rem 0.75rem;
        }
        .movie-card {
          min-height: 280px;
        }
      }

      /* Extra small devices */
      @media (min-width: 321px) and (max-width: 480px) {
        .search-hero {
          padding: 3rem 1rem;
        }
        .movie-grid {
          gap: 1rem;
        }
      }

      /* Small devices */
      @media (min-width: 481px) and (max-width: 768px) {
        .search-hero {
          padding: 4rem 1.5rem;
        }
        .movie-card {
          min-height: 350px;
        }
      }

      /* Medium devices */
      @media (min-width: 769px) and (max-width: 1024px) {
        .search-hero {
          padding: 5rem 2rem;
        }
        .movie-grid {
          gap: 1.5rem;
        }
      }

      /* Large devices */
      @media (min-width: 1025px) and (max-width: 1440px) {
        .search-hero {
          padding: 6rem 2.5rem;
        }
        .movie-grid {
          gap: 2rem;
        }
      }

      /* Extra large devices */
      @media (min-width: 1441px) {
        .search-hero {
          padding: 7rem 3rem;
        }
        .movie-grid {
          gap: 2.5rem;
        }
      }

      /* Landscape orientation optimizations */
      @media (max-height: 600px) and (orientation: landscape) {
        .search-hero {
          padding: 2rem 1rem;
        }
        .empty-state {
          padding: 3rem 1rem;
        }
      }

      /* Touch device optimizations */
      @media (hover: none) and (pointer: coarse) {
        .movie-card:active {
          transform: scale(0.95);
        }
        .search-button:active {
          transform: scale(0.95);
        }
      }

      /* High DPI displays */
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .backdrop-blur {
          backdrop-filter: blur(12px);
        }
      }

      /* Reduced motion preference */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }

      /* Line clamping utility */
      .line-clamp-2 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    `}</style>
  </div>
);








};

export default SearchList;
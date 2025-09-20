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

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <HeaderSection />

      {/* Hero Section with Search */}
      <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-gray-700 rounded-lg p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="text-4xl">🎬</div>
                <h1 className="text-4xl font-bold text-white">
                  <span className="text-red-600">Movie</span>Sphere 
                </h1>
              </div>
            </div>
            
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search movies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-600 text-white placeholder-gray-400 rounded-lg border border-gray-600 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-800 hover:text-white-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-[1.02]"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {searchTerm && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">
              Search Results for: <span className="text-red-500">{searchTerm.toUpperCase()}</span>
            </h2>
            <p className="text-gray-400 mt-2">Found {filteredMovies.length} movies</p>
          </div>
        )}

        {!searchTerm && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-white mb-4">Your Search Results Will Appear Below</h2>
            <p className="text-gray-400">Try searching for "red" to see sample results</p>
          </div>
        )}

        {searchTerm && filteredMovies.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>
            <p className="text-gray-400">Try searching for different keywords</p>
          </div>
        )}

        {filteredMovies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => handleMovieClick(movie.id)}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-80 object-cover group-hover:opacity-90 transition-opacity"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x450/374151/9CA3AF?text=No+Image';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-red-500 transition-colors">
                    {movie.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{movie.year}</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span>IMDb: {movie.imdbRating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      
    </div>
  );
};

export default SearchList;
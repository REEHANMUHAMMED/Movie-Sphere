import { Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Movie Info Section
const MovieInfo = ({ movie }) => {   
   const navigate = useNavigate();
  
return (
  <div 
    className="relative min-h-screen overflow-hidden"
    style={{ 
      backgroundImage: movie.poster ? `url(${movie.poster})` : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      backgroundSize: "cover", 
      backgroundPosition: "center center", 
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed"
    }}
  >
    {/* Enhanced Multi-layer Overlay for Better Text Readability */}
    <div className="absolute inset-0 bg-black/70"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/70"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60"></div>
    
    {/* Content Container */}
    <div className="relative z-10 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto min-h-screen">
      
      {/* Movie Poster Section */}
      <div className="flex-shrink-0 mx-auto lg:mx-0">
        <div className="relative group">
          {movie.poster ? (
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-64 sm:w-72 md:w-80 lg:w-96 h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-64 sm:w-72 md:w-80 lg:w-96 h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-2xl">
              <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center p-6">
                {movie.title}
              </div>
            </div>
          )}
          
          {/* Poster Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Subtle Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-purple-600/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        </div>
      </div>

      {/* Movie Details Section */}
      <div className="flex-1 space-y-6 sm:space-y-8">
        
        {/* Title and Heart Section */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            {movie.title}
          </h1>
          <div className="flex-shrink-0">      
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 fill-red-600 cursor-pointer hover:scale-125 hover:text-red-500 hover:fill-red-500 hover:animate-pulse hover:drop-shadow-xl transition-all duration-500 ease-out transform-gpu hover:brightness-110" />
          </div>
        </div>

        {/* Genre Tags */}
        <div className="flex flex-wrap gap-3">
          <span 
            onClick={() => navigate("")} 
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-red-600/80 hover:border-red-500 transition-all duration-300 hover:scale-105"
          >
            Drama
          </span>
          <span 
            onClick={() => navigate("")} 
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-red-600/80 hover:border-red-500 transition-all duration-300 hover:scale-105"
          >
            Science Fiction
          </span>
        </div>

        {/* Movie Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-white/10">
            <Star className="h-5 w-5 text-yellow-400 fill-current flex-shrink-0" />
            <span className="text-white font-semibold text-sm sm:text-base">{movie.imdbRating}</span>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-white/10">
            <div className="text-gray-300 text-xs sm:text-sm">Year</div>
            <div className="text-white font-semibold text-sm sm:text-base">{movie.year}</div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-white/10">
            <div className="text-gray-300 text-xs sm:text-sm">Duration</div>
            <div className="text-white font-semibold text-sm sm:text-base">{movie.runtime}</div>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-white/10">
            <div className="text-gray-300 text-xs sm:text-sm">Views</div>
            <div className="text-white font-semibold text-sm sm:text-base">8.8M</div>
          </div>
        </div>

        {/* Plot/Description */}
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 drop-shadow-lg">Plot</h3>
          <p className="text-gray-100 text-base sm:text-lg leading-relaxed text-justify drop-shadow-sm">
            {movie.plot}
          </p>
        </div>

        {/* Additional Movie Information */}
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 drop-shadow-lg">Movie Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-sm sm:text-base">
            <div className="space-y-1">
              <span className="text-gray-300 font-medium">Country:</span>
              <div className="text-white font-semibold">{movie.country}</div>
            </div>
            <div className="space-y-1">
              <span className="text-gray-300 font-medium">Genre:</span>
              <div className="text-white font-semibold">{([movie.genre]).join(', ')}</div>
            </div>
            <div className="space-y-1">
              <span className="text-gray-300 font-medium">Release Date:</span>
              <div className="text-white font-semibold">{movie.released}</div>
            </div>
            <div className="space-y-1">
              <span className="text-gray-300 font-medium">Production:</span>
              <div className="text-white font-semibold">{movie.production}</div>
            </div>
            <div className="sm:col-span-2 space-y-1">
              <span className="text-gray-300 font-medium">Cast:</span>
              <div className="text-white font-semibold leading-relaxed">{movie.actors}</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div onClick={() => navigate("/watch")} className="flex flex-col sm:flex-row gap-4 pt-4"> 
          <button className="flex-1 sm:flex-none bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50 cursor-pointer">
            Watch Now
          </button>
          {/* <button className="flex-1 sm:flex-none bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105">
            Add to Watchlist
          </button> */}
        </div>
      </div>
    </div>

    {/* Bottom Gradient Fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>
    
   
  </div>
);




};



export default MovieInfo

import { Heart, Star } from 'lucide-react';

// Movie Info Section
const MovieInfo = ({ movie }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 px-6 py-8"  style={{ backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center", backgroundImage: movie.poster ? `linear-gradient(#000000de, rgba(28, 26, 26, 0.73)) , url(${movie.poster})` : undefined }}>
      {/* Movie Poster */}
      <div className="flex-shrink-0"  style={{ backgroundImage: movie.poster ? `url(${movie.poster})` : undefined }}>
        <div className="w-80 h-96  rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-6xl font-bold">{movie.title}</div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>

      {/* Movie Details */}
      <div className="flex-1">
        <div className="flex items-start justify-between mb-6">
          <h1 className="text-4xl font-bold text-white">{movie.title}</h1>
          <div className="text-white px-6 py-2 rounded-lg flex items-center">      
             <Heart className="w-8 h-8 text-red-700 fill-red-700 mx-auto cursor-pointer hover:scale-125 hover:text-red-500 hover:fill-red-500 hover:animate-pulse hover:drop-shadow-lg transition-all duration-500 ease-out transform-gpu hover:brightness-110" />
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-3 mb-6">
          <span className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm cursor-pointer ">Drama</span>
          <span className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm">Science Fiction</span>
        </div>

        {/* Movie Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current mr-2" />
            <span className="text-white">{movie.imdbRating}</span>
          </div>
          <div className="text-white">
            <span className="text-gray-400">Year: </span>{movie.year}
          </div>
          <div className="text-white">
            <span className="text-gray-400">Duration: </span>{movie.runtime}
          </div>
          <div className="text-white">
            <span className="text-gray-400">Views: </span>8.8
          </div>
        </div>

        {/* plot */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          {movie.plot}
        </p>

        {/* Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-400">Country: </span>
            <span className="text-white">{movie.country}</span>
          </div>
          <div>
            <span className="text-gray-400">Genre: </span>
            <span className="text-white">{([movie.genre]).join(', ')}</span>
          </div>
          <div>
            <span className="text-gray-400">Date Release: </span>
            <span className="text-white">{movie.released}</span>
          </div>
          <div>
            <span className="text-gray-400">Production: </span>
            <span className="text-white">{movie.production}</span>
          </div>
          <div className="lg:col-span-2">
            <span className="text-gray-400">actors: </span>
            <span className="text-white">{movie.actors}</span>
          </div>
        </div>
      </div>
    </div>
  );
};



export default MovieInfo

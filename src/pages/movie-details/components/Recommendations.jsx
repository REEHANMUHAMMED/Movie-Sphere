import 'lucide-react';

const Recommendation = ({ recommendations }) => {
 
return (
  <div className="relative overflow-hidden">
    {/* Same Multi-layer Background Overlay System */}
    <div className="absolute inset-0 bg-black/70"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/70"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60"></div>
    
    {/* Content Container with Proper Z-index */}
    <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16">
      
      {/* Section Title with Enhanced Readability */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-2">
          You may also like
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
      </div>
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
        {recommendations.map((item, index) => (
          <div 
            key={index} 
            className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-20"
            style={{
              animationDelay: `${index * 100}ms`,
              animation: 'fadeInUp 0.6s ease-out forwards'
            }}
          >
            {/* Movie Card Container */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
              
              {/* Movie Poster with Overlay */}
              <div 
                className="relative h-64 sm:h-72 md:h-80 lg:h-96 bg-cover bg-center bg-no-repeat"
                style={{ 
                  backgroundImage: item.poster 
                    ? `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url(${item.poster})` 
                    : 'linear-gradient(135deg, #374151 0%, #1f2937 100%)'
                }}
              >
                {/* Content Overlay for Better Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                
                

                {/* Hover Play Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">              
                </div>
                
                {/* Rating Badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-red-600/90 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-bold shadow-lg border border-red-500/30">
                    ⭐ {item.imdbRating}
                  </div>
                </div>
                
                {/* Year Badge */}
                <div className="absolute top-3 right-3">
                  <div className="bg-black/70 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium shadow-lg border border-white/20">
                    {item.year}
                  </div>
                </div>

                {/* Quality Badge (if available) */}
                {item.quality && (
                  <div className="absolute bottom-3 left-3">
                    <div className="bg-green-600/90 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-bold shadow-lg">
                      {item.quality}
                    </div>
                  </div>
                )}

                {/* Genre Badge (if available) */}
                {item.genre && (
                  <div className="absolute bottom-3 right-3">
                    <div className="bg-blue-600/90 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium shadow-lg">
                      {item.genre}
                    </div>
                  </div>
                )}
              </div>

              {/* Enhanced Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 via-purple-600/30 to-red-600/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
            </div>
            
            {/* Movie Information Below Card */}
            <div className="mt-4 space-y-2">
              <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg leading-tight line-clamp-2 drop-shadow-sm group-hover:text-red-400 transition-colors duration-300">
                {item.title}
              </h3>
              
              {/* Additional Info Row */}
              <div className="flex items-center justify-between text-gray-300 text-xs sm:text-sm">
                <span className="bg-gray-800/60 backdrop-blur-sm px-2 py-1 rounded border border-gray-700/50">
                  {item.year}
                </span>
                {item.runtime && (
                  <span className="text-gray-400">
                    {item.runtime}
                  </span>
                )}
              </div>

              {/* Genre Pills */}
              {item.genres && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {item.genres.slice(0, 2).map((genre, genreIndex) => (
                    <span 
                      key={genreIndex}
                      className="bg-red-600/20 text-red-400 px-2 py-1 rounded-full text-xs border border-red-600/30"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Enhanced Responsive Styles */}
    <style jsx>{`
      /* Custom Line Clamp */
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      /* Fade In Up Animation */
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

      /* Extra Small Devices (320px and below) */
      @media (max-width: 320px) {
        .recommendation-grid {
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        
        .recommendation-card {
          height: 240px;
        }
        
        .recommendation-title {
          font-size: 0.875rem;
        }
      }

      /* Small Mobile (321px - 480px) */
      @media (min-width: 321px) and (max-width: 480px) {
        .recommendation-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
      }

      /* Mobile Landscape */
      @media (max-height: 500px) and (orientation: landscape) {
        .recommendation-container {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
        
        .recommendation-card {
          height: 200px;
        }
        
        .section-title {
          font-size: 1.5rem;
        }
      }

      /* Tablet Portrait (481px - 768px) */
      @media (min-width: 481px) and (max-width: 768px) {
        .recommendation-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        
        .recommendation-card {
          height: 320px;
        }
      }

      /* Tablet Landscape (769px - 1024px) */
      @media (min-width: 769px) and (max-width: 1024px) {
        .recommendation-grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
      }

      /* Small Desktop (1025px - 1200px) */
      @media (min-width: 1025px) and (max-width: 1200px) {
        .recommendation-grid {
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
      }

      /* Large Desktop (1201px - 1600px) */
      @media (min-width: 1201px) and (max-width: 1600px) {
        .recommendation-grid {
          grid-template-columns: repeat(5, 1fr);
          gap: 2rem;
        }
      }

      /* Ultra Wide (1601px+) */
      @media (min-width: 1601px) {
        .recommendation-grid {
          grid-template-columns: repeat(6, 1fr);
          gap: 2rem;
        }
      }

      /* High DPI Displays */
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .recommendation-card-bg {
          background-size: cover;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }
      }

      /* Reduced Motion Preference */
      @media (prefers-reduced-motion: reduce) {
        .recommendation-card {
          transition: none;
          animation: none;
        }
        
        .hover-effects {
          transform: none !important;
        }
      }

      /* Dark Mode Optimization */
      @media (prefers-color-scheme: dark) {
        .recommendation-card {
          background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
        }
      }

      /* Touch Device Optimizations */
      @media (pointer: coarse) {
        .recommendation-card {
          min-height: 44px;
          padding: 0.75rem;
        }
        
        .touch-target {
          min-width: 44px;
          min-height: 44px;
        }
      }
    `}</style>
  </div>
);

};


export default Recommendation

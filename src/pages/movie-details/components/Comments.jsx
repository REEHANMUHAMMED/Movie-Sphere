 
import { useState } from 'react';
import { ThumbsUp, ThumbsDown} from 'lucide-react';

// Comments Section
const Comments = ({ comments }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = () => {
    // Handle comment submission
    console.log('New comment:', newComment);
    setNewComment('');
  };

  

return (
  <div className="relative min-h-screen">
    {/* Same Multi-layer Background Overlay System */}
    <div className="absolute inset-0 bg-black/70"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/70"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60"></div>
    
    {/* Content Container with Enhanced Responsiveness */}
    <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto">
      
      {/* Comments Header */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold drop-shadow-lg">
          Comments
        </h2>
        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mt-3 rounded-full"></div>
      </div>
      
      {/* Comment Input Section */}
      <div className="mb-8 sm:mb-12">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 shadow-2xl">
          <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6 drop-shadow-sm">
            Share Your Thoughts
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {/* Avatar Placeholder - Hidden on small mobile */}
            <div className="hidden sm:block w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex-shrink-0 border-2 border-white/20 shadow-lg">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-red-400/20 to-purple-600/20 flex items-center justify-center">
                <span className="text-white text-sm lg:text-base font-medium">U</span>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Write your comments here..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-1 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 px-4 py-3 sm:py-4 rounded-xl border border-white/20 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/30 transition-all duration-300 hover:bg-white/15 text-sm sm:text-base"
              />
              <button
                onClick={handleSubmitComment}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-600/30 active:scale-95 whitespace-nowrap"
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6 sm:space-y-8">
        {comments.map((comment, index) => (
          <div 
            key={index} 
            className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 shadow-xl hover:bg-black/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group"
          >
            <div className="flex gap-3 sm:gap-4">
              {/* User Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full overflow-hidden border-2 border-white/20 shadow-lg group-hover:border-red-400/30 transition-all duration-300">
                  {comment.avatar ? (
                    <img 
                      src={comment.avatar} 
                      alt={comment.author} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-red-400/30 to-purple-600/30 flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm font-medium">
                        {comment.author?.charAt(0) || 'U'}
                      </span>
                    </div>
                  )}
                </div>
                {/* Online Status Indicator */}
                <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-black/50 shadow-sm"></div>
              </div>
              
              <div className="flex-1 min-w-0">
                {/* Comment Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
                  <span className="text-white font-semibold text-sm sm:text-base drop-shadow-sm truncate">
                    {comment.author}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300 text-xs sm:text-sm">
                      {comment.date}
                    </span>
                    {/* Verified Badge */}
                    <span className="hidden sm:inline-flex items-center px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                      ✓ Verified
                    </span>
                  </div>
                </div>
                
                {/* Comment Text */}
                <p className="text-gray-100 text-sm sm:text-base leading-relaxed mb-4 drop-shadow-sm">
                  {comment.text}
                </p>
                
                {/* Comment Actions */}
                <div className="flex items-center gap-4 sm:gap-6">
                  <button className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors duration-200 group/like">
                    <ThumbsUp className="h-4 w-4 sm:h-5 sm:w-5 group-hover/like:scale-110 transition-transform duration-200" />
                    <span className="text-xs sm:text-sm font-medium">{comment.likes}</span>
                  </button>
                  
                  <button className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors duration-200 group/dislike">
                    <ThumbsDown className="h-4 w-4 sm:h-5 sm:w-5 group-hover/dislike:scale-110 transition-transform duration-200" />
                  </button>
                  
                  <button className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm font-medium transition-colors duration-200 hover:underline">
                    Reply
                  </button>
                  
                  {/* More Options */}
                  <button className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200 ml-auto">
                    •••
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Comments */}
      <div className="text-center mt-8 sm:mt-12">
        <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-red-400/50">
          Load More Comments
        </button>
      </div>
    </div>

    {/* Bottom Gradient Fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>
    
    {/* Professional Responsive Media Queries */}
    <style jsx>{`
      /* Ultra Small Devices (320px and below) */
      @media (max-width: 320px) {
        .comment-avatar {
          width: 32px;
          height: 32px;
        }
        .comment-text {
          font-size: 0.875rem;
          line-height: 1.4;
        }
        .comment-actions {
          gap: 0.75rem;
        }
      }

      /* Small Mobile (321px - 480px) */
      @media (min-width: 321px) and (max-width: 480px) {
        .comment-container {
          padding: 1rem;
        }
        .comment-input {
          min-height: 44px;
        }
      }

      /* Mobile Landscape (481px - 767px) */
      @media (min-width: 481px) and (max-width: 767px) {
        .comments-grid {
          gap: 1.5rem;
        }
        .comment-card {
          padding: 1.25rem;
        }
      }

      /* Tablet Portrait (768px - 1023px) */
      @media (min-width: 768px) and (max-width: 1023px) {
        .comment-section {
          padding: 2rem 1.5rem;
        }
        .comment-text {
          font-size: 1rem;
          line-height: 1.6;
        }
      }

      /* Tablet Landscape (1024px - 1199px) */
      @media (min-width: 1024px) and (max-width: 1199px) {
        .comment-avatar {
          width: 56px;
          height: 56px;
        }
        .comment-container {
          max-width: 900px;
          margin: 0 auto;
        }
      }

      /* Desktop (1200px - 1599px) */
      @media (min-width: 1200px) and (max-width: 1599px) {
        .comment-section {
          padding: 3rem 2rem;
        }
      }

      /* Large Desktop (1600px+) */
      @media (min-width: 1600px) {
        .comment-container {
          max-width: 1400px;
        }
        .comment-text {
          font-size: 1.125rem;
          line-height: 1.7;
        }
      }

      /* High DPI Displays */
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .comment-avatar img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }
      }

      /* Reduced Motion Preferences */
      @media (prefers-reduced-motion: reduce) {
        .comment-card {
          transition: none;
        }
        .comment-actions button {
          transition: color 0.1s ease;
        }
      }

      /* Dark Mode Optimization */
      @media (prefers-color-scheme: dark) {
        .comment-input::placeholder {
          color: rgb(156, 163, 175);
        }
      }

      /* Touch Device Optimizations */
      @media (hover: none) and (pointer: coarse) {
        .comment-actions button {
          min-height: 44px;
          min-width: 44px;
          padding: 0.75rem;
        }
        
        .comment-card:hover {
          transform: none;
        }
        
        .comment-card:active {
          transform: scale(0.98);
          transition: transform 0.1s ease;
        }
      }

      /* Print Styles */
      @media print {
        .comment-section {
          background: white !important;
          color: black !important;
        }
        
        .comment-actions {
          display: none;
        }
      }
    `}</style>
  </div>
);














};
export default Comments
import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Settings, SkipBack, SkipForward, RotateCcw, RotateCw, Share2, Download, Heart, Plus, Star, Clock, Users, MessageCircle } from 'lucide-react';
import HeaderSection from '../../components/header-section/HeaderSection';

<HeaderSection/>
const WatchNow = () => {
  const videoRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(75);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [quality, setQuality] = useState('1080p');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  // Video event handlers
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(Math.floor(videoRef.current.currentTime));
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(Math.floor(videoRef.current.duration));
    }
  };

  const handleProgressClick = (e) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickPosition = (e.clientX - rect.left) / rect.width;
      const newTime = clickPosition * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(Math.floor(newTime));
    }
  };

  // Format time helper
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Auto-hide controls
  useEffect(() => {
    let timer;
    if (isPlaying && showControls) {
      timer = setTimeout(() => setShowControls(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, showControls]);

  // Update video volume when volume state changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume / 100;
      videoRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <HeaderSection/>

      {/* Video Player Section - Full Width */}
      <div className="w-full pt-16">
        <div className="relative bg-black aspect-video w-full"
             onMouseMove={() => setShowControls(true)}>
          
          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1920&h=1080&fit=crop"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
          >
            <source src="your-video-file.mp4" type="video/mp4" />
            <source src="your-video-file.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>

          {/* Loading Spinner (when buffering) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 xs:w-16 xs:h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin opacity-0"></div>
          </div>

          {/* Play Button Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <button
                onClick={togglePlay}
                className="bg-red-600/90 hover:bg-red-600 text-white rounded-full p-6 xs:p-8 sm:p-12 transition-all duration-300 hover:scale-110 shadow-2xl"
              >
                <Play className="h-8 w-8 xs:h-12 xs:w-12 sm:h-16 sm:w-16 ml-1" fill="currentColor" />
              </button>
            </div>
          )}

          {/* Video Controls */}
          <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}>
            
            {/* Progress Bar */}
            <div className="px-4 xs:px-6 sm:px-8 pb-2">
              <div className="relative group">
                <div 
                  className="w-full h-1 xs:h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer"
                  onClick={handleProgressClick}
                >
                  <div 
                    className="h-full bg-red-600 rounded-full transition-all duration-200"
                    style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                  ></div>
                </div>
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 xs:w-4 xs:h-4 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                  style={{ left: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`, transform: 'translateX(-50%) translateY(-50%)' }}
                ></div>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between px-4 xs:px-6 sm:px-8 pb-4 xs:pb-6">
              <div className="flex items-center space-x-2 xs:space-x-4">
                {/* Play/Pause */}
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-red-400 transition-colors duration-200 p-1 xs:p-2"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5 xs:h-6 xs:w-6" fill="currentColor" />
                  ) : (
                    <Play className="h-5 w-5 xs:h-6 xs:w-6" fill="currentColor" />
                  )}
                </button>

                {/* Skip Controls */}
                <button className="text-white hover:text-red-400 transition-colors duration-200 p-1 xs:p-2">
                  <SkipBack className="h-4 w-4 xs:h-5 xs:w-5" />
                </button>
                <button className="text-white hover:text-red-400 transition-colors duration-200 p-1 xs:p-2">
                  <SkipForward className="h-4 w-4 xs:h-5 xs:w-5" />
                </button>

                {/* Volume */}
                <div className="flex items-center space-x-2 group">
                  <button
                    onClick={toggleMute}
                    className="text-white hover:text-red-400 transition-colors duration-200 p-1 xs:p-2"
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4 xs:h-5 xs:w-5" />
                    ) : (
                      <Volume2 className="h-4 w-4 xs:h-5 xs:w-5" />
                    )}
                  </button>
                  <div className="hidden sm:block w-20 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white rounded-full transition-all duration-200"
                      style={{ width: `${isMuted ? 0 : volume}%` }}
                    ></div>
                  </div>
                </div>

                {/* Time Display */}
                <span className="text-white text-sm xs:text-base font-mono">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center space-x-2 xs:space-x-4">
                {/* Quality */}
                <div className="relative">
                  <button
                    onClick={() => setShowSettings(!showSettings)}
                    className="text-white hover:text-red-400 transition-colors duration-200 px-2 xs:px-3 py-1 rounded text-xs xs:text-sm bg-white/10"
                  >
                    {quality}
                  </button>
                  {showSettings && (
                    <div className="absolute bottom-full right-0 mb-2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl min-w-[120px]">
                      {['2160p', '1440p', '1080p', '720p', '480p', '360p'].map((q) => (
                        <button
                          key={q}
                          onClick={() => {setQuality(q); setShowSettings(false);}}
                          className={`w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors ${
                            quality === q ? 'text-red-400' : 'text-white'
                          }`}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Settings */}
                <button className="text-white hover:text-red-400 transition-colors duration-200 p-1 xs:p-2">
                  <Settings className="h-4 w-4 xs:h-5 xs:w-5" />
                </button>

                {/* Fullscreen */}
                <button
                  onClick={toggleFullscreen}
                  className="text-white hover:text-red-400 transition-colors duration-200 p-1 xs:p-2"
                >
                  <Maximize className="h-4 w-4 xs:h-5 xs:w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Information Section */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-6 xs:py-8 sm:py-12">
          
          {/* Movie Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xs:gap-8 lg:gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 xs:space-y-8">
              
              {/* Title and Actions */}
              <div className="space-y-4 xs:space-y-6">
                <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between gap-4">
                  <div>
                    <h1 className="text-white text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4">
                      The Batman
                    </h1>
                    
                    {/* Movie Tags */}
                    <div className="flex flex-wrap gap-2 xs:gap-3 mb-4">
                      <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs xs:text-sm border border-white/20">
                        Action
                      </span>
                      <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs xs:text-sm border border-white/20">
                        Crime
                      </span>
                      <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs xs:text-sm border border-white/20">
                        Drama
                      </span>
                      <span className="bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full text-xs xs:text-sm border border-yellow-400/30 flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current" />
                        8.2
                      </span>
                      <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs xs:text-sm border border-white/20">
                        2022
                      </span>
                      <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs xs:text-sm border border-white/20">
                        2:56:00
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 xs:gap-3">
                    <button
                      onClick={() => setIsLiked(!isLiked)}
                      className={`flex items-center gap-2 px-4 py-2 xs:px-6 xs:py-3 rounded-xl transition-all duration-300 text-sm xs:text-base ${
                        isLiked 
                          ? 'bg-red-600 text-white hover:bg-red-700' 
                          : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      <Heart className={`h-4 w-4 xs:h-5 xs:w-5 ${isLiked ? 'fill-current' : ''}`} />
                      {isLiked ? 'Liked' : 'Like'}
                    </button>
                    
                    <button
                      onClick={() => setIsInWatchlist(!isInWatchlist)}
                      className="flex items-center gap-2 px-4 py-2 xs:px-6 xs:py-3 bg-white/10 text-white hover:bg-white/20 rounded-xl border border-white/20 transition-all duration-300 text-sm xs:text-base"
                    >
                      <Plus className="h-4 w-4 xs:h-5 xs:w-5" />
                      {isInWatchlist ? 'In Watchlist' : 'Watchlist'}
                    </button>
                    
                    <button className="flex items-center gap-2 px-4 py-2 xs:px-6 xs:py-3 bg-white/10 text-white hover:bg-white/20 rounded-xl border border-white/20 transition-all duration-300 text-sm xs:text-base">
                      <Share2 className="h-4 w-4 xs:h-5 xs:w-5" />
                      Share
                    </button>
                    
                    <button className="flex items-center gap-2 px-4 py-2 xs:px-6 xs:py-3 bg-white/10 text-white hover:bg-white/20 rounded-xl border border-white/20 transition-all duration-300 text-sm xs:text-base">
                      <Download className="h-4 w-4 xs:h-5 xs:w-5" />
                      Download
                    </button>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 xs:p-6 sm:p-8 border border-white/10">
                <h2 className="text-white text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4">Synopsis</h2>
                <p className="text-gray-300 text-sm xs:text-base sm:text-lg leading-relaxed">
                  When a sadistic serial killer begins murdering key political figures in Gotham, Batman is 
                  forced to investigate the city's hidden corruption and question his family's involvement in 
                  the conspiracy that threatens to destroy the city.
                </p>
              </div>

              {/* Cast and Crew */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 xs:p-6 sm:p-8 border border-white/10">
                <h2 className="text-white text-lg xs:text-xl sm:text-2xl font-bold mb-4 xs:mb-6">Cast & Crew</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-6">
                  <div>
                    <h3 className="text-red-400 font-semibold mb-2 text-sm xs:text-base">Director</h3>
                    <p className="text-gray-300 text-sm xs:text-base">Matt Reeves</p>
                  </div>
                  <div>
                    <h3 className="text-red-400 font-semibold mb-2 text-sm xs:text-base">Writers</h3>
                    <p className="text-gray-300 text-sm xs:text-base">Matt Reeves, Peter Craig</p>
                  </div>
                  <div>
                    <h3 className="text-red-400 font-semibent mb-2 text-sm xs:text-base">Stars</h3>
                    <p className="text-gray-300 text-sm xs:text-base">Robert Pattinson, Zoë Kravitz, Paul Dano</p>
                  </div>
                  <div>
                    <h3 className="text-red-400 font-semibold mb-2 text-sm xs:text-base">Studio</h3>
                    <p className="text-gray-300 text-sm xs:text-base">Warner Bros. Pictures</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 xs:space-y-8">
              
              {/* Movie Stats */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 xs:p-6 border border-white/10">
                <h3 className="text-white text-lg xs:text-xl font-bold mb-4 xs:mb-6">Statistics</h3>
                <div className="space-y-3 xs:space-y-4">
                  <div className="flex items-center gap-3">
                    <Star className="h-4 w-4 xs:h-5 xs:w-5 text-yellow-400" />
                    <span className="text-gray-300 text-sm xs:text-base">Rating: 8.2/10</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 xs:h-5 xs:w-5 text-blue-400" />
                    <span className="text-gray-300 text-sm xs:text-base">1.2M viewers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 xs:h-5 xs:w-5 text-green-400" />
                    <span className="text-gray-300 text-sm xs:text-base">2h 56m duration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-4 w-4 xs:h-5 xs:w-5 text-purple-400" />
                    <span className="text-gray-300 text-sm xs:text-base">847 comments</span>
                  </div>
                </div>
              </div>

              {/* Related Movies */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 xs:p-6 border border-white/10">
                <h3 className="text-white text-lg xs:text-xl font-bold mb-4 xs:mb-6">You May Also Like</h3>
                <div className="space-y-3 xs:space-y-4">
                  {[
                    { title: "The Dark Knight", year: "2008", rating: "9.0" },
                    { title: "Batman Begins", year: "2005", rating: "8.2" },
                    { title: "Joker", year: "2019", rating: "8.4" }
                  ].map((movie, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 xs:p-3 hover:bg-white/5 rounded-lg transition-colors duration-200 cursor-pointer">
                      <div className="w-12 h-16 xs:w-16 xs:h-20 bg-gray-700 rounded-lg flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium text-sm xs:text-base truncate">{movie.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-gray-400 text-xs xs:text-sm">{movie.year}</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-gray-400 text-xs xs:text-sm">{movie.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchNow;
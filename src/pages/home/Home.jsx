import React, { useEffect, useState } from 'react';
// import { newSeries, recentlyUpdated, newMovies,trendingMovies, recommendedContent} from '../../constants';
import HeaderSection from '../../components/header-section/HeaderSection.jsx';
import HeroSection from './components/HeroSection';
import SectionMain from './components/SectionMain';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// Main App Component
const Home = () => {

  const [trendingMovies, setTrendingMovies] = useState([])
  const [newMovies, setNewMovies] = useState([])
  const [newSeries, setNewSeries] = useState([])
  const [recommendedContent, setRecommendedContent] = useState([])
  const [recentlyUpdated, setRecentlyUpdated] = useState([])

  let navigate = useNavigate();


  useEffect(() => {
    axios.get('https://fooapi.com/api/movies')
    .then(response => {
      const movieData = response.data.data;
      setTrendingMovies(movieData.slice(0, 4));
      setNewMovies(movieData.slice(35, 41));
      setNewSeries(movieData.slice(11, 17));
      setRecommendedContent(movieData.slice(17, 23));
      setRecentlyUpdated(movieData.slice(25, 29));
    });
  },[])


return (
  <div className="relative min-h-screen overflow-hidden">
    {/* Dynamic Background with Multiple Sources */}
    <div 
      className="absolute inset-0 transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: trendingMovies[0]?.poster 
          ? `url(${trendingMovies[0].poster})` 
          : newMovies[0]?.poster 
            ? `url(${newMovies[0].poster})`
            : 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll"
      }}
    />

    {/* Multi-Layer Background Overlay System (Same as Movie Details) */}
    <div className="absolute inset-0 bg-black/80"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/75"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-transparent to-black/70"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90"></div>

    {/* Animated Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-purple-900/20 animate-pulse"></div>

    {/* Content Container */}
    <div className="relative z-10">
      <HeaderSection />
      <HeroSection />
 

      {/* Main Content with Glass Effect Background */}
      <div className="relative">
        {/* Recently Updated Section */}
        <section className="px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          <div className="max-w-7xl mx-auto">
            {/* Section Header with Glass Effect */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-6 border border-white/10">
              <h2 className="text-red-400 text-lg sm:text-xl lg:text-2xl font-bold drop-shadow-lg">
                Recently Updated
              </h2>
            </div>
            
            {/* Scrollable Cards Container */}
            <div className="overflow-x-auto py-2 px-2">
              <div className="flex space-x-3 sm:space-x-4 min-w-max scrollbar-hide">
                {recentlyUpdated.map((item, index) => (
                  <div 
                    key={index}
                    onClick={() => navigate(`/movie/${item.id}`)}
                    className="group relative bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-3 sm:p-4 min-w-max cursor-pointer transition-all duration-500 ease-out hover:bg-black/70 hover:border-red-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"
                    style={{
                      minWidth: "280px",
                      maxWidth: "320px"
                    }}
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      {/* Movie Poster with Overlay */}
                      <div className="relative flex-shrink-0 overflow-hidden rounded-lg">
                        {item.poster ? (
                          <img
                            src={item.poster}
                            alt={item.title}
                            className="w-14 sm:w-16 lg:w-18 h-12 sm:h-14 lg:h-16 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-14 sm:w-16 lg:w-18 h-12 sm:h-14 lg:h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{item.title?.charAt(0)}</span>
                          </div>
                        )}
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Movie Information */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white text-sm sm:text-base font-semibold drop-shadow-sm truncate group-hover:text-red-300 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-xs sm:text-sm drop-shadow-sm truncate">
                          {item.director}
                        </p>
                        <p className="text-gray-400 text-xs drop-shadow-sm">
                          {item.year}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Components with Enhanced Backgrounds */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          <div className="bg-black/30 backdrop-blur-sm border-t border-white/10 scrollbar-hide">
            <SectionMain title="Trending" movies={trendingMovies} isLarge={true} />
          </div>
          
          <div className="bg-black/20 backdrop-blur-sm">
            <SectionMain title="New Release - Movies" movies={newMovies} />
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm">
            <SectionMain title="New Release - Series" movies={newSeries} />
          </div>
          
          <div className="bg-black/25 backdrop-blur-sm border-b border-white/10 pb-8 sm:pb-12 lg:pb-16">
            <SectionMain title="Recommended" movies={recommendedContent} />
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Fade Gradient */}
    <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 lg:h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-20"></div>

  </div>
);

};


export default Home;
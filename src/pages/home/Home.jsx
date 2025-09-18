import React, { useEffect, useState } from 'react';
// import { newSeries, recentlyUpdated, newMovies,trendingMovies, recommendedContent} from '../../constants';
import HeaderSection from '../../components/HeaderSection';
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
      setTrendingMovies(movieData.slice(0, 5));
      setNewMovies(movieData.slice(35, 41));
      setNewSeries(movieData.slice(11, 17));
      setRecommendedContent(movieData.slice(17, 23));
      setRecentlyUpdated(movieData.slice(25, 29));
    });
  },[])

  return (
    <div className="min-h-screen bg-gray-900">
      <HeaderSection />
      <HeroSection />

      {/* Recently Updated Section */}
      <div className="px-6 py-6 z-10 max-w-7xl mx-auto">
        <h2 className="text-red-400 text-xl font-bold mb-4">Recently Updated</h2>    
        <div className="flex space-x-4 overflow-x-auto">
          {recentlyUpdated.map((item, index) => (
            <div onClick={() => { navigate(`/movie/${item.id}`) }}  key ={index} className="flex items-center space-x-3 bg-gray-800 rounded-lg p-3 min-w-max cursor-pointer hover:shadow-2xl transform hover:scale-95 transition-all duration-300 shadow-lg overflow-hidden ">
              <div style={{ backgroundImage: item.poster ? `url(${item.poster})` : undefined }} className="w-14 h-12 bg-gray-600 rounded flex-shrink-0"></div>
              <div>
                <h3 className="text-white text-sm font-medium">{item.title}</h3>
                <p className="text-gray-400 text-xs">{item.director}</p>
                <p className="text-gray-500 text-xs">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      

      <SectionMain title="Trending" movies={trendingMovies} isLarge={true} />
      <SectionMain title="New Release - Movies" movies={newMovies} />
      <SectionMain title="New Release - Series" movies={newSeries} />
      <SectionMain title="Recommended" movies={recommendedContent} />
    </div>
  );
};


export default Home;
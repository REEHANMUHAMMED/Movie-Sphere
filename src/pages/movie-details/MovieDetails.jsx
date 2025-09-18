/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import HeaderSection from '../../components/HeaderSection';
import Comments from './components/Comments';
import MovieInfo from './components/MovieInfo';
import Recommendation from './components/Recommendations';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Main Movie Detail Component
const MovieDetails = () => {

    const [recommendedContent, setRecommendedContent] = useState([])
    const [movie, setMovie] = useState({})
    const {id} = useParams();
  
  useEffect(() => {
    axios.get(`https://fooapi.com/api/movies/${id}`)
    .then(response => {
      const movieData = response.data.data;
      setMovie(movieData);
    });
  },[])

  
  useEffect(() => {
    axios.get('https://fooapi.com/api/movies')
    .then(response => {
      const movieData = response.data.data;
      setRecommendedContent(movieData.slice(15, 20));
    });
  },[])

  const comments = [
    {
      author: "JAMES",
      date: "12/06/2020",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
      likes: 0,
      avatar: "https://img.favpng.com/18/18/13/3d-man-avatar-cartoon-man-with-beard-and-glasses-Sdhcwhih_t.jpg"
    },
    {
      author: "MICHELL",
      date: "12/06/2020",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
      likes: 0,
      avatar: "https://img.favpng.com/12/4/17/3d-man-avatar-cartoon-man-with-gray-beard-F9jzgcLt_t.jpg"
    },
    {
      author: "AMINAH",
      date: "12/06/2020",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
      likes: 0,
      avatar: "https://thumbs.dreamstime.com/b/d-icon-cartoon-boy-glasses-smiling-wearing-yellow-sweater-concept-happiness-warmth-transparent-png-background-349563384.jpg"
    },
    {
      author: "BENNIE",
      date: "11/04/2020",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
      likes: 0,
      avatar: "https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6833.jpg?semt=ais_hybrid&w=740&q=80"
    }
  ];


  // let movie = movie2;

  // console.log({movie})

  return (
    <div className="min-h-screen bg-gray-900">
      <HeaderSection />
      <MovieInfo movie={movie} />
      {/* <Episodes episodes={episodes} /> */}
      <Recommendation recommendations={recommendedContent} />
      <Comments comments={comments} />
    </div>
  );
};

export default MovieDetails;
import { Routes, Route} from 'react-router-dom'
import Home from "./pages/home/Home.jsx";
import MovieDetails from './pages/movie-details/MovieDetails.jsx';
import SearchList from './pages/search-list/SearchList.jsx';
import Signup from './pages/signup-page/Signup.jsx';
import WatchNow from './pages/watchnow/WatchNow.jsx';





function App() {
  return (
       <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />       
        <Route path="/search" element={<SearchList/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/watch" element={<WatchNow/>} />
        
      </Routes>    
       </>
  )
}

export default App

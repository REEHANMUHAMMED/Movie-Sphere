import { Routes, Route} from 'react-router-dom'
import Home from "./pages/home/Home.jsx";
import MovieDetails from './pages/movie-details/MovieDetails.jsx';
import SearchList from './pages/search-list/SearchList.jsx';


function App() {
  return (
       <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />       
        <Route path="/search" element={<SearchList/>} />
      </Routes>    
       </>
  )
}

export default App

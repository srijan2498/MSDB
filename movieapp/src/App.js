import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import MovieInfoItem from './components/MovieInfo/MovieInfoItem';
import Movie from './components/Movies/Movie';
import Navbar from './components/Navbar/Navbar';
import Poster from './components/Poster/Poster'; 
import axios from 'axios';




function App() {

  const [searchValue, setSearchValue] = useState("");

  const searchFunc = (e) => {
    e.preventDefault();
    setSearchValue(document.getElementById("searchInput").value);
    document.getElementById("searchInput").value = "";
    setDetails('')
  }

  const [page, setPage] = useState(1);

  const prevFunc = () => {
    setPage(page - 1);
    document.getElementById('movieHeading').scrollIntoView()
  }

  const nextFunc = () => {
    setPage(page + 1);
    document.getElementById('movieHeading').scrollIntoView()
  }

  const [details, setDetails]=useState()

  const openMovie = (imdbId) => {
    const movieUrl = `https://www.omdbapi.com/?i=${imdbId}&apikey=616211bb`
    axios.get(movieUrl).then((res) => {
      setDetails(res.data)
    })
  }

  return (
    <div>
      <Navbar searchFunc={searchFunc} />
      {!searchValue && <Poster />}
      {!details && searchValue && <Movie searchValue={searchValue} page={page} prevFunc={prevFunc} nextFunc={nextFunc} openMovie={openMovie} />}
      {details && <MovieInfoItem data={details} />}
      <Footer />
    </div>
  );
}

export default App;


// http://www.omdbapi.com/?i=tt3896198&apikey=616211bb
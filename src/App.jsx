//entry point
import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from './components/navbar';
import Movies from './components/movies';
import Watchlist from './components/watchlist';
import Banner from './components/banner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
//imported by "npm install react-router-dom # always need this!" google
function App() {

  let [watchlist, setWatchlist] = useState([]);

  let handleAddToWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    localStorage.setItem("storedMovies", JSON.stringify(newWatchlist)); //store the watchlist in local storage...watchlist is the key (you can name it anything) //you set items in local storage
    setWatchlist(newWatchlist);
    console.log(watchlist);
  }
    
  // let handleRemoveFromWatchlist = (movieObj) => {
  //   let filteredWatchlist = watchlist.filter((movie) =>{
  //       return movie.id !== movieObj.id;
  //   });
  //  setWatchlist(filteredWatchlist);
  //  console.log(watchlist);
  // }

  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id !== movieObj.id;
    });
    setWatchlist(filteredWatchlist);
  };
  

  useEffect(() => {
    let MoviesFromLocalStorage = localStorage.getItem("storedMovies");   //get items from local storage
    if (!MoviesFromLocalStorage) {
      return;
    }
    setWatchlist(JSON.parse(MoviesFromLocalStorage));
  }, []); // Add an empty dependency array here
    


  return (

    <>
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path="/" element={
            <> 
            <Banner /> 
          <Movies watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />
           </>
          } 
          />

          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} setWatchlist={setWatchlist} />} />
      


        </Routes>

      </BrowserRouter>


    </>
  );
}

export default App;



//https://api.themoviedb.org/3/movie/popular?api_key=48a11fca7e22309ba86b205b65b86de2&language=en-US&page=2
